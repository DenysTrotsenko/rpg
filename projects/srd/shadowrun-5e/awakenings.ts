import { Awakening } from './models';
import { ATTRIBUTE_ID, AWAKENING_ID } from './enums';

export const AWAKENINGS: Awakening[] = [
  {
    id: AWAKENING_ID.MUNDANE,
    name: 'Mundane',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [0, 0],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 0
  },
  {
    id: AWAKENING_ID.ADEPT,
    name: 'Adept',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 20
  },
  {
    id: AWAKENING_ID.ASPECTED_MAGICIAN_SPELLCASTER,
    name: 'Aspected Magician (Spellcaster)',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 15
  },
  {
    id: AWAKENING_ID.ASPECTED_MAGICIAN_SUMMONER,
    name: 'Aspected Magician (Summoner)',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 15
  },
  {
    id: AWAKENING_ID.ASPECTED_MAGICIAN_ALCHEMIST,
    name: 'Aspected Magician (Alchemist)',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 15
  },
  {
    id: AWAKENING_ID.MAGICIAN,
    name: 'Magician',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 30
  },
  {
    id: AWAKENING_ID.MYSTIC_ADEPT,
    name: 'Mystic Adept',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 35
  },
  {
    id: AWAKENING_ID.TECHNOMANCER,
    name: 'Technomancer',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [0, 0],
      [ATTRIBUTE_ID.RESONANCE]: [1, 6]
    },
    cost: 15
  }
];
