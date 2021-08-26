import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnsubscribeDirective } from '@shared';
import { Awakening, AwakeningId, Metatype, MetatypeId } from '@shadowrun/app/5e/5e.models';
import { FifthEditionService } from '@shadowrun/app/5e/5e.service';

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
  @Input() set awakening(value: AwakeningId) { this.awakening$.next(value); }
  @Input() set metatype(value: MetatypeId) { this.metatype$.next(value); }
  readonly form: FormArray = new FormArray([]);
  private readonly awakening$: BehaviorSubject<AwakeningId> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<MetatypeId> = new BehaviorSubject(null);
  private readonly attributes$ = combineLatest([
    this.awakening$.asObservable(), this.metatype$.asObservable()
  ]).pipe(
    map(res => {
      this.setAttributes(res[0], res[1]);
    })
  );
  propagateChange = (_: any) => {};

  constructor(public data: FifthEditionService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.attributes$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(res => this.propagateChange(res));
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}

  private setAttributes(awakeningId: AwakeningId, metatypeId: MetatypeId): void {
    const awakening: Awakening = this.data.awakenings.find(i => i.id === awakeningId);
    const metatype: Metatype = this.data.metatypes.find(i => i.id === metatypeId);

    this.form.clear();

    this.data.attributes.forEach(attribute => {
      const range = !!awakening && !!metatype ? metatype.attributes[attribute.id] ?? awakening.attributes[attribute.id] : [1, 6];
      // const current = attributes.find(i => i.id === attribute.id);
      // const clamp = Math.max(range[0], Math.min(!!current ? current.value : range[0], range[1]));
      this.form.push(new FormGroup({
        id: new FormControl(attribute.id),
        min: new FormControl(range[0]),
        max: new FormControl(range[1]),
        rating: new FormControl(range[0], [Validators.required, Validators.min(range[0]), Validators.max(range[1])]),
      }));
    });
  }
}
