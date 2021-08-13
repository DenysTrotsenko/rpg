import {Attribute} from '../scion.models';
import {APPROACH_ID, ARENA_ID, ATTRIBUTE_ID} from '../scion.enums';

export const ATTRIBUTES: Attribute[] = [
  {
    id: ATTRIBUTE_ID.MIGHT,
    name: 'Might',
    description: '',
    approach: APPROACH_ID.FORCE,
    arena: ARENA_ID.PHYSICAL
  },
  {
    id: ATTRIBUTE_ID.DEXTERITY,
    name: 'Dexterity',
    description: '',
    approach: APPROACH_ID.FINESSE,
    arena: ARENA_ID.PHYSICAL
  },
  {
    id: ATTRIBUTE_ID.STAMINA,
    name: 'Stamina',
    description: '',
    approach: APPROACH_ID.RESILIENCE,
    arena: ARENA_ID.PHYSICAL
  },
  {
    id: ATTRIBUTE_ID.INTELLECT,
    name: 'Intellect',
    description: '',
    approach: APPROACH_ID.FORCE,
    arena: ARENA_ID.MENTAL
  },
  {
    id: ATTRIBUTE_ID.CUNNING,
    name: 'Cunning',
    description: '',
    approach: APPROACH_ID.FINESSE,
    arena: ARENA_ID.MENTAL
  },
  {
    id: ATTRIBUTE_ID.RESOLVE,
    name: 'Resolve',
    description: '',
    approach: APPROACH_ID.RESILIENCE,
    arena: ARENA_ID.MENTAL
  },
  {
    id: ATTRIBUTE_ID.PRESENCE,
    name: 'Presence',
    description: '',
    approach: APPROACH_ID.FORCE,
    arena: ARENA_ID.SOCIAL
  },
  {
    id: ATTRIBUTE_ID.MANIPULATION,
    name: 'Manipulation',
    description: '',
    approach: APPROACH_ID.FINESSE,
    arena: ARENA_ID.SOCIAL
  },
  {
    id: ATTRIBUTE_ID.COMPOSURE,
    name: 'Composure',
    description: '',
    approach: APPROACH_ID.RESILIENCE,
    arena: ARENA_ID.SOCIAL
  }
];
