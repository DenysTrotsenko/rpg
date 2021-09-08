import {Component, OnInit, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {UnsubscribeDirective} from '@shared';
import {ComplexForm} from '@shadowrun/app/5e/5e.models';
import {COMPLEX_FORMS} from '@shadowrun/app/5e/5e.complex-forms';
import {COMPLEX_FORM_ID} from '@shadowrun/app/5e/5e.enums';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-ware',
  templateUrl: './create-pc-ware.component.html',
  styleUrls: ['./create-pc-ware.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcWareComponent),
      multi: true
    }
  ]
})
export class CreatePcWareComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  readonly form: FormArray = new FormArray([]);
  readonly items: ComplexForm[] = COMPLEX_FORMS;

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

  getId(group: AbstractControl): FormControl {
    return group.get('id') as FormControl;
  }

  isAddDisabled(value: { id: COMPLEX_FORM_ID; }[]): boolean {
    return COMPLEX_FORMS.every(cf => value.find(i => i.id === cf.id));
  }

  isOptionDisabled(id: COMPLEX_FORM_ID): boolean {
    return !!this.form.value.find(i => i.id === id);
  }

  onAddClick(): void {
    const cf: ComplexForm = COMPLEX_FORMS.find(s => !this.form.value.find(i => i.id === s.id));
    const group: FormGroup = new FormGroup({
      id: new FormControl(cf.id, [Validators.required])
    });
    this.form.push(group);
  }

  onRemoveClick(id: COMPLEX_FORM_ID): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }
}
