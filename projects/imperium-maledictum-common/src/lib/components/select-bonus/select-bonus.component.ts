import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Input, Output } from '@angular/core';

import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule, MatListOption } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  Bonus,
  BonusOption,
  Characteristic, CharacteristicId, Item,
  ItemBonus,
  ItemBonusOption, ItemTrait,
  Skill, SkillId, Specialisation, SpecialisationId, Talent, TalentId
} from '@imperium-maledictum-1e/models/common';
import { DataService } from '../../data.service';
import { GetByIdPipe } from '../../pipes/get-by-id.pipe';

function getCharacteristicLabel(data: DataService, option: BonusOption): string {
  const prefix = option?.value > 0 ? '+' + option?.value : option?.value;
  const characteristic = data.get<Characteristic>(option.id as CharacteristicId);
  return `${prefix} ${characteristic.name}`;
}

function getSkillLabel(data: DataService, option: BonusOption): string {
  const prefix = option.value > 0 ? '+' + option.value : option.value;
  const skill = data.get<Skill>(option.id as SkillId);
  return `${prefix} ${skill.name}`;
}

function getSpecialisationLabel(data: DataService, option: BonusOption): string {
  const prefix = option.value > 0 ? '+' + option.value : option.value;
  const specialisation = data.get<Specialisation>(option.id as SpecialisationId);
  const skill = data.get<Skill>(specialisation.skill);
  return `${prefix} ${skill.name} (${specialisation.name})`;
}

function getTalentLabel(data: DataService, option: BonusOption): string {
  if (option.ids) {
    const talents = option.ids.map(i => data.get<Talent>(i)?.name);
    return `${talents.join(', ')}`;
  } else {
    const talent = data.get<Talent>(option.id as TalentId);
    return `${talent.name}`;
  }
}

function getItemLabel(data: DataService, option: ItemBonusOption): string {
  if (option.ids) {
    const items = option.ids.map(i => data.get<Item>(i)?.name);
    return `${items.join(', ')}`;
  } else {
    const item = data.get<Item>(option.id);
    const prefix = [...(option.qualities ?? []), ...(option.flaws ?? [])]
      .map(i => data.get<ItemTrait>(i)?.name)
      .join(', ');
    return `${prefix} ${item.name}`;
  }
}

@Component({
    selector: 'select-bonus',
    templateUrl: './select-bonus.component.html',
    styleUrls: ['./select-bonus.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatListModule, GetByIdPipe, ReactiveFormsModule, MatFormFieldModule, MatTooltipModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectBonusComponent),
            multi: true
        }
    ]
})
export class SelectBonusComponent implements ControlValueAccessor {
  private readonly data = inject(DataService);
  private readonly labels = new Map()
    .set('characteristics', getCharacteristicLabel)
    .set('skills', getSkillLabel)
    .set('specialisations', getSpecialisationLabel)
    .set('talents', getTalentLabel)
    .set('items', getItemLabel);

  @Input({ required: true }) set value(bonus: Bonus | ItemBonus) {
    this.bonus = {
      ...bonus,
      options: bonus.options.map(option => {
        option.label = this.getLabel(bonus.type, option);

        return option;
      })
    };

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

  bonus: Bonus | ItemBonus = null;
  readonly control: FormControl = new FormControl([]);

  onSelectionChange(selected: MatListOption[]): void {
    this.emit(selected.map(i => i.value));
  }

  private getLabel(type: string, option: BonusOption | ItemBonusOption): string {
    return this.labels.get(type)(this.data, option);
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
