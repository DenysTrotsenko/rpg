import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'number-input-cell',
    templateUrl: './number-input-cell.component.html',
    styleUrls: ['./number-input-cell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumberInputCellComponent),
            multi: true
        }
    ],
    standalone: false
})
export class NumberInputCellComponent {
  @Input() edit: boolean = false;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Output() valueChanges: EventEmitter<number> = new EventEmitter();

  onChangeClick(step: number): void {
    if (this.value + step < this.min) {
      this.value = this.min;
    } else if (this.value + step > this.max) {
      this.value = this.max;
    } else {
      this.value += step;
    }

    this.propagateChange(this.value);
    this.valueChanges.emit(this.value);
  }

  propagateChange = (_: any) => {};
  writeValue(value: string): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
}
