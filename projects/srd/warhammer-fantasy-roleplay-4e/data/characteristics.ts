import { CharacteristicId } from '@wfrp-4e/models/enums';
import { Characteristic } from '@wfrp-4e/models/common';

export const CHARACTERISTICS: Characteristic[] = [
  {
    id: CharacteristicId.WEAPON_SKILL,
    name: 'Weapon Skill',
    labels: {
      abbreviation: 'WS',
    },
  },
  {
    id: CharacteristicId.BALLISTIC_SKILL,
    name: 'Ballistic Skill',
    labels: {
      abbreviation: 'BS',
    },
  },
  {
    id: CharacteristicId.STRENGTH,
    name: 'Strength',
    labels: {
      abbreviation: 'S',
    },
  },
  {
    id: CharacteristicId.TOUGHNESS,
    name: 'Toughness',
    labels: {
      abbreviation: 'T',
    },
  },
  {
    id: CharacteristicId.INITIATIVE,
    name: 'Initiative',
    labels: {
      abbreviation: 'I',
    },
  },
  {
    id: CharacteristicId.AGILITY,
    name: 'Agility',
    labels: {
      abbreviation: 'Ag',
    },
  },
  {
    id: CharacteristicId.DEXTERITY,
    name: 'Dexterity',
    labels: {
      abbreviation: 'Dex',
    },
  },
  {
    id: CharacteristicId.INTELLIGENCE,
    name: 'Intelligence',
    labels: {
      abbreviation: 'Int',
    },
  },
  {
    id: CharacteristicId.WILLPOWER,
    name: 'Willpower',
    labels: {
      abbreviation: 'WP',
    },
  },
  {
    id: CharacteristicId.FELLOWSHIP,
    name: 'Fellowship',
    labels: {
      abbreviation: 'Fel',
    },
  },
];
