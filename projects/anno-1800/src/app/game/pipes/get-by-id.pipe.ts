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
  Talent, Threat, ThreatTrait,
  Tier,
  Trait, Weapon,
  Lighting, Notch, Obscurement, RiskFactor
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
  TalentId, ThreatId, ThreatTraitId,
  TierId,
  TraitId, WeaponId,
  LightingId, NotchId, ObscurementId, RiskFactorId
} from '@flames-of-freedom-1e/enums';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(value: AfflictionId, type: string): Affliction;
  transform(value: ArchetypeId, type: string): Archetype;
  transform(value: AttributeId, type: string): Attribute;
  transform(value: BeliefId, type: string): Belief;
  transform(value: FlawId, type: string): Flaw;
  transform(value: InjuryId, type: string): Injury;
  transform(value: InjuryTypeId, type: string): InjuryType;
  transform(value: LightingId, type: string): Lighting;
  transform(value: NotchId, type: string): Notch;
  transform(value: ObscurementId, type: string): Obscurement;
  transform(value: PermanentInjuryId, type: string): PermanentInjury;
  transform(value: ProfessionId, type: string): Profession;
  transform(value: QualityId, type: string): Quality;
  transform(value: QuirkId, type: string): Quirk;
  transform(value: RiskFactorId, type: string): RiskFactor;
  transform(value: SkillId, type: string): Skill;
  transform(value: SpellId, type: string): Spell;
  transform(value: SpellTypeId, type: string): SpellType;
  transform(value: TalentId, type: string): Talent;
  transform(value: ThreatId, type: string): Threat;
  transform(value: ThreatTraitId, type: string): ThreatTrait;
  transform(value: TierId, type: string): Tier;
  transform(value: TraitId, type: string): Trait;
  transform(value: WeaponId, type: string): Weapon;
  transform(value: number | string, type: string): any {
    const data = this.data[type] ?? [];
    return !!data ? data.find(i => i.id === value) : null;
  }
}
