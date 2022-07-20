import {AttributeId, SkillId, SkillTypeId} from './enums';

export interface Attribute {
  id: AttributeId;
  name: string;
  labels: {
    description: string;
    bonus: string;
  };
}

export interface Belief {
  id: string;
  name: string;
  labels: {
    description: string;
  };
}

export interface Flaw {
  id: string;
  name: string;
  labels: {
    description: string;
  };
}

export interface Skill {
  id: SkillId;
  name: string;
  attribute: AttributeId;
  type: SkillTypeId;
  labels?: {
    description: string;
    difficulties: string;
  };
}
