import {
  AfflictionId,
  ArchetypeId,
  AttributeId,
  BeliefId,
  CultureId,
  FlawId,
  PermanentInjuryId,
  QuirkId,
  SkillId,
  TalentId,
  TraitId
} from '@flames-of-freedom-1e/enums';
import {
  AllegianceId
} from '@pbz-1850/enums';

export interface Character {
  id: string;
  campaign: string;
  authors: string[];
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
  allegiances: AllegianceId[];
  archetype: ArchetypeId;
  attributes: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
  };
  belief: BeliefId;
  culture: CultureId;
  flaw: FlawId;
  determination: number;
  languages: number[];
  spells: number[];
  miscellaneous: {
    portrait: string;
    age: number;
    biography: string;
    build: number;
    eyes: number;
    sex: number;
    hair_color: number;
    hair_length: number;
    hair_style: number;
    mark: number;
    stature: number;
    style: number;
  };
  name: string;
  permanent_injuries: PermanentInjuryId[];
  afflictions: AfflictionId[];
  professions: {
    basic: number;
    intermediate: number;
    advanced: number;
  };
  tier: number;
  trait: number;
}
