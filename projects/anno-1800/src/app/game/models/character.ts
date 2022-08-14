import {AttributeId, QuirkId, SkillId, TalentId, TraitId} from '@flames-of-freedom-1e/enums';

export interface Character {
  advancements: {
    advanced: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
    intermediate: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
    basic: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
  };
  allegiance: number;
  archetype: number;
  attributes: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
  };
  author: string;
  belief: number;
  culture: number;
  determination: number;
  flaw: number;
  id: string;
  miscellaneous: {
    age: number;
    biography: string;
    build: number;
    eyes: number;
    gender: string;
    hair_color: number;
    hair_length: number;
    hair_style: number;
    mark: number;
    stature: number;
    style: number;
  };
  name: string;
  portrait: string;
  professions: {
    basic: number;
    intermediate: number;
    advanced: number;
  };
  tier: number;
  trait: number;
}