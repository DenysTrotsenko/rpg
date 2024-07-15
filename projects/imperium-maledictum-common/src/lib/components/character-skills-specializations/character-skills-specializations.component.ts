import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DataService } from '@im-common';
import { ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';
import { Characteristic, Skill, SkillId, Specialisation } from '@imperium-maledictum-1e/models/common';

interface SkillView {
  id: SkillId;
  name: string;
  value: number;
  tooltip: string;
}

interface SpecializationView {
  skill: string;
  name: string;
  value: number;
  tooltip: string;
}

@Component({
  selector: 'character-skills-specializations',
  templateUrl: './character-skills-specializations.component.html',
  styleUrls: ['./character-skills-specializations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

      return {
        id: skill.id,
        name: skill.name,
        tooltip: skill.labels?.tooltip,
        value: (characteristic.starting ?? 0) + (characteristic.advances ?? 0) + (i.starting ?? 0) + (i.advances ?? 0)
      } as SkillView;
    }).sort((a, b) => {
      if (a?.name < b?.name) { return -1; }
      if (a?.name > b?.name) { return 1; }
      return 0;
    });

    this.specialisations = specialisations.map(i => {
      const specialisation = this.data.get<Specialisation>(i.id);
      const skill = this.data.get<Skill>(specialisation.skill);
      const characteristic = this.data.get<Characteristic>(skill.characteristic);
      const skillView = this.skills.find(s => s.id === specialisation.skill);
      const characteristicValue = characteristics.find(c => c.id === characteristic.id);
      const value = !!skillView?.value ? skillView.value : (characteristicValue.starting ?? 0) + (characteristicValue.advances ?? 0);

      return {
        skill: skill.name,
        name: specialisation.name,
        tooltip: specialisation.labels?.tooltip,
        value: value + (i.starting ?? 0) + (i.advances ?? 0)
      };
    }).sort((a, b) => {
      if (a?.skill < b?.skill) { return -1; }
      if (a?.skill > b?.skill) { return 1; }
      return 0;
    });
  }

  skills: SkillView[] = [];
  specialisations: SpecializationView[] = [];

  trackById(_, item: Characteristic): string {
    return item.id;
  }
}
