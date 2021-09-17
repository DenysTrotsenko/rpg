import {Component, OnInit, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import { Gear} from '@shadowrun/app/5e/5e.models';
import { GEAR_ID} from '@shadowrun/app/5e/5e.enums';
import {UnsubscribeDirective} from '@shared';
import {GEAR} from '@shadowrun/app/5e/5e.gear';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-gear',
  templateUrl: './create-pc-gear.component.html',
  styleUrls: ['./create-pc-gear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcGearComponent),
      multi: true
    }
  ]
})
export class CreatePcGearComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  readonly form: FormArray = new FormArray([]);
  readonly items: Gear[] = GEAR;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      this.form.valid ? this.onChange(this.form.getRawValue()) : this.onChange(null);
    });
  }

  onChange = (_: any) => {};
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  getId(group: AbstractControl): FormControl {
    return group.get('id') as FormControl;
  }

  isAddDisabled(value: { id: GEAR_ID; }[]): boolean {
    return false;
  }

  isOptionDisabled(id: GEAR_ID): boolean {
    return false;
  }

  onAddClick(): void {
    const item: Gear = GEAR.find(s => !this.form.value.find(i => i.id === s.id));
    const group: FormGroup = new FormGroup({
      id: new FormControl(item.id, [Validators.required])
    });
    this.form.push(group);
  }

  onRemoveClick(id: GEAR_ID): void {
    this.form.removeAt(this.form.getRawValue().map(i => i.id).indexOf(id));
  }
}
