import { Injectable } from '@angular/core';
import { DataService, DataTypes } from '@ti/app/game/data.service';
import {Attribute, Quirk, Skill, Talent, Trait} from '@flames-of-freedom-1e/models';
import { QuirkId, SkillId, TalentId, TraitId } from '@flames-of-freedom-1e/enums';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  constructor(private data: DataService) {}

  getSkillTooltip(id: SkillId): string {
    const skill: Skill = this.data[DataTypes.SKILLS].find(i => i.id === id);
    const attribute: Attribute = this.data[DataTypes.ATTRIBUTES].find(i => i.id === skill.attribute);
    return [
      `${skill.name} ${skill.type === 2 ? '*' : ''} (${attribute.name})\n`,
      `${skill.labels?.description}`,
    ].join('\n');
  }

  getTalentTooltip(id: TalentId): string {
    const talent: Talent = this.data[DataTypes.TALENTS].find(i => i.id === id);
    return [
      `${talent.name}\n`,
      `${talent.labels?.description}\n`,
      `Effect: ${talent.labels?.effect}`,
    ].join('\n');
  }

  getTraitTooltip(id: TraitId): string {
    const trait: Trait = this.data[DataTypes.TRAITS].find(i => i.id === id);

    return [
      `${trait.name}\n`,
      `${trait.labels?.description}\n`,
      `Effect: ${trait.labels?.effect}`,
    ].join('\n');
  }

  getQuirkTooltip(id: QuirkId): string {
    const quirk: Quirk = this.data[DataTypes.QUIRKS].find(i => i.id === id);

    return [
      `${quirk.name}\n`,
      `${quirk.labels?.description}\n`,
      `Effect: ${quirk.labels?.effect}`,
    ].join('\n');
  }
}
