import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map, switchAll, switchMap, tap} from 'rxjs/operators';
import {UnsubscribeDirective} from '@shared';
import {
  Attribute,
  ATTRIBUTE_ID,
  ATTRIBUTES,
  Awakening,
  AWAKENING_ID,
  AWAKENINGS, CharacterAttribute,
  DEFAULT_ATTRIBUTE_RANGE,
  Metatype,
  METATYPE_ID,
  METATYPES,
  NEGATIVE_QUALITIES,
  POSITIVE_QUALITIES,
  Quality,
  RACIAL_QUALITIES
} from '@shadowrun/app/5e';
import {Character, CharacterQuality} from '@shadowrun/app/5e/5e.models';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-attributes',
  templateUrl: './create-pc-attributes.component.html',
  styleUrls: ['./create-pc-attributes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcAttributesComponent),
      multi: true
    }
  ]
})
export class CreatePcAttributesComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.initial$.next(value); }
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  @Input() set metatype(value: METATYPE_ID) { this.metatype$.next(value); }
  @Input() set qualities(value: CharacterQuality[]) { this.qualities$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly attributes: Attribute[] = ATTRIBUTES;
  private readonly initial$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<METATYPE_ID> = new BehaviorSubject(null);
  private readonly qualities$: BehaviorSubject<CharacterQuality[]> = new BehaviorSubject(null);
  private readonly dependencies$ = combineLatest([
    this.awakening$.asObservable(),
    this.metatype$.asObservable(),
    this.qualities$.asObservable()
  ]);
  private readonly attributes$ = this.initial$.pipe(
    tap(res => {
      if (!res) { return; }
      // this.form.clear();
      // res.attributes.forEach(attribute => {
      //   this.form.push(new FormGroup({
      //     id: new FormControl(attribute.id),
      //     min: new FormControl(attribute.min),
      //     max: new FormControl(attribute.max),
      //     rating: new FormControl(attribute.rating, [
      //       Validators.required,
      //       Validators.min(attribute.min),
      //       Validators.max(attribute.max)
      //     ])
      //   }));
      // });
    }),
    switchMap(() => this.dependencies$),
    tap(res => this.setAttributes(res[0], res[1], res[2]))
  );

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.attributes$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
    });
  }

  onChange = (_: any) => {};
  writeValue(arr: CharacterAttribute[]): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  private setAttributes(
    awakeningId: AWAKENING_ID,
    metatypeId: METATYPE_ID,
    qualities: CharacterQuality[]
  ): void {
    console.log(awakeningId, metatypeId);
    const awakening: Awakening = AWAKENINGS.find(i => i.id === awakeningId);
    const metatype: Metatype = METATYPES.find(i => i.id === metatypeId);
    const values: CharacterAttribute[] = this.form.value;
    const QUALITIES: Quality[] = [
      ...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES, ...RACIAL_QUALITIES
    ].filter(i => (qualities ?? []).map(q => q.id).includes(i.id));

    this.form.clear();

    ATTRIBUTES.forEach(attribute => {
      const range = !!awakening && !!metatype
        ? metatype.attributes[attribute.id] ?? awakening.attributes[attribute.id]
        : DEFAULT_ATTRIBUTE_RANGE;
      const min: number = range[0];
      const max: number = range[1] + QUALITIES.reduce((acc, cur) => {
        return acc + (!!(cur.formulas ?? {})[attribute.id] ? cur.formulas[attribute.id].max : 0);
      }, 0);
      const value: CharacterAttribute | null = values.find(i => i.id === attribute.id);
      const rating: number = !!value ? value.rating - value.min + min : min;
      const clamp: number = Math.min(Math.max(rating, min), max);
      this.form.push(new FormGroup({
        id: new FormControl(attribute.id),
        min: new FormControl(min),
        max: new FormControl(max),
        rating: new FormControl(clamp, [Validators.required, Validators.min(min), Validators.max(max)])
      }));
    });
  }
}
