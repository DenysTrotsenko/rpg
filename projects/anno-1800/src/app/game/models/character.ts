import {
  AfflictionId, AgeId,
  ArchetypeId,
  AttributeId,
  BeliefId, BuildId,
  CultureId, EyesId,
  FlawId, HairColorId, HairLengthId, HairStyleId, LanguageId, MarkId,
  PermanentInjuryId, ProfessionId,
  QuirkId, SexId,
  SkillId, SpellId, StatureId, StyleId,
  TalentId, TierId,
  TraitId
} from '@grim-and-perilous/models/common';

export interface Character {
  id: string;
  authors: string[];
  campaign: string;
  name: string;
  full_name: string;
  allegiances: string;
  belief: BeliefId;
  flaw: FlawId;
  culture: CultureId;
  archetype: ArchetypeId;
  attributes: {
    [k in AttributeId]: number;
  };
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
  determination: number;
  languages: LanguageId[];
  spells: SpellId[];
  alchemical_arts: SpellId[];
  miscellaneous: {
    portrait: string;
    biography: string;
    age: AgeId;
    build: BuildId;
    eyes: EyesId;
    sex: SexId;
    hair_color: HairColorId;
    hair_length: HairLengthId;
    hair_style: HairStyleId;
    mark: MarkId;
    stature: StatureId;
    style: StyleId;
  };
  permanent_injuries: PermanentInjuryId[];
  afflictions: AfflictionId[];
  professions: {
    basic: ProfessionId;
    intermediate: ProfessionId;
    advanced: ProfessionId;
  };
  schemas: {
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
  tier: TierId;
  trait: TraitId;
}
