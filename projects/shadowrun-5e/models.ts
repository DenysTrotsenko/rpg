import {
  ADEPT_POWER_ID,
  ATTRIBUTE_ID,
  ATTRIBUTE_TYPE_ID, AUGMENTATION_GRADE_ID,
  AUGMENTATION_ID, AUGMENTATION_SLOT_ID,
  AWAKENING_ID,
  BOOK_ID,
  COMPLEX_FORM_DURATION_ID,
  COMPLEX_FORM_ID,
  COMPLEX_FORM_TARGET_ID,
  CONTACT_TYPE_ID,
  ECHO_ID,
  GEAR_ID,
  GEAR_TYPE_ID,
  LIFESTYLE_ID,
  LIFESTYLE_OPTION_ID,
  MAGICAL_TRADITION_ID,
  METAMAGIC_ID,
  METATYPE_ID,
  POWER_ACTION_ID,
  POWER_DURATION_ID,
  POWER_ID,
  POWER_RANGE_ID,
  POWER_TYPE_ID,
  PROGRAM_ID,
  QUALITY_ID,
  RITUAL_ID,
  RITUAL_KEYWORD_ID,
  SKILL_CATEGORY_ID,
  SKILL_ID,
  SPELL_CATEGORY_ID,
  SPELL_DAMAGE_ID,
  SPELL_DURATION_ID,
  SPELL_ID,
  SPELL_RANGE_ID,
  SPELL_TAG_ID,
  SPELL_TYPE_ID,
  SPIRIT_ID
} from './enums';

export interface AdeptPower {
  id: ADEPT_POWER_ID;
  name: string;
  labels: {
    description: string;
  };
}

export interface Attribute {
  id: ATTRIBUTE_ID;
  name: string;
  type: ATTRIBUTE_TYPE_ID;
  labels: {
    alias: string;
    description: string;
  };
}

export interface Augmentation {
  id: AUGMENTATION_ID;
  name: string;
  slots: AUGMENTATION_SLOT_ID[];
  ratings: { name: string; capacity: number; cost: number; availability: number; }[];
  data?: object;
  labels?: {
    availability: string;
    cost: string;
    description: string;
  };
}

