import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, inject, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule, MatListOption } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  Bonus,
  BonusOption,
  Characteristic, Item,
  ItemBonus,
  ItemBonusOption, ItemTrait,
  Skill, Specialisation, Talent
} from '@imperium-maledictum-1e/models/common';
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
  private readonly data = inject(DataService);
  private readonly labels = new Map()
    .set('characteristics', this.getCharacteristicLabel)
    .set('skills', this.getSkillLabel)
    .set('specialisations', this.getSpecialisationLabel)
    .set('talents', this.getTalentLabel)
    .set('items', this.getItemLabel);

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
    return this.labels.get(type)(option);
  }

  private getCharacteristicLabel(option: BonusOption): string {
    const prefix = option.value > 0 ? '+' + option.value : option.value;
    const characteristic = this.data.get<Characteristic>(option.id);
    return `${prefix} ${characteristic.name}`;
  }

  private getSkillLabel(option: BonusOption): string {
    const prefix = option.value > 0 ? '+' + option.value : option.value;
    const skill = this.data.get<Skill>(option.id);
    return `${prefix} ${skill.name}`;
  }

  private getSpecialisationLabel(option: BonusOption): string {
    const prefix = option.value > 0 ? '+' + option.value : option.value;
    const specialisation = this.data.get<Specialisation>(option.id);
    const skill = this.data.get<Skill>(specialisation.skill);
    return `${prefix} ${skill.name} (${specialisation.name})`;
  }

  private getTalentLabel(option: BonusOption): string {
    const talent = this.data.get<Talent>(option.id);
    return `${talent.name}`;
  }

  private getItemLabel(option: ItemBonusOption): string {
    const item = this.data.get<Item>(option.id);
    const prefix = [...(option.qualities ?? []), ...(option.flaws ?? [])]
      .map(i => this.data.get<ItemTrait>(i)?.name)
      .join(', ');
    return `${prefix} ${item.name}`;
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
