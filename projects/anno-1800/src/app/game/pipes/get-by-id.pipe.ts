import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '@ti/app/game/data.service';
import {
  Affliction,
  Archetype,
  Attribute,
  Belief,
  Flaw,
  Injury,
  InjuryType,
  PermanentInjury,
  Profession,
  Quirk,
  Skill,
  Spell,
  SpellType,
  Talent,
  Trait
} from '@flames-of-freedom-1e/models';
import {
  AfflictionId,
  ArchetypeId,
  AttributeId,
  BeliefId,
  FlawId,
  InjuryId,
  InjuryTypeId,
  PermanentInjuryId,
  ProfessionId,
  QuirkId,
  SkillId,
  SpellId,
  SpellTypeId,
  TalentId,
  TraitId
} from '@flames-of-freedom-1e/enums';

type Id =
  | AfflictionId
  | ArchetypeId
  | AttributeId
  | BeliefId
  | FlawId
  | InjuryId
  | InjuryTypeId
  | PermanentInjuryId
  | ProfessionId
  | QuirkId
  | SkillId
  | SpellId
  | SpellTypeId
  | TalentId
  | TraitId;

type Return =
  | Affliction
  | Archetype
  | Attribute
  | Belief
  | Flaw
  | Injury
  | InjuryType
  | PermanentInjury
  | Profession
  | Quirk
  | Skill
  | Spell
  | SpellType
  | Talent
  | Trait;

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(value: Id, type: string): Return {
    const data = this.data[type];
    return !!data ? data.find(i => i.id === value) : value;
  }
}
