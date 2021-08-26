import { Awakening, AwakeningId } from './5e.models';
import {ATTRIBUTE_ID, AWAKENING_ID} from './5e.enums';

export const AWAKENINGS: Awakening[] = [
  {
    id: AWAKENING_ID.MUNDANE as AwakeningId,
    name: 'Mundane',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [0, 0],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 0
  },
  {
    id: AWAKENING_ID.ADEPT as AwakeningId,
    name: 'Adept',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 20
  },
  {
    id: AWAKENING_ID.ASPECTED_MAGICIAN as AwakeningId,
    name: 'Aspected Magician',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 15
  },
  {
    id: AWAKENING_ID.MAGICIAN as AwakeningId,
    name: 'Magician',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 30
  },
  {
    id: AWAKENING_ID.MYSTIC_ADEPT as AwakeningId,
    name: 'Mystic Adept',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [1, 6],
      [ATTRIBUTE_ID.RESONANCE]: [0, 0]
    },
    cost: 35
  },
  {
    id: AWAKENING_ID.TECHNOMANCER as AwakeningId,
    name: 'Technomancer',
    attributes: {
      [ATTRIBUTE_ID.MAGIC]: [0, 0],
      [ATTRIBUTE_ID.RESONANCE]: [1, 6]
    },
    cost: 15
  }
];
