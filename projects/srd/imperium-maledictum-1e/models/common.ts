import { HasCommonFields, HasId, HasName, HasWeight, Opaque } from '@shared';
import { System } from './system';

export type CharacteristicId = Opaque<string, 'CharacteristicId'>;
export type ConditionId = Opaque<string, 'ConditionId'>;
export type FactionId = Opaque<string, 'FactionId'>;
export type ItemTraitId = Opaque<string, 'ItemTraitId'>;
export type MalignancyId = Opaque<string, 'MalignancyId'>;
export type MutationId = Opaque<string, 'MutationId'>;
export type PatronId = Opaque<string, 'PatronId'>;
export type PatronBoonId = Opaque<string, 'PatronBoonId'>;
export type PatronDemeanorId = Opaque<string, 'PatronDemeanorId'>;
export type PatronDutyId = Opaque<string, 'PatronDutyId'>;
export type PatronFactionId = Opaque<string, 'PatronFactionId'>;
export type PatronLiabilityId = Opaque<string, 'PatronLiabilityId'>;
export type PatronMotivationId = Opaque<string, 'PatronMotivationId'>;
export type PatronPaymentGradeId = Opaque<string, 'PatronPaymentGradeId'>;
export type PerilOfTheWarpId = Opaque<string, 'PerilOfTheWarpId'>;
export type PsychicPhenomenaId = Opaque<string, 'PsychicPhenomenaId'>;
export type SkillId = Opaque<string, 'SkillId'>;
export type SpecialisationId = Opaque<string, 'SpecialisationId'>;
export type TalentId = Opaque<string, 'TalentId'>;

export interface Characteristic {
  id: CharacteristicId;
  name: string;
  labels: {
    abbreviation: string;
    description: string;
  };
}

export interface Condition {
  id: ConditionId;
  name: string;
  labels: {
    description: string;
  };
  system?: Partial<System>;
}

export interface ItemTrait extends HasId<ItemTraitId>, HasCommonFields {
  id: ItemTraitId;
  name: string;
  labels: {
    description: string;
  };
  system?: Partial<System>;
}

export interface Faction {
  id: FactionId | string;
  name: string;
  labels: {
    description: string;
  };
}

export interface Malignancy extends HasId<MalignancyId>, HasName, HasWeight {
  labels: {
    description: string;
  };
}

export interface Mutation extends HasId<MutationId>, HasName, HasWeight {
  labels: {
    description: string;
  };
}

export interface Origin {
  id: string;
  name: string;
  labels: {
    example?: string;
    modifications?: string;
    description: string;
  };
  modifications: Modification[];
}

export interface Patron {
  id: PatronId;
}

export interface PatronBoon {
  id: PatronBoonId | string;
  name: string;
  labels: {
    influence?: string;
    description: string;
  };
}

export interface PatronDemeanor {
  id: PatronDemeanorId | string;
  name: string;
  labels: {
    description: string;
  };
}

export interface PatronDuty {
  id: PatronDutyId | string;
  name: string;
  boon: PatronBoonId;
  boons: PatronBoonId[] | string[];
  liabilities: PatronLiabilityId[] | string[];
  labels: {
    description: string;
  };
}

export interface PatronFaction {
  id: PatronFactionId | string;
  name: string;
  influence?: Record<FactionId | string, number>;
  duties: PatronDutyId[] | string[];
  labels: {
    description: string;
  };
}

export interface PatronLiability {
  id: PatronLiabilityId | string;
  name: string;
  labels: {
    influence?: string;
    description: string;
  };
}

export interface PatronMotivation {
  id: PatronMotivationId | string;
  name: string;
  labels: {
    quote: string;
    description: string;
  };
}

export interface PatronPaymentGrade {
  id: PatronPaymentGradeId | string;
  name: string;
  value: number;
}

export interface PerilOfTheWarp extends HasId<PerilOfTheWarpId>, HasName, HasWeight {
  corruption: number;
  labels: {
    description: string;
  };
}

export interface PsychicPhenomena extends HasId<PsychicPhenomenaId>, HasName, HasWeight {
  labels: {
    description: string;
    lingering: string;
  };
}

export interface Skill {
  id: SkillId;
  name: string;
  characteristic: CharacteristicId;
  specialisations: SpecialisationId[];
  labels: {
    description: string;
  };
  system?: Partial<System>;
}

export interface Specialisation {
  id: SpecialisationId;
  name: string;
  restricted?: boolean;
  multiple?: boolean;
  labels: {
    description: string;
  };
  system?: Partial<System>;
}

export interface Talent {
  id: TalentId;
  name: string;
  labels: {
    description: string;
    requirements: string;
  };
  system?: Partial<System>;
}

export interface Modification {
  type: SYSTEM_OPERATORS;
  options: string[];
  value: number;
}

export type SYSTEM_OPERATORS =
  | 'ADD_CHARACTERISTIC'
  | 'ADD_SKILL'
  | 'ADD_SKILL_ADVANCE'
  | 'ADD_TALENT'
  | 'ADD_INFLUENCE'
  // | ''
  | 'ADD_ITEM'
  | 'ADD_SOLARS';
