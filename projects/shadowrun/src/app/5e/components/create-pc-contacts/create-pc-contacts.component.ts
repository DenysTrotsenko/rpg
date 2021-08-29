import { Component, OnInit, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { UnsubscribeDirective } from '@shared';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-create-pc-contacts',
  templateUrl: './create-pc-contacts.component.html',
  styleUrls: ['./create-pc-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreatePcContactsComponent),
      multi: true
    }
  ]
})
export class CreatePcContactsComponent extends UnsubscribeDirective implements ControlValueAccessor, OnInit {
  readonly form: FormArray = new FormArray([]);
  onChange = (_: any) => {};

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscriptions = this.form.valueChanges.subscribe(() => {
      const value = this.form.getRawValue();
      this.onChange(value);
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  onAddContactClick(): void {
    this.form.push(new FormGroup({
      id: new FormControl(`contact:${Date.now()}`, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      connection: new FormControl(1, [Validators.min(1), Validators.max(6)]),
      loyalty: new FormControl(1, [Validators.min(1), Validators.max(6)]),
      details: new FormControl('')
    }));
  }

  onRemoveContactClick(id: string): void {
    this.form.removeAt(this.form.value.map(i => i.id).indexOf(id));
  }
}
