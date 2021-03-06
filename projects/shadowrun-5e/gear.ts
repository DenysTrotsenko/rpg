import { BOOK_ID, GEAR_ID, GEAR_TYPE_ID } from './enums';
import {CharacterGear, Gear, GearType} from './models';

export const GEAR_TYPES: GearType[] = [
  {
    id: GEAR_TYPE_ID.CYBERDECK,
    name: 'Cyberdeck'
  },
  {
    id: GEAR_TYPE_ID.RCC,
    name: 'Rigger Command Console (RCC)'
  },
  {
    id: GEAR_TYPE_ID.FOCUS,
    name: 'Focus'
  },
];

export const GEAR: Gear[] = [
  {
    id: GEAR_ID.ERIKA_MCD_1,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Erika MCD-1',
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 3,
      cost: (item: CharacterGear): number => 49500,
    },
    labels: {
      description: ''
    },
    data: { attributes: [4, 3, 2, 1], programs: 1 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.MICRODECK_SUMMIT,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Microdeck Summit',
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 3,
      cost: (item: CharacterGear): number => 58000,
    },
    labels: {
      description: ''
    },
    data: { attributes: [4, 3, 3, 1], programs: 1 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.MICROTRONICA_AZTECA_200,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Microtronica Azteca 200',
    ratings: [2],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 110250,
    },
    labels: {
      description: ''
    },
    data: { attributes: [5, 4, 3, 2], programs: 2 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.HERMES_CHARIOT,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Hermes Chariot',
    ratings: [2],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 123000,
    },
    labels: {
      description: ''
    },
    data: { attributes: [5, 4, 4, 2], programs: 2 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.NOVATECH_NAVIGATOR,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Novatech Navigator',
    ratings: [3],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 205750,
    },
    labels: {
      description: ''
    },
    data: { attributes: [6, 5, 4, 3], programs: 3 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.RENRAKU_TSURUGI,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Renraku Tsurugi',
    ratings: [3],
    formulas: {
      availability: (item: CharacterGear): number => 9,
      cost: (item: CharacterGear): number => 214125,
    },
    labels: {
      description: ''
    },
    data: { attributes: [6, 5, 5, 3], programs: 3 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.SONY_CIY_720,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Sony CIY-720',
    ratings: [4],
    formulas: {
      availability: (item: CharacterGear): number => 12,
      cost: (item: CharacterGear): number => 345000,
    },
    labels: {
      description: ''
    },
    data: { attributes: [7, 6, 5, 4], programs: 4 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.SHIAWASE_CYBER_5,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Shiawase Cyber-5',
    ratings: [5],
    formulas: {
      availability: (item: CharacterGear): number => 15,
      cost: (item: CharacterGear): number => 549375,
    },
    labels: {
      description: ''
    },
    data: { attributes: [8, 7, 6, 5], programs: 5 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.FAIRLIGHT_EXCALIBUR,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.CYBERDECK,
    name: 'Fairlight Excalibur',
    ratings: [6],
    formulas: {
      availability: (item: CharacterGear): number => 18,
      cost: (item: CharacterGear): number => 823250,
    },
    labels: {
      description: ''
    },
    data: { attributes: [9, 8, 7, 6], programs: 6 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.SCRATCH_BUILT_JUNK,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Scratch-Built Junk',
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 1400,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 3, firewall: 2 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.RADIO_SHACK_REMOTE_CONTROLLER,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Radio Shack Remote Controller',
    ratings: [2],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 8000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 3, firewall: 3 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.ESSY_MOTORS_DRONEMASTER,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Essy Motors DroneMaster',
    ratings: [3],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 16000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 4, firewall: 4 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.COMPUFORCE_TASKMASTER,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'CompuForce TaskMaster',
    ratings: [4],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 32000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 5, firewall: 4 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.MAERSK_SPIDER,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Maersk Spider',
    ratings: [4],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 34000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 4, firewall: 5 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.MASER_INDUSTRIAL_ELECTRONICS,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Maser Industrial Electronics',
    ratings: [5],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 64000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 3, firewall: 4 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.VULCAN_LIEGELORD,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Vulcan Liegelord',
    ratings: [5],
    formulas: {
      availability: (item: CharacterGear): number => 10,
      cost: (item: CharacterGear): number => 66000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 5, firewall: 6 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.PROTEUS_POSEIDON,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Proteus Poseidon',
    ratings: [5],
    formulas: {
      availability: (item: CharacterGear): number => 12,
      cost: (item: CharacterGear): number => 68000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 5, firewall: 6 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.LONE_STAR_REMOTE_COMMANDER,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Lone Star Remote Commander',
    ratings: [6],
    formulas: {
      availability: (item: CharacterGear): number => 14,
      cost: (item: CharacterGear): number => 75000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 6, firewall: 5 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.MCT_DRONE_WEB,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'MCT Drone Web',
    ratings: [6],
    formulas: {
      availability: (item: CharacterGear): number => 16,
      cost: (item: CharacterGear): number => 95000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 7, firewall: 6 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.TRIOX_UBERMENSCH,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.RCC,
    name: 'Triox UberMensch',
    ratings: [6],
    formulas: {
      availability: (item: CharacterGear): number => 18,
      cost: (item: CharacterGear): number => 140000,
    },
    labels: {
      description: ''
    },
    data: { data_processing: 8, firewall: 7 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.ENCHANTING_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    type: GEAR_TYPE_ID.FOCUS,
    name: 'Enchanting Focus',
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 5000,
    },
    labels: {
      description: '',
      availability: 'Force x 3',
      cost: 'Force x 5000',
    },
    data: { data_processing: 8, firewall: 7 },
    restricted: true,
    forbidden: false,
    specialty: true,
  },
  {
    id: GEAR_ID.METAMAGIC_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Metamagic Focus',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 9000
    },
    labels: {
      description: '',
      availability: 'Force x 3',
      cost: 'Force x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.POWER_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Power Focus',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 4,
      cost: (item: CharacterGear): number => item.rating * 18000
    },
    labels: {
      description: 'Power foci live up to their name. They are very powerful foci that temporarily increase your effective Magic rating. That means they add to your Sorcery, Conjuring, and Enchanting dice pools, along with any other test where Magic is involved. Power foci can take any form, but for some reason, rings and amulets are quite popular.',
      availability: 'Force x 4',
      cost: 'Force x 18000',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.QI_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Qi Focus',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 3000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 3000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.SPELL_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Focus',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 4000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 4000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.SPIRIT_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spirit Focus',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 4000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 4000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.WEAPON_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Weapon Focus',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 4,
      cost: (item: CharacterGear): number => item.rating * 7000
    },
    labels: {
      description: '',
      availability: 'Rating x 4',
      cost: 'Rating x 7000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.ENCHANTING_FOCUS_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Focus Formula (Enchanting Focus)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 1250
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.METAMAGIC_FOCUS_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Focus Formula (Metamagic Focus)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 2250
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.POWER_FOCUS_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Focus Formula (Power Focus)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 4,
      cost: (item: CharacterGear): number => item.rating * 4500
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.QI_FOCUS_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Focus Formula (Qi Focus)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 750
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.SPELL_FOCUS_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Focus Formula (Spell Focus)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 1000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.SPIRIT_FOCUS_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Focus Formula (Spirit Focus)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 1000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.WEAPON_FOCUS_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Focus Formula (Weapon Focus)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 4,
      cost: (item: CharacterGear): number => item.rating * 1750
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.COMBAT_SPELL_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Formula (Combat Spell)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 2000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.DETECTION_SPELL_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Formula (Detection Spell)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 500
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.HEALTH_SPELL_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Formula (Health Spell)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 500
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.ILLUSION_SPELL_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Formula (Illusion Spell)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 1000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.MANIPULATION_SPELL_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Formula (Manipulation Spell)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 1500
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.COMBAT_SPELL_FORMULA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Spell Formula (Combat Spell)',
    type: GEAR_TYPE_ID.FOCUS,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 3,
      cost: (item: CharacterGear): number => item.rating * 9000
    },
    labels: {
      description: '',
      availability: 'Rating x 3',
      cost: 'Rating x 9000',
    },
    restricted: true,
    forbidden: false,
    specialty: true
  },
  {
    id: GEAR_ID.MAGICAL_LODGE_MATERIALS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Magical Lodge Materials',
    type: GEAR_TYPE_ID.MAGIC_SUPPLIES,
    ratings: [1, 12],
    formulas: {
      availability: (item: CharacterGear): number => item.rating * 2,
      cost: (item: CharacterGear): number => item.rating * 500
    },
    labels: {
      description: '',
      availability: 'Force x 2',
      cost: 'Force x 500',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.REAGENTS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Reagents',
    type: GEAR_TYPE_ID.MAGIC_SUPPLIES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 20
    },
    labels: {
      description: '',
      availability: '-',
      cost: '20',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.CS_TEAR_GAS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'CS / Tear Gas',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 20
    },
    labels: {
      description: '',
      availability: '4R',
      cost: '20',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.GAMMA_SCOPOLAMINE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Gamma-Scopolamine',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 14,
      cost: (item: CharacterGear): number => 200
    },
    labels: {
      description: '',
      availability: '14F',
      cost: '200',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.NARCOJET,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Narcojet',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 50
    },
    labels: {
      description: '',
      availability: '8R',
      cost: '50',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.NAUSEA_GAS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Nausea Gas',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 25
    },
    labels: {
      description: '',
      availability: '6R',
      cost: '25',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.NEURO_STUN_VIII,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Neuro-Stun VIII',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 12,
      cost: (item: CharacterGear): number => 60
    },
    labels: {
      description: '',
      availability: '12',
      cost: '60'
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.NEURO_STUN_IX,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Neuro-Stun IX',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 13,
      cost: (item: CharacterGear): number => 60
    },
    labels: {
      description: '',
      availability: '13R',
      cost: '60'
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.NEURO_STUN_X,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Neuro-Stun X',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 14,
      cost: (item: CharacterGear): number => 100
    },
    labels: {
      description: '',
      availability: '14R',
      cost: '100'
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.PEPPER_PUNCH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Pepper Punch',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 5
    },
    labels: {
      description: '',
      availability: '-',
      cost: '5'
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.SEVEN_7,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Seven 7',
    type: GEAR_TYPE_ID.TOXIN,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 20,
      cost: (item: CharacterGear): number => 1000
    },
    labels: {
      description: '',
      availability: '20F',
      cost: '1000'
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.BLISS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Bliss',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 3,
      cost: (item: CharacterGear): number => 15
    },
    labels: {
      description: '',
      availability: '3F',
      cost: '15',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.CRAM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Cram',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 10
    },
    labels: {
      description: '',
      availability: '2R',
      cost: '10',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.DEEPWEED,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Deepweed',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 400
    },
    labels: {
      description: '',
      availability: '8F',
      cost: '400',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.JAZZ,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Jazz',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 75
    },
    labels: {
      description: '',
      availability: '2R',
      cost: '75',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.KAMIKAZE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Kamikaze',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 100
    },
    labels: {
      description: '',
      availability: '4R',
      cost: '100',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.LONG_HAUL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Long Haul',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 50
    },
    labels: {
      description: '',
      availability: '-',
      cost: '50',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.NITRO,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Nitro',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 50
    },
    labels: {
      description: '',
      availability: '2R',
      cost: '50',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.NOVACOKE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Novacoke',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 10
    },
    labels: {
      description: '',
      availability: '2R',
      cost: '10',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.PSYCHE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Psyche',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 200
    },
    labels: {
      description: '',
      availability: '-',
      cost: '200',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.ZEN,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Zen',
    type: GEAR_TYPE_ID.DRUG,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 5
    },
    labels: {
      description: '',
      availability: '4R',
      cost: '5',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.DREAMCHIP,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Dreamchip',
    type: GEAR_TYPE_ID.BTL,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 20
    },
    labels: {
      description: 'Dreamchips are standard simsense recordings modified to produce BTL output. These might be studio-produced sims that are doctored up, or street recordings that offer a personal, intense glimpse into someone???s life. Popular themes are heroic fantasies, recorded crimes, and pornography, with hardcore violence and snuff chips serving the most jaded appetites.',
      availability: '4F',
      cost: '20',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.MOODCHIP,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Reagents',
    type: GEAR_TYPE_ID.BTL,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 50
    },
    labels: {
      description: '',
      availability: '4F',
      cost: '50',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.PERSONAFIX,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Personafix',
    type: GEAR_TYPE_ID.BTL,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 200
    },
    labels: {
      description: '',
      availability: '4F',
      cost: '200',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.TRIPCHIP,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Tripship',
    type: GEAR_TYPE_ID.BTL,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 100
    },
    labels: {
      description: 'Tripchips are like moodchips, primarily producing sensory output, flooding the user with interesting and unusual sensations. These can be simple effects, or they can be advanced sensations such as simulating being underwater. The latest craze is deliberately induced synaesthesia with jacked-up sensory levels and the RAS override disabled, allowing users to experience their surroundings in an entirely new way.',
      availability: '4F',
      cost: '100',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.COMBAT_AXE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Combat Axe',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    data: { accuracy: 4, reach: 2, ap: -4 },
    formulas: {
      availability: (item: CharacterGear): number => 12,
      cost: (item: CharacterGear): number => 4000
    },
    labels: {
      description: '',
      availability: '12R',
      cost: '4000',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.COMBAT_KNIFE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Combat Knife',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 300
    },
    labels: {
      description: '',
      availability: '4',
      cost: '300',
    },
    data: { accuracy: 6, reach: 0, ap: -3 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.FOREARM_SNAP_BLADES,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Forearm Snap Blade',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 7,
      cost: (item: CharacterGear): number => 200
    },
    labels: {
      description: '',
      availability: '7R',
      cost: '200',
    },
    data: { accuracy: 4, reach: 0, ap: -2 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.KATANA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Katana',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 9,
      cost: (item: CharacterGear): number => 1000
    },
    labels: {
      description: '',
      availability: '9R',
      cost: '1000',
    },
    data: { accuracy: 7, reach: 1, ap: -3 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.KNIFE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Knife',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 10
    },
    labels: {
      description: '',
      availability: '-',
      cost: '10',
    },
    data: { accuracy: 5, reach: 0, ap: -1 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.POLEARM,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Polearm',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 1000
    },
    labels: {
      description: '',
      availability: '6R',
      cost: '1000',
    },
    data: { accuracy: 5, reach: 3, ap: -2 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.SURVIVAL_KNIFE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Survival Knife',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 100
    },
    labels: {
      description: '',
      availability: '-',
      cost: '100',
    },
    data: { accuracy: 5, reach: 0, ap: -1 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.SWORD,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Sword',
    type: GEAR_TYPE_ID.BLADES,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 5,
      cost: (item: CharacterGear): number => 500
    },
    labels: {
      description: '',
      availability: '5R',
      cost: '500',
    },
    data: { accuracy: 6, reach: 1, ap: -2 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.CLUB,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Club',
    type: GEAR_TYPE_ID.CLUBS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 30
    },
    labels: {
      description: '',
      availability: '-',
      cost: '30',
    },
    data: { accuracy: 4, reach: 1, ap: 0 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.EXTENDABLE_BATON,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Extendable Baton',
    type: GEAR_TYPE_ID.CLUBS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 100
    },
    labels: {
      description: '',
      availability: '4',
      cost: '100',
    },
    data: { accuracy: 5, reach: 1, ap: 0 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.SAP,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Sap',
    type: GEAR_TYPE_ID.CLUBS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 30
    },
    labels: {
      description: '',
      availability: '2',
      cost: '30',
    },
    data: { accuracy: 5, reach: 0, ap: 0 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.STAFF,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Staff',
    type: GEAR_TYPE_ID.CLUBS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 3,
      cost: (item: CharacterGear): number => 100
    },
    labels: {
      description: '',
      availability: '3',
      cost: '100',
    },
    data: { accuracy: 6, reach: 2, ap: 0 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.STUN_BATON,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Combat',
    type: GEAR_TYPE_ID.CLUBS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 750
    },
    labels: {
      description: '',
      availability: '6',
      cost: '750',
    },
    data: { accuracy: 4, reach: 1, ap: -5 },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.TELESCOPING_STAFF,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Telescoping Staff',
    type: GEAR_TYPE_ID.CLUBS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 350
    },
    labels: {
      description: '',
      availability: '4',
      cost: '350',
    },
    data: { accuracy: 4, reach: 2, ap: 0 },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.KNUCKS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Knucks',
    type: GEAR_TYPE_ID.OTHER_MELEE,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 100
    },
    labels: {
      description: '',
      availability: '2',
      cost: '100',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.MONOFILAMENT_WHIP,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Monofilament Whip',
    type: GEAR_TYPE_ID.OTHER_MELEE,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 12,
      cost: (item: CharacterGear): number => 10000
    },
    labels: {
      description: '',
      availability: '12',
      cost: '10000',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.SHOCK_GLOVES,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Shock Gloves',
    type: GEAR_TYPE_ID.OTHER_MELEE,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 550
    },
    labels: {
      description: '',
      availability: '6',
      cost: '550',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.BOW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Bow',
    type: GEAR_TYPE_ID.BOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => item.rating,
      cost: (item: CharacterGear): number => item.rating * 100
    },
    labels: {
      description: '',
      availability: 'Rating',
      cost: 'Rating x 100',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.ARROW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Arrow',
    type: GEAR_TYPE_ID.BOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => item.rating,
      cost: (item: CharacterGear): number => item.rating * 2
    },
    labels: {
      description: '',
      availability: 'Rating',
      cost: 'Rating x 2',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.INJECTION_ARROW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Injection Arrow',
    type: GEAR_TYPE_ID.BOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => item.rating + 2,
      cost: (item: CharacterGear): number => item.rating * 20
    },
    labels: {
      description: '',
      availability: '(Rating + 2)',
      cost: 'Rating x 20',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.LIGHT_CROSSBOW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Light Crossbow',
    type: GEAR_TYPE_ID.CROSSBOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 300
    },
    labels: {
      description: '',
      availability: '2',
      cost: '300',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.MEDIUM_CROSSBOW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Medium Crossbow',
    type: GEAR_TYPE_ID.CROSSBOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 500
    },
    labels: {
      description: '',
      availability: '4',
      cost: '500',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.HEAVY_CROSSBOW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Heavy Crossbow',
    type: GEAR_TYPE_ID.CROSSBOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 1000
    },
    labels: {
      description: '',
      availability: '8',
      cost: '1000',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.BOLT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Bolt',
    type: GEAR_TYPE_ID.CROSSBOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 2,
      cost: (item: CharacterGear): number => 5
    },
    labels: {
      description: '',
      availability: '2',
      cost: '5',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.INJECTION_BOLT,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Injection Bolt',
    type: GEAR_TYPE_ID.CROSSBOWS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 8,
      cost: (item: CharacterGear): number => 50
    },
    labels: {
      description: '',
      availability: '4',
      cost: '300',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.DEFIANCE_EX_SHOCKER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Defiance EX Shocker',
    type: GEAR_TYPE_ID.TASERS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 250
    },
    labels: {
      description: '',
      availability: '-',
      cost: '250',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.YAMAHA_PULSAR,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Yamaha Pulsar',
    type: GEAR_TYPE_ID.TASERS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 0,
      cost: (item: CharacterGear): number => 180
    },
    labels: {
      description: '',
      availability: '-',
      cost: '180',
    },
    restricted: false,
    forbidden: false
  },
  {
    id: GEAR_ID.FICHETTI_TIFFANI_NEEDLER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Fichettin Tiffani Needler',
    type: GEAR_TYPE_ID.HOLD_OUTS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 5,
      cost: (item: CharacterGear): number => 1000
    },
    labels: {
      description: '',
      availability: '5',
      cost: '1000',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.STREETLINE_SPECIAL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Streetline Special',
    type: GEAR_TYPE_ID.HOLD_OUTS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 120
    },
    labels: {
      description: '',
      availability: '4',
      cost: '120',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.WALTHER_PALM_PISTOL,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Walther Palm Pistol',
    type: GEAR_TYPE_ID.HOLD_OUTS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 180
    },
    labels: {
      description: '',
      availability: '4',
      cost: '180',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.ARES_LIGHT_FIRE_75,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Ares Light Fire 75',
    type: GEAR_TYPE_ID.LIGHT_PISTOLS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 6,
      cost: (item: CharacterGear): number => 1250
    },
    labels: {
      description: '',
      availability: '6',
      cost: '1250',
    },
    restricted: false,
    forbidden: true
  },
  {
    id: GEAR_ID.ARES_LIGHT_FIRE_70,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Ares Light Fire 70',
    type: GEAR_TYPE_ID.LIGHT_PISTOLS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 3,
      cost: (item: CharacterGear): number => 200
    },
    labels: {
      description: '',
      availability: '3',
      cost: '200',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.BERETTA_201T,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Beretta 201T',
    type: GEAR_TYPE_ID.LIGHT_PISTOLS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 7,
      cost: (item: CharacterGear): number => 210
    },
    labels: {
      description: '',
      availability: '7',
      cost: '210',
    },
    restricted: true,
    forbidden: false
  },
  {
    id: GEAR_ID.COLT_AMERICA_L36,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Colt America L36',
    type: GEAR_TYPE_ID.LIGHT_PISTOLS,
    ratings: [0],
    formulas: {
      availability: (item: CharacterGear): number => 4,
      cost: (item: CharacterGear): number => 320
    },
    labels: {
      description: '',
      availability: '4',
      cost: '320',
    },
    restricted: true,
    forbidden: false
  },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
  // {
  //   id: GEAR_ID.COMBAT_KNIFE,
  //   book: BOOK_ID.CORE_RULEBOOK,
  //   name: 'Combat',
  //   type: GEAR_TYPE_ID.BLADES,
  //   ratings: [0],
  //   formulas: {
  //     availability: (item: CharacterGear): number => 4,
  //     cost: (item: CharacterGear): number => 300
  //   },
  //   labels: {
  //     description: '',
  //     availability: '4',
  //     cost: '300',
  //   },
  //   restricted: false,
  //   forbidden: false
  // },
];
