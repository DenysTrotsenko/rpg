import { Origin } from '../models/common';

export const ORIGINS: Origin[] = [
  {
    id: 'org_agri_world',
    name: 'Agri World',
    labels: {
      example: 'Example Macharian Agri Worlds: Crultus, Harjus',
      description: 'You hail from an Agri World, a planet dedicated to the sole purpose of producing food to satiate the teeming masses of the Imperium. Few industrialised planets have the resources to maintain their populace and require the output of Agri Worlds to fulfil their duty to the Emperor. Vast swaths of land are dedicated to the production of the most valuable crops or livestock, and millions of litres of potable water are extracted daily.\nA heavy tithe is expected of every Agri World. Some meet these onerous requirements by means of technological wonders, their secrets long forgotten, though most rely on the backbreaking toil of their inhabitants. As an Agri Worlder, your early life was likely dedicated to preparation for some form of farming. Most agri worlders are physically strong, tough workers used to unrelenting toil. Others are dextrous, dedicated to delicate if monotonous tasks, while others still have minds for the detailed organisation required to optimise a planet of production and are sought out by the Administratum.',
      modifications: '• You gain +5 Strength and +5 to either Toughness, Agility, or Willpower.\n• You gain a Shoddy Entrenching Tool.'
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_str'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_tgh', 'chr_ag', 'chr_wil'] }
    ]
  },
  {
    id: 'org_feudal_world',
    name: 'Feudal World',
    labels: {
      description: '',
      example: '',
      modifications: ''
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_ws'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_str', 'chr_wil', 'chr_fel'] }
    ]
  },
  {
    id: 'org_feral_world',
    name: 'Feral World',
    labels: {
      description: '',
      example: '',
      modifications: ''
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_tgh'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_ws', 'chr_str', 'chr_per'] }
    ]
  },
  {
    id: 'org_forge_world',
    name: 'Forge World',
    labels: {
      description: '',
      example: '',
      modifications: ''
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_int'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_bs', 'chr_tgh', 'chr_ag'] }
    ]
  },
  {
    id: 'org_hive_world',
    name: 'Hive World',
    labels: {
      description: '',
      example: '',
      modifications: ''
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_ag'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_bs', 'chr_per', 'chr_fel'] }
    ]
  },
  {
    id: 'org_shrine_world',
    name: 'Shrine World',
    labels: {
      description: '',
      example: '',
      modifications: ''
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_wil'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_int', 'chr_per', 'chr_fel'] }
    ]
  },
  {
    id: 'org_schola_progenium',
    name: 'Schola Progenium',
    labels: {
      description: '',
      example: '',
      modifications: ''
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_fel'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_ws', 'chr_bs', 'chr_tgh'] }
    ]
  },
  {
    id: 'org_voidborn',
    name: 'Voidborn',
    labels: {
      description: '',
      example: '',
      modifications: ''
    },
    modifications: [
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_per'] },
      { type: 'ADD_CHARACTERISTIC', value: 5, options: ['chr_ag', 'chr_int', 'chr_wil'] }
    ]
  }
];
