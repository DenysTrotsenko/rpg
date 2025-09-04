import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService, sortByName } from '@im-common';
import { getCharacteristicValue, ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';
import { Characteristic, Skill, SkillId, Specialisation } from '@imperium-maledictum-1e/models/common';

interface SkillView {
  id: SkillId;
  name: string;
  characteristic: string;
  fromCharacteristic: number;
  advances: number;
  total: number;
  tooltip: string;
}

interface SpecializationView {
  name: string;
  characteristic: string;
  skill: string;
  fromCharacteristic: number;
  fromSkill: number;
  advances: number;
  total: number;
  tooltip: string;
}

@Component({
    selector: 'character-skills-specializations',
    templateUrl: './character-skills-specializations.component.html',
    styleUrls: ['./character-skills-specializations.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CharacterSkillsSpecializationsComponent {
  readonly data = inject(DataService);
  @Input() view = 'short';
  @Input() set character(character: ImperiumMaledictumCharacter) {
    const characteristics = character?.characteristics;
    const skills = character?.skills;
    const specialisations = character?.specialisations;

    this.skills = skills.map(i => {
      const skill = this.data.get<Skill>(i.id);
      const characteristic = characteristics.find(c => c.id === skill.characteristic);
      const fromCharacteristic = getCharacteristicValue(characteristic);
      const advances = (i.starting ?? 0) + (i.advances ?? 0);
      const vm: SkillView = {
        id: skill.id,
        name: skill.name,
        characteristic: this.data.get<Characteristic>(characteristic.id)?.labels?.abbreviation,
        fromCharacteristic,
        advances,
        total: fromCharacteristic + advances,
        tooltip: null
      };

      return {
        ...vm,
        tooltip: this.getSkillAdvancedTooltip(vm)
      };
    }).sort(sortByName);

    this.specialisations = specialisations.map(i => {
      const specialisation = this.data.get<Specialisation>(i.id);
      const skill = this.data.get<Skill>(specialisation.skill);
      const characteristic = this.data.get<Characteristic>(skill.characteristic);
      const skillView = this.skills.find(s => s.id === specialisation.skill);
      const fromCharacteristic = skillView?.fromCharacteristic;
      const fromSkill = skillView?.advances;
      const advances = (i.starting ?? 0) + (i.advances ?? 0);
      const vm: SpecializationView = {
        name: specialisation.name,
        characteristic: characteristic?.name,
        skill: skill?.name,
        fromCharacteristic,
        fromSkill,
        advances,
        total: fromCharacteristic + fromSkill + advances,
        tooltip: null,
      };

      return {
        ...vm,
        tooltip: this.getSpecialisationAdvancedTooltip(vm)
      };
    }).sort(sortByName);
  }

  skills: SkillView[] = [];
  specialisations: SpecializationView[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }

  private getSkillAdvancedTooltip(vm: SkillView): string {
    return [
      `${vm.name} (${vm.characteristic})\n`,
      `Characteristic: ${vm.fromCharacteristic}`,
      `Advances: ${vm.advances}`,
      `Total: ${vm.total}`
    ].join('\n');
  }

  private getSpecialisationAdvancedTooltip(vm: SpecializationView): string {
    return [
      `${vm.skill} (${vm.name})\n`,
      `Characteristic: ${vm.fromCharacteristic}`,
      `Skill: ${vm.fromSkill}`,
      `Advances: ${vm.advances}`,
      `Total: ${vm.total}`
    ].join('\n');
  }
}
