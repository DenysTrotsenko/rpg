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
import { ALLEGIANCES } from '@flames-of-freedom-1e/allegiances';
import { ARCHETYPES } from '@flames-of-freedom-1e/archetypes';
import { ATTRIBUTES } from '@flames-of-freedom-1e/attributes';
import { BELIEFS } from '@flames-of-freedom-1e/beliefs';
import { CULTURES } from '@flames-of-freedom-1e/cultures';
import { FLAWS } from '@flames-of-freedom-1e/flaws';
import { PROFESSIONS } from '@flames-of-freedom-1e/professions';
import { ARCHETYPE_TRAIT, PROFESSIONAL_TRAITS } from '@flames-of-freedom-1e/traits';
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
  readonly [DataTypes.SKILLS]: Skill[] = SKILLS;
  readonly [DataTypes.PROFESSIONS]: Profession[] = PROFESSIONS;
  readonly [DataTypes.QUIRKS]: Quirk[] = QUIRKS;
  readonly [DataTypes.TALENTS]: Talent[] = TALENTS;
  readonly [DataTypes.TRAITS]: Trait[] = [
    ...ARCHETYPE_TRAIT,
    ...PROFESSIONAL_TRAITS
  ];
}
