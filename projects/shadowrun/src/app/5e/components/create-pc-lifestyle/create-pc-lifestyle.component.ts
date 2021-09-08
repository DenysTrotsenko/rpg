import {Component, OnInit, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {ComplexForm, Lifestyle, LifestyleOption} from '@shadowrun/app/5e/5e.models';
import {COMPLEX_FORMS} from '@shadowrun/app/5e/5e.complex-forms';
import {COMPLEX_FORM_ID} from '@shadowrun/app/5e/5e.enums';
import {UnsubscribeDirective} from '@shared';
import {LIFESTYLE_OPTIONS, LIFESTYLES} from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-lifestyle',
  templateUrl: './create-pc-lifestyle.component.html',
  styleUrls: ['./create-pc-lifestyle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcLifestyleComponent),
      multi: true
    }
  ]
})
export class CreatePcLifestyleComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  readonly form: FormArray = new FormArray([]);
  readonly LIFESTYLES: Lifestyle[] = LIFESTYLES;
  readonly LIFESTYLE_OPTIONS: LifestyleOption[] = LIFESTYLE_OPTIONS;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      const value = this.form.getRawValue();
      this.onChange(value);
    });
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getFormControl(abstract: AbstractControl, name: string): FormControl {
    return abstract.get(name) as FormControl;
  }

  onAddClick(): void {
    const lifestyle: Lifestyle = LIFESTYLES[0];
    const group: FormGroup = new FormGroup({
      id: new FormControl(lifestyle.id, [Validators.required]),
      options: new FormControl(null),
      details: new FormControl(null),
      term: new FormControl(1)
    });
    this.form.push(group);
  }

  onRemoveClick(id: COMPLEX_FORM_ID): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }
}
