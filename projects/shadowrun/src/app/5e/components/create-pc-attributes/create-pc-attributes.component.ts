import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnsubscribeDirective } from '@shared';
import {
  Attribute,
  ATTRIBUTES, Awakening, AWAKENING_ID, AWAKENINGS, Metatype, METATYPE_ID, METATYPES
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
  @Input() set awakening(value: AWAKENING_ID) { this.awakening$.next(value); }
  @Input() set metatype(value: METATYPE_ID) { this.metatype$.next(value); }
  readonly form: FormArray = new FormArray([]);
  readonly attributes: Attribute[] = ATTRIBUTES;
  private readonly awakening$: BehaviorSubject<AWAKENING_ID> = new BehaviorSubject(null);
  private readonly metatype$: BehaviorSubject<METATYPE_ID> = new BehaviorSubject(null);
  private readonly attributes$ = combineLatest([
    this.awakening$.asObservable(), this.metatype$.asObservable()
  ]).pipe(
    map(res => {
      this.setAttributes(res[0], res[1]);
    })
  );

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.attributes$.subscribe();
    this.subscriptions = this.form.valueChanges.subscribe(res => this.onChange(res));
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  private setAttributes(awakeningId: AWAKENING_ID, metatypeId: METATYPE_ID): void {
    const awakening: Awakening = AWAKENINGS.find(i => i.id === awakeningId);
    const metatype: Metatype = METATYPES.find(i => i.id === metatypeId);

    this.form.clear();

    ATTRIBUTES.forEach(attribute => {
      const range = !!awakening && !!metatype ? metatype.attributes[attribute.id] ?? awakening.attributes[attribute.id] : [1, 6];
      this.form.push(new FormGroup({
        id: new FormControl(attribute.id),
        min: new FormControl(range[0]),
        max: new FormControl(range[1]),
        rating: new FormControl(range[0], [Validators.required, Validators.min(range[0]), Validators.max(range[1])]),
      }));
    });
  }
}
