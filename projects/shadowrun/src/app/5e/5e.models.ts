import { Opaque } from '@shared';
import {
  ATTRIBUTE_ID,
  SPELL_CATEGORY_ID,
  SPELL_DAMAGE_ID,
  SPELL_DURATION_ID, SPELL_KIND_ID,
  SPELL_RANGE_ID, SPELL_SUBCATEGORY_ID,
  SPELL_TYPE_ID
} from '@shadowrun/app/5e/5e.enums';

export type AttributeId = Opaque<string, 'AttributeId'>;
export type AttributeTypeId = Opaque<string, 'AttributeTypeId'>;
export type AwakeningId = Opaque<string, 'AwakeningId'>;
export type BookId = Opaque<string, 'BookId'>;
export type ContactId = Opaque<string, 'ContactId'>;
export type GearId = Opaque<string, 'GearId'>;
export type MetatypeId = Opaque<string, 'MetatypeId'>;
export type QualityId = Opaque<string, 'QualityId'>;
export type ShadowrunnerId = Opaque<string, 'ShadowrunnerId'>;
export type SkillId = Opaque<string, 'SkillId'>;
export type SpellId = Opaque<string, 'SpellId'>;
export type SkillCategoryId = Opaque<string, 'SkillCategoryId'>;

export interface Attribute {
  id: AttributeId;
  name: string;
  type: AttributeTypeId;
}

export interface Awakening {
  id: AwakeningId;
  name: string;
  attributes: {
    [ATTRIBUTE_ID.MAGIC]: [number, number];
    [ATTRIBUTE_ID.RESONANCE]: [number, number];
  };
  cost: number;
}

export interface Book {
  id: BookId;
  name: string;
}

export interface Contact {
  id: ContactId;
  name: string;
  connection: number;
  loyalty: number;
}

export interface Gear {
  id: BookId;
  name: string;
  cost: number;
  quantity: number;
}

export interface Knowledge {
  id?: string;
  name: string;
  category: SkillCategoryId;
  specializations?: string[];
}

export interface Metatype {
  id: MetatypeId;
  book: BookId;
  name: string;
  qualities: QualityId[];
  attributes: {
    [ATTRIBUTE_ID.BODY]: [number, number];
    [ATTRIBUTE_ID.AGILITY]: [number, number];
    [ATTRIBUTE_ID.REACTION]: [number, number];
    [ATTRIBUTE_ID.STRENGTH]: [number, number];
    [ATTRIBUTE_ID.WILLPOWER]: [number, number];
    [ATTRIBUTE_ID.LOGIC]: [number, number];
    [ATTRIBUTE_ID.INTUITION]: [number, number];
    [ATTRIBUTE_ID.CHARISMA]: [number, number];
    [ATTRIBUTE_ID.EDGE]: [number, number];
    [ATTRIBUTE_ID.ESSENCE]: [number, number];
  };
  cost: number;
}

export interface Quality {
  id: QualityId;
  book: BookId;
  name: string;
  ratings: { name: string; cost: number; }[];
  multiple: boolean;
  specialty: boolean;
  formula: any;
}

export interface Skill {
  id: SkillId;
  name: string;
  attribute: AttributeId;
  default: boolean;
  specializations: string[];
}

export interface Spell {
  id: SpellId;
  book: BookId;
  name: string;
  category: SPELL_CATEGORY_ID;
  subcategories: SPELL_SUBCATEGORY_ID[];
  type: SPELL_TYPE_ID;
  range: SPELL_RANGE_ID;
  damage?: SPELL_DAMAGE_ID;
  duration: SPELL_DURATION_ID;
  drain: number;
  specialty: boolean;
}

export interface SkillCategory {
  id: SkillCategoryId;
  name: string;
  attribute: AttributeId;
}
