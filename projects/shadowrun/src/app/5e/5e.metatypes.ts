import {BookId, Metatype, MetatypeId} from './5e.models';
import {ATTRIBUTE_ID, BOOK_ID, METATYPE_ID} from '@shadowrun/app/5e/5e.enums';

export const METATYPES: Metatype[] = [
  {
    id: METATYPE_ID.HUMAN as MetatypeId,
    book: BOOK_ID.CORE_RULEBOOK as BookId,
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
      [ATTRIBUTE_ID.ESSENCE]: [6, 6],
      [ATTRIBUTE_ID.MAGIC]: [0, 0]
    },
    cost: 0
  },
  {
    id: METATYPE_ID.DWARF as MetatypeId,
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    name: 'Dwarf',
    qualities: [],
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
      [ATTRIBUTE_ID.ESSENCE]: [6, 6],
      [ATTRIBUTE_ID.MAGIC]: [0, 0]
    },
    cost: 50
  },
  {
    id: METATYPE_ID.ELF as MetatypeId,
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    name: 'Elf',
    qualities: [],
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
      [ATTRIBUTE_ID.ESSENCE]: [6, 6],
      [ATTRIBUTE_ID.MAGIC]: [0, 0]
    },
    cost: 40
  },
  {
    id: METATYPE_ID.ORK as MetatypeId,
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    name: 'Ork',
    qualities: [],
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
      [ATTRIBUTE_ID.ESSENCE]: [6, 6],
      [ATTRIBUTE_ID.MAGIC]: [0, 0]
    },
    cost: 50
  },
  {
    id: METATYPE_ID.TROLL as MetatypeId,
    book: BOOK_ID.CORE_RULEBOOK as BookId,
    name: 'Troll',
    qualities: [],
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
      [ATTRIBUTE_ID.ESSENCE]: [6, 6],
      [ATTRIBUTE_ID.MAGIC]: [0, 0]
    },
    cost: 90
  }
];
