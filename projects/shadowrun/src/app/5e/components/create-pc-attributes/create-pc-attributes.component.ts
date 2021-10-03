import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getFilteredObject, UnsubscribeDirective } from '@shared';
import {
  Attribute, ATTRIBUTES, Awakening, AWAKENING_ID, AWAKENINGS, Character, CharacterAttribute, CharacterMetamagic, CharacterQuality,
  DEFAULT_ATTRIBUTE_RANGE, Metatype, METATYPE_ID, METATYPES, NEGATIVE_QUALITIES, POSITIVE_QUALITIES, Quality,
  RACIAL_QUALITIES
} from '@shadowrun/app/5e';

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
  @Input() set initial(value: Character) { this.character$.next(value); }
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  @Input() set metatype(value: METATYPE_ID) { this.metatype$.next(value); }
  @Input() set qualities(value: CharacterQuality[]) { this.qualities$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly attributes: Attribute[] = ATTRIBUTES;
  private readonly character$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<METATYPE_ID> = new BehaviorSubject(null);
  private readonly qualities$: BehaviorSubject<CharacterQuality[]> = new BehaviorSubject(null);
  private readonly dependencies$ = combineLatest([
    this.awakening$.asObservable(),
    this.metatype$.asObservable(),
    this.qualities$.asObservable(),
    this.character$.asObservable()
  ]);
  private readonly attributes$ = this.dependencies$.pipe(
    tap(res => this.setAttributes(res[0], res[1], res[2], res[3]))
  );

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.attributes$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.setChange();
      } else {
        this.onChange(null);
      }
    });
  }

  onChange = (_: any) => {};
  writeValue(arr: CharacterAttribute[]): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  private setAttributes(
    awakeningId: AWAKENING_ID,
    metatypeId: METATYPE_ID,
    qualities: CharacterQuality[],
    character: Character
  ): void {
    const AWAKENING: Awakening = AWAKENINGS.find(i => i.id === awakeningId);
    const METATYPE: Metatype = METATYPES.find(i => i.id === metatypeId);
    const values = this.form.value;
    const QUALITIES: Quality[] = [
      ...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES, ...RACIAL_QUALITIES
    ].filter(i => (qualities ?? []).map(q => q.id).includes(i.id));

    this.form.clear({ emitEvent: false });

    ATTRIBUTES.forEach(attribute => {
      const previous: CharacterAttribute | null = (character?.attributes ?? []).find(i => i.id === attribute.id);
      const range: [number, number] = !!AWAKENING && !!METATYPE
        ? METATYPE.attributes[attribute.id] ?? AWAKENING.attributes[attribute.id]
        : DEFAULT_ATTRIBUTE_RANGE;
      const min: number = !!previous ? previous.rating : range[0];
      const max: number = range[1] + QUALITIES
        .filter(i => !!i.formulas?.ATTRIBUTE_MAX)
        .reduce((acc, cur) => {
          return acc + cur.formulas.ATTRIBUTE_MAX(qualities.find(i => i.id === cur.id), attribute.id);
        }, 0);
      const value = values.find(i => i.id === attribute.id);
      const rating: number = !!value
        ? value.rating - value.min + min
        : min;
      const clamp: number = Math.min(Math.max(rating, min), max);
      this.form.push(new FormGroup({
        id: new FormControl(attribute.id),
        rating: new FormControl(clamp, [
          Validators.required, Validators.min(min), Validators.max(max)
        ]),
        /* *** */
        min: new FormControl(min),
        max: new FormControl(max)
      }));
    });
    this.setChange();
  }

  private setChange(): void {
    const allowed: string[] = ['id', 'rating'];
    const value: CharacterAttribute[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
    this.onChange(value);
  }
}
