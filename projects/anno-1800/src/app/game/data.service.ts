import { Injectable } from '@angular/core';
import {
  Allegiance,
  Archetype,
  Attribute,
  Belief,
  Culture,
  Flaw,
  Profession,
  Quirk,
  Skill,
  Talent,
  Trait
} from '@flames-of-freedom-1e/models';
import {
  QuirkId,
  SkillId,
  TalentId,
  TraitId
} from '@flames-of-freedom-1e/enums';
import { ALLEGIANCES } from '@flames-of-freedom-1e/allegiances';
import { ARCHETYPES } from '@flames-of-freedom-1e/archetypes';
import { ATTRIBUTES } from '@flames-of-freedom-1e/attributes';
import { BELIEFS } from '@flames-of-freedom-1e/beliefs';
import { CULTURES } from '@flames-of-freedom-1e/cultures';
import { FLAWS } from '@flames-of-freedom-1e/flaws';
import { PROFESSIONS } from '@flames-of-freedom-1e/professions';
import { TRAITS } from '@flames-of-freedom-1e/traits';
import { QUIRKS } from '@flames-of-freedom-1e/quirks';
import { SKILLS } from '@flames-of-freedom-1e/skills';
import { TALENTS } from '@flames-of-freedom-1e/talents';

export enum DataTypes {
  ALLEGIANCES = 'allegiances',
  ARCHETYPES = 'archetypes',
  ATTRIBUTES = 'attributes',
  BELIEFS = 'beliefs',
  CULTURES = 'cultures',
  FLAWS = 'flaws',
  SKILLS = 'skills',
  PROFESSIONS = 'professions',
  QUIRKS = 'quirks',
  TALENTS = 'talents',
  TRAITS = 'traits'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly [DataTypes.ALLEGIANCES]: Allegiance[] = ALLEGIANCES;
  readonly [DataTypes.ARCHETYPES]: Archetype[] = ARCHETYPES;
  readonly [DataTypes.ATTRIBUTES]: Attribute[] = ATTRIBUTES;
  readonly [DataTypes.BELIEFS]: Belief[] = BELIEFS;
  readonly [DataTypes.CULTURES]: Culture[] = CULTURES;
  readonly [DataTypes.FLAWS]: Flaw[] = FLAWS;
  readonly [DataTypes.SKILLS]: Skill[] = SKILLS.map(i => {
    i.labels.tooltip = this.getSkillTooltip(i.id);
    return i;
  });
  readonly [DataTypes.PROFESSIONS]: Profession[] = PROFESSIONS;
  readonly [DataTypes.QUIRKS]: Quirk[] = QUIRKS.map(i => {
    i.labels.tooltip = this.getQuirkTooltip(i.id);
    return i;
  });
  readonly [DataTypes.TALENTS]: Talent[] = TALENTS.map(i => {
    i.labels.tooltip = this.getTalentTooltip(i.id);
    return i;
  });
  readonly [DataTypes.TRAITS]: Trait[] = TRAITS.map(i => {
    i.labels.tooltip = this.getTraitTooltip(i.id);
    return i;
  });

  private getSkillTooltip(id: SkillId): string {
    const skill: Skill = SKILLS.find(i => i.id === id);
    const attribute: Attribute = this[DataTypes.ATTRIBUTES].find(i => i.id === skill.attribute);
    return [
      `${skill.name} ${skill.type === 2 ? '*' : ''} (${attribute.name})\n`,
      `${skill.labels?.description}`,
    ].join('\n');
  }

  private getTalentTooltip(id: TalentId): string {
    const talent: Talent = TALENTS.find(i => i.id === id);
    return [
      `${talent.name}\n`,
      `${talent.labels?.description}\n`,
      `Effect: ${talent.labels?.effect}`,
    ].join('\n');
  }

  private getTraitTooltip(id: TraitId): string {
    const trait: Trait = TRAITS.find(i => i.id === id);
    return [
      `${trait.name}\n`,
      `${trait.labels?.description}\n`,
      `Effect: ${trait.labels?.effect}`,
    ].join('\n');
  }

  private getQuirkTooltip(id: QuirkId): string {
    const quirk: Quirk = QUIRKS.find(i => i.id === id);
    return [
      `${quirk.name}\n`,
      `${quirk.labels?.description}\n`,
      `Effect: ${quirk.labels?.effect}`,
    ].join('\n');
  }
}
