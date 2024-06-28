import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule, MatListOption } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Bonus } from '@imperium-maledictum-1e/models/common';
import { DataService } from '../../data.service';
import { GetByIdPipe } from '../../pipes/get-by-id.pipe';

@Component({
  selector: 'select-bonus',
  templateUrl: './select-bonus.component.html',
  styleUrls: ['./select-bonus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatListModule, NgFor, NgIf, GetByIdPipe, ReactiveFormsModule, MatFormFieldModule, MatTooltipModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectBonusComponent),
      multi: true
    }
  ]
})
export class SelectBonusComponent implements ControlValueAccessor {
  readonly data = inject(DataService);

  @Input({ required: true }) set value(bonus: Bonus) {
    this.bonus = bonus;

    if (bonus.pick === bonus.options.length) {
      const all = new Array(bonus.options.length).fill(0).map((_, i) => i);
      this.control.setValue(all);
      this.emit(all);
    } else {
      this.control.setValue([]);
      this.emit([]);
    }
  }
  @Output() valueChanges: EventEmitter<number[]> = new EventEmitter();

  bonus: Bonus = null;
  readonly control: FormControl = new FormControl([]);

  onSelectionChange(selected: MatListOption[]): void {
    this.emit(selected.map(i => i.value));
  }

  private emit(values: number[]): void {
    this.propagateChange(values);
    this.valueChanges.emit(values);
  }

  propagateChange = (_: any) => {};
  writeValue(value: number): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
  trackById(_: number, item): unknown { return item.id; }
}
