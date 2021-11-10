import {ATTRIBUTE_ID, BOOK_ID, POWER_ID, SKILL_ID, SPIRIT_ID} from './5e.enums';
import {Spirit} from './5e.models';

export const SPIRITS: Spirit[] = [
  {
    id: SPIRIT_ID.AIR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Air',
    attributes: {
      [ATTRIBUTE_ID.BODY]: (force: number): number => Math.max(1, force - 2),
      [ATTRIBUTE_ID.AGILITY]: (force: number): number => Math.max(1, force + 3),
      [ATTRIBUTE_ID.REACTION]: (force: number): number => Math.max(1, force + 4),
      [ATTRIBUTE_ID.STRENGTH]: (force: number): number => Math.max(1, force - 3),
      [ATTRIBUTE_ID.WILLPOWER]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.LOGIC]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.INTUITION]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.CHARISMA]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.EDGE]: (force: number): number => Math.max(1, force / 2),
      [ATTRIBUTE_ID.ESSENCE]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.MAGIC]: (force: number): number => Math.max(1, force),
    },
    initiative: (force: number): number => force,
    astral_initiative: (force: number): number => force,
    skills: [
      SKILL_ID.ASSENSING,
      SKILL_ID.ASTRAL_COMBAT,
      SKILL_ID.EXOTIC_RANGED_WEAPON,
      SKILL_ID.PERCEPTION,
      SKILL_ID.RUNNING,
      SKILL_ID.UNARMED_COMBAT
    ],
    powers: [],
    optional_powers: [],
    special: []
  },
  {
    id: SPIRIT_ID.BEAST,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Beast',
    attributes: {
      [ATTRIBUTE_ID.BODY]: (force: number): number => Math.max(1, force + 2),
      [ATTRIBUTE_ID.AGILITY]: (force: number): number => Math.max(1, force + 1),
      [ATTRIBUTE_ID.REACTION]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.STRENGTH]: (force: number): number => Math.max(1, force + 2),
      [ATTRIBUTE_ID.WILLPOWER]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.LOGIC]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.INTUITION]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.CHARISMA]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.EDGE]: (force: number): number => Math.max(1, force / 2),
      [ATTRIBUTE_ID.ESSENCE]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.MAGIC]: (force: number): number => Math.max(1, force),
    },
    initiative: (force: number): number => force,
    astral_initiative: (force: number): number => force,
    skills: [
      SKILL_ID.ASSENSING,
      SKILL_ID.ASTRAL_COMBAT,
      SKILL_ID.PERCEPTION,
      SKILL_ID.UNARMED_COMBAT
    ],
    powers: [],
    optional_powers: [],
    special: []
  },
  {
    id: SPIRIT_ID.EARTH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Earth',
    attributes: {
      [ATTRIBUTE_ID.BODY]: (force: number): number => Math.max(1, force + 4),
      [ATTRIBUTE_ID.AGILITY]: (force: number): number => Math.max(1, force - 2),
      [ATTRIBUTE_ID.REACTION]: (force: number): number => Math.max(1, force - 1),
      [ATTRIBUTE_ID.STRENGTH]: (force: number): number => Math.max(1, force + 4),
      [ATTRIBUTE_ID.WILLPOWER]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.LOGIC]: (force: number): number => Math.max(1, force - 1),
      [ATTRIBUTE_ID.INTUITION]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.CHARISMA]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.EDGE]: (force: number): number => Math.max(1, force / 2),
      [ATTRIBUTE_ID.ESSENCE]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.MAGIC]: (force: number): number => Math.max(1, force),
    },
    initiative: (force: number): number => force,
    astral_initiative: (force: number): number => force,
    skills: [
      SKILL_ID.ASSENSING,
      SKILL_ID.ASTRAL_COMBAT,
      SKILL_ID.EXOTIC_RANGED_WEAPON,
      SKILL_ID.PERCEPTION,
      SKILL_ID.UNARMED_COMBAT
    ],
    powers: [],
    optional_powers: [],
    special: []
  },
  {
    id: SPIRIT_ID.FIRE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Fire',
    attributes: {
      [ATTRIBUTE_ID.BODY]: (force: number): number => Math.max(1, force + 1),
      [ATTRIBUTE_ID.AGILITY]: (force: number): number => Math.max(1, force + 2),
      [ATTRIBUTE_ID.REACTION]: (force: number): number => Math.max(1, force + 3),
      [ATTRIBUTE_ID.STRENGTH]: (force: number): number => Math.max(1, force - 2),
      [ATTRIBUTE_ID.WILLPOWER]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.LOGIC]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.INTUITION]: (force: number): number => Math.max(1, force + 1),
      [ATTRIBUTE_ID.CHARISMA]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.EDGE]: (force: number): number => Math.max(1, force / 2),
      [ATTRIBUTE_ID.ESSENCE]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.MAGIC]: (force: number): number => Math.max(1, force),
    },
    initiative: (force: number): number => force,
    astral_initiative: (force: number): number => force,
    skills: [
      SKILL_ID.ASSENSING,
      SKILL_ID.ASTRAL_COMBAT,
      SKILL_ID.EXOTIC_RANGED_WEAPON,
      SKILL_ID.PERCEPTION,
      SKILL_ID.UNARMED_COMBAT
    ],
    powers: [
      POWER_ID.ACCIDENT,
      POWER_ID.ASTRAL_FORM,
      POWER_ID.CONFUSION,
      POWER_ID.ELEMENTAL_ATTACK,
      POWER_ID.ENERGY_AURA,
      POWER_ID.ENGULF,
      POWER_ID.MATERIALIZATION,
      POWER_ID.SAPIENCE
    ],
    optional_powers: [
      POWER_ID.FEAR,
      POWER_ID.GUARD,
      POWER_ID.NOXIOUS_BREATH,
      POWER_ID.SEARCH
    ],
    special: []
  },
  {
    id: SPIRIT_ID.MAN,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Man',
    attributes: {
      [ATTRIBUTE_ID.BODY]: (force: number): number => Math.max(1, force + 1),
      [ATTRIBUTE_ID.AGILITY]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.REACTION]: (force: number): number => Math.max(1, force + 2),
      [ATTRIBUTE_ID.STRENGTH]: (force: number): number => Math.max(1, force - 2),
      [ATTRIBUTE_ID.WILLPOWER]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.LOGIC]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.INTUITION]: (force: number): number => Math.max(1, force + 1),
      [ATTRIBUTE_ID.CHARISMA]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.EDGE]: (force: number): number => Math.max(1, force / 2),
      [ATTRIBUTE_ID.ESSENCE]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.MAGIC]: (force: number): number => Math.max(1, force),
    },
    initiative: (force: number): number => force,
    astral_initiative: (force: number): number => force,
    skills: [
      SKILL_ID.ASSENSING,
      SKILL_ID.ASTRAL_COMBAT,
      SKILL_ID.PERCEPTION,
      SKILL_ID.SPELLCASTING,
      SKILL_ID.UNARMED_COMBAT
    ],
    powers: [
      POWER_ID.ACCIDENT,
      POWER_ID.ASTRAL_FORM,
      POWER_ID.CONCEALMENT,
      POWER_ID.CONFUSION,
      POWER_ID.ENHANCED_SENSES,
    ],
    optional_powers: [],
    special: []
  },
  {
    id: SPIRIT_ID.WATER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Water',
    attributes: {
      [ATTRIBUTE_ID.BODY]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.AGILITY]: (force: number): number => Math.max(1, force + 1),
      [ATTRIBUTE_ID.REACTION]: (force: number): number => Math.max(1, force + 2),
      [ATTRIBUTE_ID.STRENGTH]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.WILLPOWER]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.LOGIC]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.INTUITION]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.CHARISMA]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.EDGE]: (force: number): number => Math.max(1, force / 2),
      [ATTRIBUTE_ID.ESSENCE]: (force: number): number => Math.max(1, force),
      [ATTRIBUTE_ID.MAGIC]: (force: number): number => Math.max(1, force),
    },
    initiative: (force: number): number => force,
    astral_initiative: (force: number): number => force,
    skills: [
      SKILL_ID.ASSENSING,
      SKILL_ID.ASTRAL_COMBAT,
      SKILL_ID.EXOTIC_RANGED_WEAPON,
      SKILL_ID.PERCEPTION,
      SKILL_ID.UNARMED_COMBAT
    ],
    powers: [
      POWER_ID.ASTRAL_FORM,
      POWER_ID.CONCEALMENT,
      POWER_ID.CONFUSION,
      POWER_ID.ENGULF,
      POWER_ID.MATERIALIZATION,
      POWER_ID.MOVEMENT,
      POWER_ID.SAPIENCE,
      POWER_ID.SEARCH
    ],
    optional_powers: [
      POWER_ID.ACCIDENT,
      POWER_ID.BINDING,
      POWER_ID.ELEMENTAL_ATTACK,
      POWER_ID.ENERGY_AURA,
      POWER_ID.GUARD,
      POWER_ID.WEATHER_CONTROL
    ],
    special: []
  },
];