export interface AugmentationGrade {
  id: AUGMENTATION_GRADE_ID;
  name: string;
  formulas: {
    availability: (availability: number) => number;
    cost: (cost: number) => number;
    essence: (essence: number) => number;
  };
  labels: {
    availability: string;
    cost: string;
    essence: string;
  };
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

export interface ComplexFormTarget {
  id: COMPLEX_FORM_TARGET_ID;
  name: string;
}

export interface ComplexFormDuration {
  id: COMPLEX_FORM_DURATION_ID;
  name: string;
  alias: string;
}

export interface ComplexForm {
  id: COMPLEX_FORM_ID;
  name: string;
  target: COMPLEX_FORM_TARGET_ID;
  duration: COMPLEX_FORM_DURATION_ID;
  fading: number;
  labels?: {
    description: string;
  };
}

export interface Contact {
  id: string;
  name: string;
  connection: number;
  loyalty: number;
}

export interface Echo {
  id: ECHO_ID;
  name: string;
  max: number;
  specialty?: boolean;
  labels: {
    description: string;
  };
  formulas?: {
    SPECIALTIES?: any;
  };
}

export interface GearType {
  id: GEAR_TYPE_ID;
  name: string;
}

export interface Gear {
  id: GEAR_ID | null;
  book: BOOK_ID;
  name: string;
  type: GEAR_TYPE_ID;
  ratings: number[];
  restricted: boolean;
  forbidden: boolean;
  data?: object;
  formulas?: {
    availability: (item: CharacterGear) => number;
    cost: (item: CharacterGear) => number;
  };
  labels?: { [k: string]: string; };
  specialty?: boolean;
  quantity?: number;
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

export interface MagicTradition {
  id: MAGICAL_TRADITION_ID;
  book: BOOK_ID;
  name: string;
  spirits: {
    combat: SPIRIT_ID;
    health: SPIRIT_ID;
    manipulation: SPIRIT_ID;
    detection: SPIRIT_ID;
    illusion: SPIRIT_ID;
  };
  formulas: {
    drain: (value: any) => number;
  };
  labels: {
    drain: string;
  };
}

export interface Metamagic {
  id: METAMAGIC_ID;
  book: BOOK_ID;
  name: string;
  type: 'adept' | 'all';
  multiple: boolean;
  labels: {
    description: string;
  };
}

export interface Metatype {
  id: METATYPE_ID;
  book: BOOK_ID;
  name: string;
  qualities: { id: QUALITY_ID; rating: number; specialty: string; }[];
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

export interface Power {
  id: POWER_ID;
  book: BOOK_ID;
  name: string;
  type: POWER_TYPE_ID;
  range: POWER_RANGE_ID;
  action: POWER_ACTION_ID;
  duration: POWER_DURATION_ID;
  labels: {
    description: string;
  };
}

export interface Program {
  id: PROGRAM_ID;
  name: string;
  labels: {
    description: string;
  };
}

export interface Quality {
  id: QUALITY_ID;
  book: BOOK_ID;
  name: string;
  ratings: { name: string; cost: number; }[];
  multiple: boolean;
  specialty: boolean;
  formulas: {
    ATTRIBUTE_MAX?: any;
    SKILL_MAX?: any;
    SPECIALTIES?: any;
  };
  labels: {
    description: string;
  };
}

export interface Ritual {
  id: RITUAL_ID;
  name: string;
  keywords: RITUAL_KEYWORD_ID[];
  labels: {
    description: string;
  };
}

export interface RitualKeyword { id: RITUAL_KEYWORD_ID; name: string; labels: { description: string; }; }

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
  tags: SPELL_TAG_ID[];
  type: SPELL_TYPE_ID;
  range: SPELL_RANGE_ID;
  duration: SPELL_DURATION_ID;
  drain: number;
  damage?: SPELL_DAMAGE_ID;
  specialty: boolean;
  labels: {
    description: string;
  };
}

export interface SpellCategory {
  id: SPELL_CATEGORY_ID;
  name: string;
  labels: { description: string; };
}

export interface SpellDamage { id: SPELL_DAMAGE_ID; name: string; alias: string; }

export interface SpellTag { id: SPELL_TAG_ID; name: string; labels: { description: string; }; }

export interface SpellType {
  id: SPELL_TYPE_ID;
  name: string;
  labels: {
    alias: string;
    [SPELL_CATEGORY_ID.ILLUSION]: string;
  };
}

export interface SpellRange { id: SPELL_RANGE_ID; name: string; alias: string; }

export interface SpellDuration { id: SPELL_DURATION_ID; name: string; alias: string; }

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
  powers: POWER_ID[];
  optional_powers: POWER_ID[];
  special: [];
}

export interface CharacterAttribute {
  id: ATTRIBUTE_ID;
  rating: number;
}

export interface CharacterComplexForm {
  id: COMPLEX_FORM_ID;
}

export interface CharacterContact {
  id: string;
  connection: number;
  loyalty: number;
  type: CONTACT_TYPE_ID;
  name: string;
  details: string;
}

export interface CharacterEcho {
  id: ECHO_ID;
  rating: number;
  specialty: string;
}

export interface CharacterGear {
  id: GEAR_ID;
  rating: number;
  quantity: number;
}

export interface CharacterGeneral {
  portrait: string;
  name: string;
  miscellaneous: {
    biography?: string;
    gender?: string;
  };
  awakening: AWAKENING_ID;
  metatype: METATYPE_ID;
}

export interface CharacterKnowledge {
  id: string;
  name: string;
  category: SKILL_CATEGORY_ID;
  rating: number;
  specializations: string[];
}

export interface CharacterLifestyle {
  id: LIFESTYLE_ID;
  options: LIFESTYLE_OPTION_ID[];
  term: number;
  details: string;
}

export interface CharacterMetamagic {
  id: METAMAGIC_ID;
  rating: number;
}

export interface CharacterQuality {
  id: QUALITY_ID;
  rating: number;
  specialty: string;
}

export interface CharacterSkill {
  id: SKILL_ID;
  rating: number;
  specializations: string[];
}

export interface CharacterRitual {
  id: RITUAL_ID;
}

export interface CharacterSpell {
  id: SPELL_ID;
  specialty: string;
}

export interface CharacterAugmentation {
  id: AUGMENTATION_ID;
  grade: AUGMENTATION_GRADE_ID;
  rating: number;
}

export interface Character {
  author: string;
  id: string;
  name: string;
  portrait: string;
  miscellaneous: {
    biography: string;
    gender: string;
  };
  metatype: METATYPE_ID;
  awakening: AWAKENING_ID;
  magic_tradition: MAGICAL_TRADITION_ID;
  qualities: CharacterQuality[];
  attributes: CharacterAttribute[];
  skills: CharacterSkill[];
  knowledge: any[];
  contacts: any[];
  spells: CharacterSpell[];
  rituals: CharacterRitual[];
  metamagic: CharacterMetamagic[];
  complex_forms: CharacterComplexForm[];
  echoes: CharacterEcho[];
  adept_powers: any[];
  lifestyles: CharacterLifestyle[];
  ware: any[];
  gear: CharacterGear[];
}

export interface AttributeView {
  name: string;
  rating: number;
  description: string;
  tooltip: string;
}

export interface ComplexFormView {
  name: string;
  target: ComplexFormTarget;
  duration: ComplexFormDuration;
  fading: string;
  description: string;
  tooltip: string;
}

export interface GearView {
  availability: string;
  cost: string;
  name: string;
  quantity: number;
  tooltip: string;
}

export interface GeneralView {
  portrait: string;
  name: string;
  gender: string;
  metatype: string;
  awakening: string;
}

export interface KnowledgeView {
  name: string;
  category: SkillCategory;
  rating: number;
  specializations: string;
  tooltip: string;
}

export interface QualityView {
  name: string;
  rating: string;
  specialty: string;
  description: string;
  tooltip: string;
}

export interface SkillView {
  name: string;
  rating: number;
  specializations: string;
  description: string;
  tooltip: string;
}

export interface SpellView {
  category: SpellCategory;
  name: string;
  specialty: string;
  tags: SpellTag[];
  damage: SpellDamage;
  type: SpellType;
  range: SpellRange;
  duration: SpellDuration;
  drain: string;
  description: string;
  tooltip: string;
}

export interface SpiritView {
  name: string;
}
