import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';
import { UnsubscribeDirective } from '@shared';
import {Awakening, AwakeningId, Metatype, MetatypeId, Quality, QualityId, SpellId} from '@shadowrun/app/5e/5e.models';
import { FifthEditionService } from '@shadowrun/app/5e/5e.service';
import { NEGATIVE_QUALITIES_MAX_COST, POSITIVE_QUALITIES_MAX_COST } from '@shadowrun/app/5e/5e.variables';

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
  @Input() set awakening(value: AwakeningId) { this.awakening$.next(value); }
  @Input() set metatype(value: MetatypeId) { this.metatype$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly awakening$: BehaviorSubject<AwakeningId> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<MetatypeId> = new BehaviorSubject(null);
  readonly qualities$: Observable<Quality[]> = combineLatest([
    this.awakening$.asObservable(), this.metatype$.asObservable()
  ]).pipe(
    tap(res => {
      this.setQualities(res[0], res[1]);
    }),
    map(res => this.data.qualities),
    shareReplay(1)
  );
  readonly positive$: Observable<Quality[]> = this.qualities$.pipe(map(res => res.filter(i => i.ratings[0].cost >= 0)));
  readonly negative$: Observable<Quality[]> = this.qualities$.pipe(map(res => res.filter(i => i.ratings[0].cost < 0)));
  propagateChange = (_: any) => {};

  get negativeQualitiesMaxCost(): number { return NEGATIVE_QUALITIES_MAX_COST; }
  get positiveQualitiesMaxCost(): number { return Math.abs(POSITIVE_QUALITIES_MAX_COST); }
  get negativeQualitiesCost(): number {
    const costs: number[] = this.form.value.map(i => i.rating?.cost ?? 0);
    const negative: number[] = costs.filter(i => i < 0);

    return negative.reduce((acc, cur) => acc + cur, 0);
  }

  constructor(public data: FifthEditionService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.qualities$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(res => this.propagateChange(res));
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}

  isOptionDisabled(id: QualityId): boolean {
    return !!this.form.value.find(i => i.id === id) && !this.data.qualities.find(i => i.id === id).specialty;
  }

  onAddQualityClick(): void {
    const quality: Quality = this.data.qualities.find(q => !this.form.value.find(i => i.id === q.id && !q.specialty));
    this.form.push(new FormGroup({
      id: new FormControl(quality.id, [Validators.required]),
      rating: new FormControl(quality.ratings[0], [Validators.required]),
      specialty: new FormControl(null, !!quality.specialty ? [Validators.required] : [])
    }));
  }

  onRemoveQualityClick(id: QualityId): void {
    this.form.removeAt(this.form.value.map(i => i.id).indexOf(id));
  }

  private setQualities(awakeningId: AwakeningId, metatypeId: MetatypeId): void {
    const awakening: Awakening = this.data.awakenings.find(i => i.id === awakeningId);
    const metatype: Metatype = this.data.metatypes.find(i => i.id === metatypeId);

    // this.form.clear();
    //
    // this.form.push(new FormGroup({
    //   id: new FormControl(first.id),
    //   rating: new FormControl(first.ratings[0], [Validators.required]),
    //   specialty: new FormControl(null, [Validators.required])
    // }));
  }
}
