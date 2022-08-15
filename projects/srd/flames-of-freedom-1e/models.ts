import { HasId } from '@shared';
import {
  AgeId,
  AllegianceId, ArchetypeId,
  AttributeId,
  BeliefId, BuildId,
  CultureId, EyesId,
  FlawId, HairColorId, HairLengthId, HairStyleId, LanguageId, MarkId,
  ProfessionId,
  QuirkId, SexId,
  SkillId,
  SkillTypeId, SpellId, StatureId, StyleId,
  TalentId,
  TierId,
  TraitId, WareId, WareTypeId
} from './enums';

export interface Age {
  id: AgeId;
  name: string;
}

export interface Allegiance {
  id: AllegianceId;
  name: string;
  labels?: {
    description: string;
  };
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  labels?: {
    description: string;
    wares?: string;
  };
  traits: TraitId[];
  professions: ProfessionId[];
  money?: [number, number, number];
}

export interface Attribute extends HasId<AttributeId> {
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

export interface Culture {
  id: CultureId;
  name: string;
  labels: {
    description: string;
  };
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

export interface Language {
  id: LanguageId;
  name: string;
}

export interface Mark {
  id: MarkId;
  name: string;
}

export interface AdvancementScheme {
  traits?: TraitId[];
  quirks?: QuirkId[];
  bonuses?: AttributeId[];
  skills?: SkillId[];
  talents?: TalentId[];
}

export interface Profession extends HasId<ProfessionId> {
  id: ProfessionId;
  name: string;
  traits: TraitId[];
  quirks: QuirkId[];
  advancements: AdvancementScheme;
  labels?: {
    description: string;
  };
}

export interface Quirk {
  id: QuirkId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
}

export interface Sex {
  id: SexId;
  name: string;
}

export interface Skill extends HasId<SkillId> {
  id: SkillId;
  name: string;
  attribute: AttributeId;
  type: SkillTypeId;
  labels?: {
    description: string;
    difficulties: string;
    tooltip?: string;
  };
}

export interface Spell {
  id: SpellId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Stature {
  id: StatureId;
  name: string;
}

export interface Style {
  id: StyleId;
  name: string;
}

export interface Talent extends HasId<TalentId> {
  id: TalentId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
}

export interface Tier {
  id: TierId;
  name: string;
}

export interface Trait extends HasId<TraitId> {
  id: TraitId;
  name: string;
  labels?: {
    description: string;
    effect: string;
    tooltip?: string;
  };
}

export interface Ware {
  id: WareId;
  name: string;
  type: WareTypeId;
  labels?: {
    description?: string;
    tooltip?: string;
  };
}
