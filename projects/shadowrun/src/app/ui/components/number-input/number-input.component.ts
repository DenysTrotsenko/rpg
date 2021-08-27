import { Component, ChangeDetectionStrategy, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  /* tslint:disable-next-line */
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true
    }
  ]
})
export class NumberInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() min: number = 0;
  @Input() max: number = 99;
  value: number = 0;
  touched: boolean = false;
  disabled: boolean = false;
  onChange = (_: any) => {};
  onTouched = () => {};
  writeValue(value: number): void { this.value = value; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}
  isRemoveDisabled(): boolean { return (this.value <= this.min) || this.disabled; }
  isAddDisabled(): boolean { return (this.value >= this.max) || this.disabled; }
  onRemoveClick(): void {
    this.markAsTouched();
    this.value -= 1;
    this.onChange(this.value);
  }
  onAddClick(): void {
    this.markAsTouched();
    this.value += 1;
    this.onChange(this.value);
  }
  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState(disabled: boolean): void { this.disabled = disabled; }
}
