import {
  CareerId,
  CareerPathId,
  CharacteristicId, ClassId, ConditionId,
  CreatureTraitId,
  SizeId,
  SkillId,
  StatusTier,
  TalentId
} from './enums';
import { WFRPCharacter } from './character';

export type MaxLevelFn = (value: WFRPCharacter) => number;
export type MaxWoundsFn = (value: WFRPCharacter) => number;

export interface WFRPBase {
  id: any;
  name: string;
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface Career {
  id: CareerId;
  name: string;
  class: ClassId;
  scheme: Partial<Record<CharacteristicId, number>>;
  paths: CareerPath[];
}

export interface CareerPath {
  id: CareerPathId;
  name: string;
  status: { tier: StatusTier; standing: number; };
  skills: [];
  talents: [];
}

export interface Class {
  id: ClassId;
  name: string;
}

export interface Characteristic extends WFRPBase {
  id: CharacteristicId;
  name: string;
  labels?: {
    abbreviation?: string;
    description?: string;
    tooltip?: string;
  };
}

export interface Condition {
  id: ConditionId;
  name: string;
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface Skill extends WFRPBase {
  id: SkillId;
  name: string;
  characteristic: CharacteristicId;
  advanced?: boolean;
  grouped?: boolean;
  specialisations?: string[];
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface Talent extends WFRPBase {
  id: TalentId;
  name: string;
  grouped?: boolean;
  labels?: {
    placeholder?: string;
    max?: string;
    tests?: string;
    description?: string;
    tooltip?: string;
  };
  system?: {
    MAX_LEVEL_FN?: MaxLevelFn;
    INC_CHARACTERISTIC_ID?: CharacteristicId;
    INC_CHARACTERISTIC_VALUE?: number;
  };
}

export interface CreatureTrait {
  id: CreatureTraitId;
  name: string;
  value?: boolean;
  grouped?: boolean;
  labels: {
    placeholder?: string;
    description: string;
  };
}

export interface Size {
  id: SizeId;
  name: string;
  system?: {
    MAX_WOUNDS_FN?: MaxWoundsFn;
  };
}
