import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'number-input',
    templateUrl: './number-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumberInputComponent),
            multi: true
        }
    ],
    standalone: false
})
export class NumberInputComponent implements ControlValueAccessor {
  @Input() edit: boolean = false;
  @Input() min: number = 10;
  @Input() max: number = 99;
  @Input() step: number = 1;
  @Input() value: number;
  @Input() label: string;
  @Output() valueChanges: EventEmitter<number> = new EventEmitter();

  onChangeClick(step: number): void {
    const min = this.min ?? 10;
    const max = this.max ?? 99;

    if (this.value + step < min) {
      this.value = min;
    } else if (this.value + step > max) {
      this.value = max;
    } else {
      this.value += step;
    }

    this.propagateChange(this.value);
    this.valueChanges.emit(this.value);
  }

  propagateChange = (_: any) => {};
  writeValue(value: number): void { this.value = value; }
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
}
