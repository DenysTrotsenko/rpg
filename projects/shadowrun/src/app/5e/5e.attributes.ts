import { Attribute } from './5e.models';
import { ATTRIBUTE_ID, ATTRIBUTE_TYPE_ID } from '@shadowrun/app/5e/5e.enums';

export const ATTRIBUTES: Attribute[] = [
  { id: ATTRIBUTE_ID.BODY, name: 'Body', type: ATTRIBUTE_TYPE_ID.PHYSICAL },
  { id: ATTRIBUTE_ID.AGILITY, name: 'Agility', type: ATTRIBUTE_TYPE_ID.PHYSICAL },
  { id: ATTRIBUTE_ID.REACTION, name: 'Reaction', type: ATTRIBUTE_TYPE_ID.PHYSICAL },
  { id: ATTRIBUTE_ID.STRENGTH, name: 'Strength', type: ATTRIBUTE_TYPE_ID.PHYSICAL },
  { id: ATTRIBUTE_ID.WILLPOWER, name: 'Willpower', type: ATTRIBUTE_TYPE_ID.MENTAL },
  { id: ATTRIBUTE_ID.LOGIC, name: 'Logic', type: ATTRIBUTE_TYPE_ID.MENTAL },
  { id: ATTRIBUTE_ID.INTUITION, name: 'Intuition', type: ATTRIBUTE_TYPE_ID.MENTAL },
  { id: ATTRIBUTE_ID.CHARISMA, name: 'Charisma', type: ATTRIBUTE_TYPE_ID.MENTAL },
  { id: ATTRIBUTE_ID.EDGE, name: 'Edge', type: ATTRIBUTE_TYPE_ID.SPECIAL },
  { id: ATTRIBUTE_ID.ESSENCE, name: 'Essence', type: ATTRIBUTE_TYPE_ID.SPECIAL },
  { id: ATTRIBUTE_ID.MAGIC, name: 'Magic', type: ATTRIBUTE_TYPE_ID.SPECIAL },
  { id: ATTRIBUTE_ID.RESONANCE, name: 'Resonance', type: ATTRIBUTE_TYPE_ID.SPECIAL }
];
