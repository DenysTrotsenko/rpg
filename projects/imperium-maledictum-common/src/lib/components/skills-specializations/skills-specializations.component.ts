import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import {
  ImperiumMaledictumCharacter, SkillValue,
  SpecialisationValue
} from '@imperium-maledictum-1e/models/character';
import { Characteristic, Skill, Specialisation } from '@imperium-maledictum-1e/models/common';

type SkillView = Skill & SkillValue & {
  value: number;
};

type SpecializationView = Specialisation & SpecialisationValue & {
  value: number;
};

@Component({
  selector: 'skills-specializations',
  templateUrl: './skills-specializations.component.html',
  styleUrls: ['./skills-specializations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsSpecializationsComponent {
  readonly data = inject(DataService);

  @Input() set character(character: ImperiumMaledictumCharacter) {
    const characteristics = character?.characteristics;
    const skills = character?.skills;
    const specialisations = character?.specialisations;

    this.skills = skills.map(i => {
      const skill = this.data.get<Skill>(i.id);
      const characteristic = characteristics.find(c => c.id === skill.characteristic);

      return {
        ...i,
        ...skill,
        value: characteristic.starting + characteristic.advances + i.starting + i.advances
      };
    });

    this.specialisations = specialisations.map(i => {
      const specialisation = this.data.get<Specialisation>(i.id);
      const skill = this.data.get<Skill>(specialisation.skill);
      const characteristic = this.data.get<Characteristic>(skill.characteristic);
      const fromSkill = this.skills.find(s => s.id === specialisation.skill);
      const fromCharacteristic = characteristics.find(c => c.id === characteristic.id);
      const value = !!fromSkill?.value ? fromSkill.value : fromCharacteristic.starting + fromCharacteristic.advances;

      return {
        ...i,
        ...specialisation,
        value: value + i.starting + i.advances
      };
    });
  }

  skills: SkillView[] = [];
  specialisations: SpecializationView[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
