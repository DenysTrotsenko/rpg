import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { getFilteredObject, UnsubscribeDirective } from '@shared';
import {
  AWAKENING_ID, Character, CharacterQuality, CharacterRitual, Metatype, METATYPE_ID, METATYPES, NEGATIVE_QUALITIES,
  POSITIVE_QUALITIES, Quality, QUALITY_ID, RACIAL_QUALITIES
} from '@shadowrun/app/5e';


@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-qualities',
  templateUrl: './create-pc-qualities.component.html',
  styleUrls: ['./create-pc-qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcQualitiesComponent),
      multi: true
    }
  ]
})
export class CreatePcQualitiesComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  @Input() set initial(value: Character) { this.initial$.next(value); }
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  @Input() set metatype(value: METATYPE_ID) { this.metatype$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly initial$: BehaviorSubject<Character> = new BehaviorSubject(null);
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<METATYPE_ID> = new BehaviorSubject(null);
  readonly fromMetatype$: Observable<CharacterQuality[]> = this.metatype$.pipe(
    map(metatypeId => {
      const metatype: Metatype = METATYPES.find(i => i.id === metatypeId);
      const qualities: CharacterQuality[] = metatype?.qualities ?? [];

      return qualities.map(quality => {
        return {
          id: quality.id,
          rating: quality.rating,
          specialty: quality.specialty
        };
      });
    })
  );
  readonly qualities$: Observable<Quality[]> = of([...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES]);
  readonly racial$: Observable<Quality[]> = of(RACIAL_QUALITIES);
  readonly positive$: Observable<Quality[]> = of(POSITIVE_QUALITIES);
  readonly negative$: Observable<Quality[]> = of(NEGATIVE_QUALITIES);
  onChange = (_: any) => {};

  get negativeQualitiesMaxCost(): number { return -25; } // TODO: change magic numbers
  get positiveQualitiesMaxCost(): number { return 25; } // TODO: change magic numbers
  get negativeQualitiesCost(): number {
    const costs: number[] = this.form.value.map(i => i.rating?.cost ?? 0);
    const negative: number[] = costs.filter(i => i < 0);

    return negative.reduce((acc, cur) => acc + cur, 0);
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.initial$.pipe(tap(res => { this.setInitial(res); })).subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.setChange();
      } else {
        this.onChange(null);
      }
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  isOptionDisabled(id: QUALITY_ID): boolean {
    const qualities: Quality[] = [...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES];
    return !!this.form.value.find(i => i.id === id) && !qualities.find(i => i.id === id).specialty;
  }

  isRatingOptionDisabled(i: number, control: AbstractControl): boolean {
    return i < (control.get('initialRating').value ?? 0);
  }

  isDeletable(i: AbstractControl): boolean {
    return !i.get('readonly').value;
  }

  onAddQualityClick(): void {
    const qualities: Quality[] = [...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES];
    const quality: Quality = qualities.find(q => !this.form.value.find(i => i.id === q.id && !q.specialty));
    if (!quality) { return; }
    this.form.push(new FormGroup({
      id: new FormControl(quality.id, [Validators.required]),
      rating: new FormControl(0, [Validators.required]),
      specialty: new FormControl(null, !!quality.specialty ? [Validators.required] : []),
      readonly: new FormControl(false),
      initialRating: new FormControl(0)
    }));
  }

  onRemoveQualityClick(index: number): void {
    this.form.removeAt(index);
  }

  private setInitial(initial: Character): void {
    const qualities = initial?.qualities ?? [];

    this.form.clear();
    qualities.forEach(quality => {
      const group: FormGroup = new FormGroup({
        id: new FormControl(quality.id),
        rating: new FormControl(quality.rating, [Validators.required]),
        specialty: new FormControl(quality.specialty),
        readonly: new FormControl(true),
        initialRating: new FormControl(quality.rating),
      });
      this.form.push(group);
      group.disable({ emitEvent: false });
      group.get('rating').enable();
    });
    this.setChange();
  }

  private setChange(): void {
    const allowed: string[] = ['id', 'rating', 'specialty'];
    const value: CharacterQuality[] = this.form.getRawValue().map(res => getFilteredObject(res, allowed));
    this.onChange(value);
  }
}
