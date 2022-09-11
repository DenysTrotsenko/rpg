import {
  AgeId, AttributeId, BeliefId, BuildId, EyesId, FlawId, HairColorId, HairLengthId, HairStyleId,
  MarkId, NotchId, PermanentInjuryId, QualityId, RiskFactorId, SexId, StatureId, StyleId, TierId
} from './enums';

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

export interface Mark {
  id: MarkId;
  name: string;
}

export interface Notch {
  id: NotchId;
  name: string;
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

export interface RiskFactor {
  id: RiskFactorId;
  name: string;
}

export interface Sex {
  id: SexId;
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

export interface Tier {
  id: TierId;
  name: string;
}
