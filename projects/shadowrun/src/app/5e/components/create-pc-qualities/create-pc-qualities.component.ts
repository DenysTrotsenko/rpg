import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { UnsubscribeDirective } from '@shared';
import {
  Awakening, AWAKENING_ID, AWAKENINGS, Metatype, METATYPE_ID, METATYPES, NEGATIVE_QUALITIES,
  POSITIVE_QUALITIES, Quality, QUALITY_ID,
  RACIAL_QUALITIES
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
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  @Input() set metatype(value: METATYPE_ID) { this.metatype$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<METATYPE_ID> = new BehaviorSubject(null);
  readonly qualities$: Observable<Quality[]> = combineLatest([
    this.awakening$.asObservable(), this.metatype$.asObservable()
  ]).pipe(
    tap(res => {
      this.setQualities(res[0], res[1]);
    }),
    map(() => [...RACIAL_QUALITIES, ...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES]),
    shareReplay(1)
  );
  readonly racial$: Observable<Quality[]> = of(RACIAL_QUALITIES);
  readonly positive$: Observable<Quality[]> = of(POSITIVE_QUALITIES);
  readonly negative$: Observable<Quality[]> = of(NEGATIVE_QUALITIES);
  propagateChange = (_: any) => {};

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
    this.subscriptions = this.qualities$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(res => this.propagateChange(res));
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}

  isOptionDisabled(id: QUALITY_ID): boolean {
    const qualities: Quality[] = [...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES];
    return !!this.form.value.find(i => i.id === id) && !qualities.find(i => i.id === id).specialty;
  }

  isDeletable(i: AbstractControl): boolean {
    return i.get('deletable').value;
  }

  onAddQualityClick(): void {
    const qualities: Quality[] = [...POSITIVE_QUALITIES, ...NEGATIVE_QUALITIES];
    const quality: Quality = qualities.find(q => !this.form.value.find(i => i.id === q.id && !q.specialty));

    this.form.push(new FormGroup({
      id: new FormControl(quality.id, [Validators.required]),
      rating: new FormControl(0, [Validators.required]),
      specialty: new FormControl(null, !!quality.specialty ? [Validators.required] : []),
      deletable: new FormControl(true, [Validators.required])
    }));
  }

  onRemoveQualityClick(id: QUALITY_ID): void {
    this.form.removeAt(this.form.value.map(i => i.id).indexOf(id));
  }

  private setQualities(awakeningId: AWAKENING_ID, metatypeId: METATYPE_ID): void {
    const awakening: Awakening = AWAKENINGS.find(i => i.id === awakeningId);
    const metatype: Metatype = METATYPES.find(i => i.id === metatypeId);

    this.form.clear();

    metatype.qualities.forEach(quality => {
      this.form.push(new FormGroup({
        id: new FormControl(quality.id),
        rating: new FormControl(quality.rating, [Validators.required]),
        specialty: new FormControl(null),
        deletable: new FormControl(false, [Validators.required])
      }));
    });
  }
}