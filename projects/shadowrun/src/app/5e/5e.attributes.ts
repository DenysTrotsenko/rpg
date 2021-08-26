import {Attribute, AttributeId, AttributeTypeId} from './5e.models';
import {ATTRIBUTE_ID, ATTRIBUTE_TYPE_ID} from '@shadowrun/app/5e/5e.enums';

export const ATTRIBUTES: Attribute[] = [
  { id: ATTRIBUTE_ID.BODY as AttributeId, name: 'Body', type: ATTRIBUTE_TYPE_ID.PHYSICAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.AGILITY as AttributeId, name: 'Agility', type: ATTRIBUTE_TYPE_ID.PHYSICAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.REACTION as AttributeId, name: 'Reaction', type: ATTRIBUTE_TYPE_ID.PHYSICAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.STRENGTH as AttributeId, name: 'Strength', type: ATTRIBUTE_TYPE_ID.PHYSICAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.WILLPOWER as AttributeId, name: 'Willpower', type: ATTRIBUTE_TYPE_ID.MENTAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.LOGIC as AttributeId, name: 'Logic', type: ATTRIBUTE_TYPE_ID.MENTAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.INTUITION as AttributeId, name: 'Intuition', type: ATTRIBUTE_TYPE_ID.MENTAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.CHARISMA as AttributeId, name: 'Charisma', type: ATTRIBUTE_TYPE_ID.MENTAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.EDGE as AttributeId, name: 'Edge', type: ATTRIBUTE_TYPE_ID.SPECIAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.ESSENCE as AttributeId, name: 'Essence', type: ATTRIBUTE_TYPE_ID.SPECIAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.MAGIC as AttributeId, name: 'Magic', type: ATTRIBUTE_TYPE_ID.SPECIAL as AttributeTypeId },
  { id: ATTRIBUTE_ID.RESONANCE as AttributeId, name: 'Resonance', type: ATTRIBUTE_TYPE_ID.SPECIAL as AttributeTypeId }
];
