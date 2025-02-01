import { CharacteristicId, SkillId, TalentId } from './enums';
import { WFRPCharacter } from './character';

export type MaxLevelFn = (value: WFRPCharacter) => number;

export interface WFRPBase {
  id: any;
  name: string;
  labels?: {
    description?: string;
    tooltip?: string;
  };
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
