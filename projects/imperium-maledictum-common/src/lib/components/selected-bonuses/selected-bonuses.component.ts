import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectBonusComponent } from '@im-common';

import {
  Bonus,
  BonusOption,
  CharacteristicId,
  SkillId,
  SpecialisationId,
  TalentId
} from '@imperium-maledictum-1e/models/common';

export type BonusId = CharacteristicId | SkillId | SpecialisationId | TalentId;

@Component({
    selector: 'selected-bonuses',
    templateUrl: './selected-bonuses.component.html',
    styleUrls: ['./selected-bonuses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SelectBonusComponent],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectedBonusesComponent),
            multi: true
        }
    ]
})
export class SelectedBonusesComponent implements ControlValueAccessor {
  @Input() set value(bonuses: Bonus[]) {
    this.internal = [];
    this.emit(new Map());
    this.bonuses = bonuses;
  }
  @Output() valueChanges: EventEmitter<Map<BonusId, number>> = new EventEmitter();

  bonuses = null;
  private internal = [];

  onBonusChange(index: number, bonus: Bonus, selected: number[]): void {
    this.internal[index] = [
      ...bonus.options.filter((o, i) => selected.includes(i))
    ];
    const external: Map<BonusId, number> = this.internal.reduce((acc, options: BonusOption[]) => {
      options.forEach(option => {
        if (option.ids) {
          option.ids.forEach(id => {
            const value = acc.get(id) ?? 0;
            acc.set(id, value + option.value);
          });
        } else {
          const id = option.id;
          const value = acc.get(id) ?? 0;
          acc.set(id, value + option.value);
        }
      });
      return acc;
    }, new Map());
    this.emit(external);
  }

  private emit(values: Map<BonusId, number>): void {
    this.propagateChange(values);
    this.valueChanges.emit(values);
  }

  propagateChange = (_: any) => {};
  writeValue(value: number): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
}
