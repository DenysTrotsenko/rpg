import { Awakening, AwakeningId } from './5e.models';
import { AWAKENING_ID } from './5e.enums';

export const AWAKENINGS: Awakening[] = [
  { id: AWAKENING_ID.MUNDANE as AwakeningId, name: 'Mundane', cost: 0 },
  { id: AWAKENING_ID.ADEPT as AwakeningId, name: 'Adept', cost: 20 },
  { id: AWAKENING_ID.ASPECTED_MAGICIAN as AwakeningId, name: 'Aspected Magician', cost: 15 },
  { id: AWAKENING_ID.MAGICIAN as AwakeningId, name: 'Magician', cost: 30 },
  { id: AWAKENING_ID.MYSTIC_ADEPT as AwakeningId, name: 'Mystic Adept', cost: 35 },
  { id: AWAKENING_ID.TECHNOMANCER as AwakeningId, name: 'Technomancer', cost: 15 }
];
