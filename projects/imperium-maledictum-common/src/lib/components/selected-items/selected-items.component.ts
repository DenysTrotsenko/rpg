import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';

import { SelectBonusComponent } from '@im-common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ItemValue } from '@imperium-maledictum-1e/models/character';
import { ItemBonus, ItemBonusOption } from '@imperium-maledictum-1e/models/common';

@Component({
    selector: 'selected-items',
    templateUrl: './selected-items.component.html',
    styleUrls: ['./selected-items.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SelectBonusComponent],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectedItemsComponent),
            multi: true
        }
    ]
})
export class SelectedItemsComponent implements ControlValueAccessor {
  @Input() set value(bonuses: ItemBonus[]) {
    this.internal = [];
    this.emit([]);
    this.bonuses = bonuses;
  }
  @Output() valueChanges: EventEmitter<ItemValue[]> = new EventEmitter();

  bonuses = null;
  private internal = [];

  onBonusChange(index: number, bonus: ItemBonus, selected: number[]): void {
    this.internal[index] = [
      ...bonus.options.filter((o, i) => selected.includes(i))
    ];
    const external: ItemValue[] = this.internal.reduce((acc, options: ItemBonusOption[]) => {
      let items = [];
      options.forEach(option => {
        const {label, ids, ...rest} = option;
        if (option.ids) {
          items = [
            ...items,
            ...ids.map(id => {
              return {...rest, id};
            })
          ];
        } else {
          items = [
            ...items,
            rest
          ];
        }
      });

      return [
        ...acc,
        ...items
      ];
    }, []);
    this.emit(external);
  }

  private emit(values: ItemValue[]): void {
    this.propagateChange(values);
    this.valueChanges.emit(values);
  }

  propagateChange = (_: any) => {};
  writeValue(value: number): void {}
  registerOnChange(fn: any): void { this.propagateChange = fn; }
  registerOnTouched(fn: any): void {}
}
