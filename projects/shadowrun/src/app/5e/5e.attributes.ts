import { Attribute, AttributeId } from './5e.models';
import {ATTRIBUTE_ID} from '@shadowrun/app/5e/5e.enums';

export const ATTRIBUTES: Attribute[] = [
  { id: ATTRIBUTE_ID.BODY as AttributeId, name: 'Body' },
  { id: ATTRIBUTE_ID.AGILITY as AttributeId, name: 'Agility' },
  { id: ATTRIBUTE_ID.REACTION as AttributeId, name: 'Reaction' },
  { id: ATTRIBUTE_ID.STRENGTH as AttributeId, name: 'Strength' },
  { id: ATTRIBUTE_ID.WILLPOWER as AttributeId, name: 'Willpower' },
  { id: ATTRIBUTE_ID.LOGIC as AttributeId, name: 'Logic' },
  { id: ATTRIBUTE_ID.INTUITION as AttributeId, name: 'Intuition' },
  { id: ATTRIBUTE_ID.CHARISMA as AttributeId, name: 'Charisma' },
  { id: ATTRIBUTE_ID.EDGE as AttributeId, name: 'Edge' },
  { id: ATTRIBUTE_ID.ESSENCE as AttributeId, name: 'Essence' },
  { id: ATTRIBUTE_ID.MAGIC as AttributeId, name: 'Magic / Resonance' }
];
