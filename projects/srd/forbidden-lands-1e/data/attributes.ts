import { AttributeId } from '../models/enums';
import { Attribute } from '../models/common';

export const ATTRIBUTES: Attribute[] = [
  {
    id: AttributeId.STRENGTH,
    name: 'Strength',
  },
  {
    id: AttributeId.AGILITY,
    name: 'Agility',
  },
  {
    id: AttributeId.WITS,
    name: 'Wits',
  },
  {
    id: AttributeId.EMPATHY,
    name: 'Empathy',
  },
];
