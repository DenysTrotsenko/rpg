import {Component, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  /* tslint:disable-next-line */
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true
    }
  ]
})
export class NumberInputComponent implements ControlValueAccessor {
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 99;
  @Output() valueChanges: EventEmitter<number> = new EventEmitter();
  touched: boolean = false;
  disabled: boolean = false;

  onChange = (_: any) => {};
  onTouch = () => {};
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void {}

  writeValue(value: number): void {
    this.value = value;
  }

  isRemoveDisabled(): boolean {
    return (this.value <= this.min) || this.disabled;
  }

  isAddDisabled(): boolean {
    return (this.value >= this.max) || this.disabled;
  }

  onRemoveClick(): void {
    this.markAsTouched();
    this.value -= 1;
    this.onChange(this.value);
    this.valueChanges.emit(this.value);
  }

  onAddClick(): void {
    this.markAsTouched();
    this.value += 1;
    this.onChange(this.value);
    this.valueChanges.emit(this.value);
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouch();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
