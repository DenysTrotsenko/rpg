import {
  AgeId, ArchetypeId,
  AttributeId, BeliefId, FlawId,
  InjuryTypeId,
  LightingId,
  ObscurementId, QualityId,
  SexId,
  SizeId, SkillId, TalentId,
  ThreatTraitId, WeaponId
} from '@grim-and-perilous/models/common';

const BULLET = '•';

export const AGE_ID_YOUNG = 'l9b3yda0oz8' as AgeId;
export const ARCHETYPE_ID_COMMONER = 'lacfut7idze' as ArchetypeId;
export const ARCHETYPE_ID_MAGE = 'lacfut7l40m' as ArchetypeId;
export const ATTRIBUTE_ID_COMBAT = 'l9b3nci827' as AttributeId;
export const ATTRIBUTE_ID_BRAWN = 'l9b3nci8uw6' as AttributeId;
export const ATTRIBUTE_ID_AGILITY = 'l9b3nci81u' as AttributeId;
export const ATTRIBUTE_ID_PERCEPTION = 'l9b3nci8otj' as AttributeId;
export const ATTRIBUTE_ID_INTELLIGENCE = 'l9b3nci8bga' as AttributeId;
export const ATTRIBUTE_ID_WILLPOWER = 'l9b3nci815g' as AttributeId;
export const ATTRIBUTE_ID_FELLOWSHIP = 'l9b3nci8guk' as AttributeId;
export const BELIEF_ID_ACHIEVEMENT = 'l9b3s1isy8' as BeliefId;
export const FLAW_ID_APPREHENSION = 'l9b3sliju2f' as FlawId;
export const INJURY_TYPE_ID_MODERATE = 'l9b5oucxboi' as InjuryTypeId;
export const INJURY_TYPE_ID_SERIOUS = 'l9b5oucxkc6' as InjuryTypeId;
export const INJURY_TYPE_ID_GRIEVOUS = 'l9b5oucx7c' as InjuryTypeId;
export const INJURY_TYPE_ID_PERMANENT = 'l9b5oucxd1k' as InjuryTypeId;
export const LIGHTING_ID_PERFECT_LIGHT = 'l9b548eh8dj' as LightingId;
export const OBSCUREMENT_ID_NO_OBSCUREMENT = 'l9b5522bzi' as ObscurementId;
export const QUALITY_ID_FAST = 'l9jx839ge1b' as QualityId;
export const QUALITY_ID_INEFFECTIVE = 'l9jx839gqk6' as QualityId;
export const QUALITY_ID_PUMMELING = 'l9jx839g5f' as QualityId;
export const SEX_ID_MALE = 'l9b56tcrge' as SexId;
export const SIZE_ID_NORMAL = 'l9b3yyhppmn' as SizeId;
export const SKILL_ID_COORDINATION = 'labo3tmeh7' as SkillId;
export const SKILL_ID_SIMPLE_MELEE = 'labo3tmewe' as SkillId;
export const TALENT_ID_BRAINS_OVER_BRAWN = 'l9b5s76rp3' as TalentId;
export const TALENT_ID_GUT_INSTINCT = 'l9b5s76rgo8' as TalentId;
export const THREAT_TRAIT_ID_BRAINS_OVER_BRAWN = 'labqamy2rf' as ThreatTraitId;
export const THREAT_TRAIT_ID_GUT_INSTINCT = 'labqamy35br' as ThreatTraitId;
export const THREAT_TRAIT_ID_HYPERSENSITIVITY = 'labqamy2d6b' as ThreatTraitId;
export const THREAT_TRAIT_ID_IMMOBILE = 'labqamy2zum' as ThreatTraitId;
export const THREAT_TRAIT_ID_LETHARGY = 'labqamy2fuh' as ThreatTraitId;
export const WEAPON_ID_BARE_HANDED = 'lacdzmjqgp' as WeaponId;

export const DEFAULT_ATTRIBUTE_PERCENTAGES = 25;
export const DEFAULT_DETERMINATION = 2;

export const BRAWN_BONUS_TRAITS: ThreatTraitId[] = [
  'labqamy2lo9' as ThreatTraitId
];
export const DAMAGE_THRESHOLD_TRAITS: ThreatTraitId[] = [
  'labqamy2eu' as ThreatTraitId
];