import { Opaque } from '@shared';

export type AfflictionId = Opaque<string, 'AfflictionId'>;
export type AilmentId = Opaque<string, 'AilmentId'>;
export type AgeId = Opaque<string, 'AgeId'>;
export type ArchetypeId = Opaque<string, 'ArchetypeId'>;
export type AttributeId = Opaque<string, 'AttributeId'>;
export type BeliefId = Opaque<string, 'BeliefId'>;
export type BuildId = Opaque<string, 'BuildId'>;
export type CampaignId = Opaque<string, 'CampaignId'>;
export type CultureId = Opaque<string, 'CultureId'>;
export type DispositionId = Opaque<string, 'DispositionId'>;
export type DrugId = Opaque<string, 'DrugId'>;
export type EyesId = Opaque<string, 'EyesId'>;
export type FlawId = Opaque<string, 'FlawId'>;
export type HairStyleId = Opaque<string, 'HairStyleId'>;
export type HairColorId = Opaque<string, 'HairColorId'>;
export type HairLengthId = Opaque<string, 'HairLengthId'>;
export type InjuryId = Opaque<string, 'InjuryId'>;
export type InjuryTypeId = Opaque<string, 'InjuryTypeId'>;
export type LanguageId = Opaque<string, 'LanguageId'>;
export type LightingId = Opaque<string, 'LightingId'>;
export type MarkId = Opaque<string, 'MarkId'>;
export type NotchId = Opaque<string, 'NotchId'>;
export type ObscurementId = Opaque<string, 'ObscurementId'>;
export type PermanentInjuryId = Opaque<string, 'PermanentInjuryId'>;
export type ProfessionId = Opaque<string, 'ProfessionId'>;
export type QualityId = Opaque<string, 'QualityId'>;
export type QuirkId = Opaque<string, 'QuirkId'>;
export type RiskFactorId = Opaque<string, 'RiskFactorId'>;
export type SexId = Opaque<string, 'SexId'>;
export type SizeId = Opaque<string, 'SizeId'>;
export type SkillId = Opaque<string, 'SkillId'>;
export type SettingId = Opaque<string, 'SettingId'>;
export type SpellId = Opaque<string, 'SpellId'>;
export type SpellTypeId = Opaque<string, 'SpellTypeId'>;
export type StatureId = Opaque<string, 'StatureId'>;
export type StyleId = Opaque<string, 'StyleId'>;
export type TalentId = Opaque<string, 'TalentId'>;
export type ThreatId = Opaque<string, 'ThreatId'>;
export type ThreatTypeId = Opaque<string, 'ThreatTypeId'>;
export type ThreatTraitId = Opaque<string, 'ThreatTraitId'>;
export type TierId = Opaque<string, 'TierId'>;
export type TraitId = Opaque<string, 'TraitId'>;
export type WeaponId = Opaque<string, 'WeaponId'>;

export interface AdvancementScheme {
  traits?: TraitId[];
  quirks?: QuirkId[];
  bonuses?: AttributeId[];
  skills?: SkillId[];
  talents?: TalentId[];
}

export interface Ailment {
  id: AilmentId;
  name: string;
  labels: {
    description?: string;
    resist?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    other_considerations?: string;
    duration?: string;
    tooltip?: string;
  };
}

export interface Affliction {
  id: AfflictionId;
  name: string;
  labels?: {
    description?: string;
    effect?: string;
    tooltip?: string;
  };
}

export interface Age {
  id: AgeId;
  name: string;
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  labels?: {
    description: string;
    wares?: string;
  };
  traits: TraitId[];
  professions: ProfessionId[];
  money?: number;
}

export interface Attribute {
  id: AttributeId;
  name: string;
  labels: {
    description: string;
    bonus: string;
    tooltip?: string;
  };
}

