export const DEFAULT_ATTRIBUTE_RANGE = [1, 6];

export const KARMA_PER_ATTRIBUTE = 5;
export const KARMA_PER_ACTIVE_SKILL = 2;
export const KARMA_PER_KNOWLEDGE = 1;
export const KARMA_PER_SPECIALIZATION = 7;
export const KARMA_PER_COMPLEX_FORM = 4;
export const KARMA_PER_SPELL = 5;

export const KARMA_PER_INITIATE = (grade: number): number => 10 + (grade * 3);
export const MAX_KNOWN_SPELLS = (magic: number): number => magic * 2;
export const FREE_KNOWLEDGE = (intuiton: number, logic: number): number => (intuiton + logic) * 2;
export const FREE_CONTACTS = (charisma: number): number => charisma * 3;

export const POSITIVE_QUALITIES_MAX_COST = 25;
export const NEGATIVE_QUALITIES_MAX_COST = -25;

export const SKILL_MAX_ON_CREATION = 6;
export const SKILL_MAX_ON_UPGRADE = 12;
