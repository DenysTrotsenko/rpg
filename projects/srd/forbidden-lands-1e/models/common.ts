import { AttributeId, KinId, SkillId, TalentId } from './enums';

export interface Attribute {
  id: AttributeId;
  name: string;
  labels?: {
    description?: string;
  };
}

export interface Kin {
  id: KinId;
  name: string;
  attribute: AttributeId;
  talent: TalentId;
  labels?: {
    description?: string;
  };
}

export interface Skill {
  id: SkillId;
  name: string;
  attribute: AttributeId;
  labels?: {
    description?: string;
  };
}