export interface Belief {
  id: BeliefId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Build {
  id: BuildId;
  name: string;
}

export interface Culture {
  id: CultureId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Disposition {
  id: DispositionId;
  name: string;
  labels?: {
    description?: string;
    tooltip?: string;
    interact_check?: string;
    social_tactics_same_allegiance?: string;
    social_tactics_different_allegiance?: string;
  };
}

export interface Drug {
  id: DrugId;
  name: string;
  labels: {
    description?: string;
    resist?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    other_considerations?: string;
    duration?: string;
    tooltip?: string;
  };
}

export interface Eyes {
  id: EyesId;
  name: string;
}

export interface Flaw {
  id: FlawId;
  name: string;
  labels: {
    description: string;
  };
}

export interface HairStyle {
  id: HairStyleId;
  name: string;
}

export interface HairColor {
  id: HairColorId;
  name: string;
}

export interface HairLength {
  id: HairLengthId;
  name: string;
}

export interface Injury {
  id: InjuryId;
  name: string;
  type: InjuryTypeId;
  labels?: {
    effect?: string;
  };
}

export interface InjuryType {
  id: InjuryTypeId;
  name: string;
}

export interface Language {
  id: LanguageId;
  name: string;
}

export interface Lighting {
  id: LightingId;
  name: string;
  labels: {
    effect: string;
    examples: string;
  };
}

export interface Mark {
  id: MarkId;
  name: string;
}

export interface Notch {
  id: NotchId;
  name: string;
}

export interface Obscurement {
  id: ObscurementId;
  name: string;
  labels: {
    effect: string;
    examples: string;
  };
}

export interface Profession {
  id: ProfessionId;
  name: string;
  traits: TraitId[];
  quirks: QuirkId[];
  advancements: AdvancementScheme;
  labels?: {
    description: string;
  };
}

export interface PermanentInjury {
  id: PermanentInjuryId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
}

export interface Quality {
  id: QualityId;
  name: string;
  labels?: {
    effect: string;
  };
}

export interface Quirk {
  id: QuirkId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
  system?: Record<string, any>;
}

export interface RiskFactor {
  id: RiskFactorId;
  name: string;
  mechanics: {
    DAMAGE_THRESHOLD_BONUS: number;
  };
}

export interface Sex {
  id: SexId;
  name: string;
}

export interface Size {
  id: SizeId;
  name: string;
  mechanics: {
    FURY_DICE: number;
  };
}

export interface Skill {
  id: SkillId;
  name: string;
  attribute: AttributeId;
  special: boolean;
  labels?: {
    description: string;
    difficulties: string;
    tooltip?: string;
  };
}

export interface Spell {
  id: SpellId;
  name: string;
  tier: TierId;
  type: SpellTypeId;
  labels: {
    description?: string;
    casting_time?: string;
    distance?: string;
    reagents?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    duration?: string;
    tooltip?: string;
  };
}

export interface AlchemicalArt {
  id: SpellId;
  name: string;
  tier: TierId;
  type: SpellTypeId;
  labels: {
    description?: string;
    preparation_time?: string;
    create?: string;
    effect?: string;
    critical_success?: string;
    critical_failure?: string;
    other_considerations?: string;
    tooltip?: string;
  };
}

export interface SpellType {
  id: SpellTypeId;
  name: string;
}

export interface Stature {
  id: StatureId;
  name: string;
}

export interface Style {
  id: StyleId;
  name: string;
}

export interface Talent {
  id: TalentId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
  system?: Record<string, any>;
}

export interface Trait {
  id: TraitId;
  name: string;
  labels?: {
    description?: string;
    effect: string;
    tooltip?: string;
  };
  system?: Record<string, any>;
}

export interface ThreatType {
  id: ThreatTypeId;
  name: string;
}

export interface ThreatTrait {
  id: ThreatTraitId;
  name: string;
  quantifiable?: boolean;
  specifiable?: boolean;
  labels?: {
    effect: string;
    tooltip?: string;
  };
}

export interface Tier {
  id: TierId;
  name: string;
}

// export interface Threat {
//   id: ThreatId;
//   name: string;
//   type: ThreatTypeId;
//   size: SizeId;
//   risk_factor: RiskFactorId;
//   notch: NotchId;
//   attributes: {
//     [k in AttributeId]: number;
//   };
//   advancements: {
//     bonuses: AttributeId[];
//     skills: SkillId[];
//     traits: { id: ThreatTraitId; value?: number | string; }[];
//   };
//   labels?: {
//     description?: string;
//     wares?: string;
//     movement?: string;
//   };
//   weapons?: WeaponId[];
// }

export interface Weapon {
  id: WeaponId;
  name: string;
  skills: SkillId[];
  qualities: QualityId[];
  encumbrance: number;
  price: number;
  quantifiable?: boolean;
  labels?: {
    description?: string;
    handling?: string;
    load?: string;
    ammo?: string;
    distance?: string;
    damage?: string;
    tooltip?: string;
  };
}
