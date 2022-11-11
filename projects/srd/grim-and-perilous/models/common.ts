import { HasId, Opaque } from '@shared';

export type AgeId = Opaque<string, 'AgeId'>;
export type AttributeId = Opaque<string, 'AttributeId'>;
export type BeliefId = Opaque<string, 'BeliefId'>;
export type BuildId = Opaque<string, 'BuildId'>;
export type DispositionId = Opaque<string, 'DispositionId'>;
export type EyesId = Opaque<string, 'EyesId'>;
export type FlawId = Opaque<string, 'FlawId'>;
export type HairStyleId = Opaque<string, 'HairStyleId'>;
export type HairColorId = Opaque<string, 'HairColorId'>;
export type HairLengthId = Opaque<string, 'HairLengthId'>;
export type InjuryId = Opaque<string, 'InjuryId'>;
export type InjuryTypeId = Opaque<string, 'InjuryTypeId'>;
export type LightingId = Opaque<string, 'LightingId'>;
export type MarkId = Opaque<string, 'MarkId'>;
export type NotchId = Opaque<string, 'NotchId'>;
export type ObscurementId = Opaque<string, 'ObscurementId'>;
export type PermanentInjuryId = Opaque<string, 'PermanentInjuryId'>;
export type QualityId = Opaque<string, 'QualityId'>;
export type QuirkId = Opaque<string, 'QuirkId'>;
export type RiskFactorId = Opaque<string, 'RiskFactorId'>;
export type SexId = Opaque<string, 'SexId'>;
export type SizeId = Opaque<string, 'SizeId'>;
export type SkillId = Opaque<string, 'SkillId'>;
export type SettingId = Opaque<string, 'SettingId'>;
export type StatureId = Opaque<string, 'StatureId'>;
export type StyleId = Opaque<string, 'StyleId'>;
export type TalentId = Opaque<string, 'TalentId'>;
export type ThreatTypeId = Opaque<string, 'ThreatTypeId'>;
export type TierId = Opaque<string, 'TierId'>;
export type TraitId = Opaque<string, 'TraitId'>;

export interface Age {
  id: AgeId;
  name: string;
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
}

export interface Trait {
  id: TraitId;
  name: string;
  labels?: {
    description?: string;
    effect: string;
    tooltip?: string;
  };
}

export interface ThreatType {
  id: ThreatTypeId;
  name: string;
}

export interface Tier {
  id: TierId;
  name: string;
}
