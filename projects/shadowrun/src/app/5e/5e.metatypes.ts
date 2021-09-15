import { Metatype } from './5e.models';
import { ATTRIBUTE_ID, BOOK_ID, METATYPE_ID, QUALITY_ID } from '@shadowrun/app/5e/5e.enums';

export const METATYPES: Metatype[] = [
  {
    id: METATYPE_ID.HUMAN,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Human',
    qualities: [],
    attributes: {
      [ATTRIBUTE_ID.BODY]: [1, 6],
      [ATTRIBUTE_ID.AGILITY]: [1, 6],
      [ATTRIBUTE_ID.REACTION]: [1, 6],
      [ATTRIBUTE_ID.STRENGTH]: [1, 6],
      [ATTRIBUTE_ID.WILLPOWER]: [1, 6],
      [ATTRIBUTE_ID.LOGIC]: [1, 6],
      [ATTRIBUTE_ID.INTUITION]: [1, 6],
      [ATTRIBUTE_ID.CHARISMA]: [1, 6],
      [ATTRIBUTE_ID.EDGE]: [2, 7],
      [ATTRIBUTE_ID.ESSENCE]: [6, 6]
    },
    cost: 0
  },
  {
    id: METATYPE_ID.DWARF,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Dwarf',
    qualities: [
      { id: QUALITY_ID.RACIAL_THERMOGRAPHIC_VISION, rating: 0, specialty: null },
      { id: QUALITY_ID.RACIAL_PATHOGENS_RESISTANCE, rating: 0, specialty: null },
      { id: QUALITY_ID.RACIAL_LIFESTYLE, rating: 0, specialty: null }
    ],
    attributes: {
      [ATTRIBUTE_ID.BODY]: [3, 8],
      [ATTRIBUTE_ID.AGILITY]: [1, 6],
      [ATTRIBUTE_ID.REACTION]: [1, 5],
      [ATTRIBUTE_ID.STRENGTH]: [3, 8],
      [ATTRIBUTE_ID.WILLPOWER]: [2, 7],
      [ATTRIBUTE_ID.LOGIC]: [1, 6],
      [ATTRIBUTE_ID.INTUITION]: [1, 6],
      [ATTRIBUTE_ID.CHARISMA]: [1, 6],
      [ATTRIBUTE_ID.EDGE]: [1, 6],
      [ATTRIBUTE_ID.ESSENCE]: [6, 6]
    },
    cost: 50
  },
  {
    id: METATYPE_ID.ELF,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Elf',
    qualities: [
      { id: QUALITY_ID.RACIAL_LOW_LIGHT_VISION, rating: 0, specialty: null }
    ],
    attributes: {
      [ATTRIBUTE_ID.BODY]: [1, 6],
      [ATTRIBUTE_ID.AGILITY]: [2, 7],
      [ATTRIBUTE_ID.REACTION]: [1, 6],
      [ATTRIBUTE_ID.STRENGTH]: [1, 6],
      [ATTRIBUTE_ID.WILLPOWER]: [1, 6],
      [ATTRIBUTE_ID.LOGIC]: [1, 6],
      [ATTRIBUTE_ID.INTUITION]: [1, 6],
      [ATTRIBUTE_ID.CHARISMA]: [3, 8],
      [ATTRIBUTE_ID.EDGE]: [1, 6],
      [ATTRIBUTE_ID.ESSENCE]: [6, 6]
    },
    cost: 40
  },
  {
    id: METATYPE_ID.ORK,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Ork',
    qualities: [
      { id: QUALITY_ID.RACIAL_LOW_LIGHT_VISION, rating: 0, specialty: null }
    ],
    attributes: {
      [ATTRIBUTE_ID.BODY]: [4, 9],
      [ATTRIBUTE_ID.AGILITY]: [1, 6],
      [ATTRIBUTE_ID.REACTION]: [1, 6],
      [ATTRIBUTE_ID.STRENGTH]: [3, 8],
      [ATTRIBUTE_ID.WILLPOWER]: [1, 6],
      [ATTRIBUTE_ID.LOGIC]: [1, 5],
      [ATTRIBUTE_ID.INTUITION]: [1, 6],
      [ATTRIBUTE_ID.CHARISMA]: [1, 5],
      [ATTRIBUTE_ID.EDGE]: [1, 6],
      [ATTRIBUTE_ID.ESSENCE]: [6, 6]
    },
    cost: 50
  },
  {
    id: METATYPE_ID.TROLL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Troll',
    qualities: [
      { id: QUALITY_ID.RACIAL_THERMOGRAPHIC_VISION, rating: 0, specialty: null },
      { id: QUALITY_ID.RACIAL_REACH, rating: 0, specialty: null },
      { id: QUALITY_ID.RACIAL_DERMAL_ARMOR, rating: 0, specialty: null },
      { id: QUALITY_ID.RACIAL_LIFESTYLE, rating: 1, specialty: null }
    ],
    attributes: {
      [ATTRIBUTE_ID.BODY]: [5, 10],
      [ATTRIBUTE_ID.AGILITY]: [1, 5],
      [ATTRIBUTE_ID.REACTION]: [1, 6],
      [ATTRIBUTE_ID.STRENGTH]: [5, 10],
      [ATTRIBUTE_ID.WILLPOWER]: [1, 6],
      [ATTRIBUTE_ID.LOGIC]: [1, 5],
      [ATTRIBUTE_ID.INTUITION]: [1, 5],
      [ATTRIBUTE_ID.CHARISMA]: [1, 4],
      [ATTRIBUTE_ID.EDGE]: [1, 6],
      [ATTRIBUTE_ID.ESSENCE]: [6, 6]
    },
    cost: 90
  }
];
