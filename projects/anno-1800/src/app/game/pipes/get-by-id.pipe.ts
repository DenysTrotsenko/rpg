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
  Profession, Quality,
  Quirk,
  Skill,
  Spell,
  SpellType,
  Talent,
  Tier,
  Trait, Weapon
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
  ProfessionId, QualityId,
  QuirkId,
  SkillId,
  SpellId,
  SpellTypeId,
  TalentId,
  TierId,
  TraitId, WeaponId
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
  | QualityId
  | QuirkId
  | SkillId
  | SpellId
  | SpellTypeId
  | TalentId
  | TierId
  | TraitId
  | WeaponId;

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
  | Quality
  | Quirk
  | Skill
  | Spell
  | SpellType
  | Talent
  | Tier
  | Trait
  | Weapon;

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(value: Id, type: string): any {
    const data = this.data[type] ?? [];
    return !!data ? data.find(i => i.id === value) : value;
  }
}
