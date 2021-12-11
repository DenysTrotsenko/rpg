import {AncestryId, ArchetypeId, AttributeId, DrawbackId, ProfessionId, SkillId, TraitId, UpbringingId} from './enums';

export interface Ancestry {
  id: AncestryId;
  name: string;
  modifiers: Record<AttributeId, number>;
  traits: TraitId[];
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  professions: ProfessionId[];
}

export interface Attribute {
  id: AttributeId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Drawback {
  id: DrawbackId;
  name: string;
  labels: {
    description: string;
    effect: string;
  };
}

export interface Profession {
  id: ProfessionId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Skill {
  id: SkillId;
  name: string;
}

export interface Trait {
  id: TraitId;
  name: string;
  labels: {
    description: string;
    effect: string;
  };
}

export interface Upbringing {
  id: UpbringingId;
  name: string;
  attribute: AttributeId;
  labels: {
    description: string;
  };
}
