import {
  ADEPT_POWER_ID,
  ATTRIBUTE_ID,
  ATTRIBUTE_TYPE_ID,
  AWAKENING_ID,
  BOOK_ID, COMPLEX_FORM_DURATION_ID,
  COMPLEX_FORM_ID,
  COMPLEX_FORM_TARGET_ID,
  GEAR_ID, GEAR_TYPE_ID, LIFESTYLE_ID, LIFESTYLE_OPTION_ID,
  METATYPE_ID,
  QUALITY_ID,
  SKILL_CATEGORY_ID,
  SKILL_ID,
  SPELL_CATEGORY_ID,
  SPELL_DAMAGE_ID,
  SPELL_DURATION_ID,
  SPELL_ID,
  SPELL_RANGE_ID,
  SPELL_SUBCATEGORY_ID,
  SPELL_TYPE_ID, SPIRIT_ID
} from './5e.enums';
import {JsonString} from '@shared';

export interface AdeptPower {
  id: ADEPT_POWER_ID;
  name: string;
}

export interface Attribute {
  id: ATTRIBUTE_ID;
  name: string;
  type: ATTRIBUTE_TYPE_ID;
}

export interface Awakening {
  id: AWAKENING_ID;
  name: string;
  attributes: {
    [ATTRIBUTE_ID.MAGIC]: [number, number];
    [ATTRIBUTE_ID.RESONANCE]: [number, number];
  };
  cost: number;
}

export interface Book {
  id: BOOK_ID;
  name: string;
}

export interface ComplexForm {
  id: COMPLEX_FORM_ID;
  name: string;
  target: COMPLEX_FORM_TARGET_ID;
  duration: COMPLEX_FORM_DURATION_ID;
  fading: number;
}

export interface Contact {
  id: string;
  name: string;
  connection: number;
  loyalty: number;
}

export interface Gear {
  id: GEAR_ID;
  book: BOOK_ID;
  name: string;
  type: GEAR_TYPE_ID;
  ratings: {
    name: string;
    rating: number;
    availability: number;
    restricted: boolean;
    forbidden: boolean;
    cost: number;
    data?: object;
  }[];
  formulas?: object;
  labels?: { [k: string]: string; };
  restricted: boolean;
  forbidden: boolean;
  specialty: boolean;
  quantity: number;
}

export interface Knowledge {
  id?: string;
  name: string;
  category: SKILL_CATEGORY_ID;
  specializations?: string[];
}

export interface Lifestyle {
  id: LIFESTYLE_ID;
  book: BOOK_ID;
  name: string;
  cost: number;
}

export interface LifestyleOption {
  id: LIFESTYLE_OPTION_ID;
  book: BOOK_ID;
  name: string;
  cost: (value: number) => number;
}

export interface Metatype {
  id: METATYPE_ID;
  book: BOOK_ID;
  name: string;
  qualities: { id: QUALITY_ID; rating: number; }[];
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
  id: QUALITY_ID;
  book: BOOK_ID;
  name: string;
  ratings: { name: string; cost: number; }[];
  multiple: boolean;
  specialty: boolean;
  formulas?: any;
}

export interface Skill {
  id: SKILL_ID;
  name: string;
  attribute: ATTRIBUTE_ID;
  default: boolean;
  specializations: string[];
}

export interface Spell {
  id: SPELL_ID;
  book: BOOK_ID;
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
  id: SKILL_CATEGORY_ID;
  name: string;
  attribute: ATTRIBUTE_ID;
}

export interface Spirit {
  id: SPIRIT_ID;
  book: BOOK_ID;
  name: string;
  attributes: {
    [ATTRIBUTE_ID.BODY]: (force: number) => number;
    [ATTRIBUTE_ID.AGILITY]: (force: number) => number;
    [ATTRIBUTE_ID.REACTION]: (force: number) => number;
    [ATTRIBUTE_ID.STRENGTH]: (force: number) => number;
    [ATTRIBUTE_ID.WILLPOWER]: (force: number) => number;
    [ATTRIBUTE_ID.LOGIC]: (force: number) => number;
    [ATTRIBUTE_ID.INTUITION]: (force: number) => number;
    [ATTRIBUTE_ID.CHARISMA]: (force: number) => number;
    [ATTRIBUTE_ID.EDGE]: (force: number) => number;
    [ATTRIBUTE_ID.ESSENCE]: (force: number) => number;
    [ATTRIBUTE_ID.MAGIC]: (force: number) => number;
  };
  initiative: (force: number) => number;
  astral_initiative: (force: number) => number;
  skills: SKILL_ID[];
  powers: [];
  optional_powers: [];
  special: [];
}

export interface CharacterAttribute {
  id: ATTRIBUTE_ID;
  min: number;
  max: number;
  rating: number;
}

export interface CharacterQuality {
  id: QUALITY_ID;
  rating: number;
  specialty: string;
}
