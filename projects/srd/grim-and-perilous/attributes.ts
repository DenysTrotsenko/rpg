import {Attribute} from './models';
import {AttributeId} from './enums';

/* tslint:disable:max-line-length */
export const ATTRIBUTES: Attribute[] = [
  {
    id: AttributeId.COMBAT,
    name: 'Combat',
    labels: {
      description: 'This is your ability to use ranged and melee weapons.',
      bonus: 'Combat Bonus [CB] affects Total Damage with melee and ranged weapons.'
    }
  },
  {
    id: AttributeId.BRAWN,
    name: 'Brawn',
    labels: {
      description: 'This is your physical prowess, durability and overall endurance.',
      bonus: 'Brawn Bonus [BB] affects Damage Threshold and Encumbrance Limit.'
    }
  },
  {
    id: AttributeId.AGILITY,
    name: 'Agility',
    labels: {
      description: 'This is your speed, nimbleness and physical readiness.',
      bonus: 'Agility Bonus [AB] affects Movement and miscellaneous modifiers.'
    }
  },
  {
    id: AttributeId.PERCEPTION,
    name: 'Perception',
    labels: {
      description: 'This is for your senses and ability to react.',
      bonus: 'Perception Bonus [PB] affects Initiative and ranged weapon Distance.'
    }
  },
  {
    id: AttributeId.INTELLIGENCE,
    name: 'Intelligence',
    labels: {
      description: 'This is your ability to learn and memorize.',
      bonus: 'Intelligence Bonus [IB] affects the maximum number of Spells learned.'
    }
  },
  {
    id: AttributeId.WILLPOWER,
    name: 'Willpower',
    labels: {
      description: 'This is your mental wherewithal and force for magic.',
      bonus: 'Willpower Bonus [WB] affects Peril Threshold and modifiers for Spells.'
    }
  },
  {
    id: AttributeId.FELLOWSHIP,
    name: 'Fellowship',
    labels: {
      description: 'This is your charisma, likability and social savvy.',
      bonus: 'Fellowship Bonus [FB] affects how many people you sway and languages.'
    }
  }
];
