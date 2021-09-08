import {ATTRIBUTE_ID, BOOK_ID, GEAR_ID, GEAR_TYPE_ID} from './5e.enums';
import {Gear} from './5e.models';

export const GEAR: Gear[] = [
  {
    id: GEAR_ID.CYBERDECK,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Cyberdeck',
    type: GEAR_TYPE_ID.CYBERDECK,
    ratings: [
      {
        name: 'Erika MCD-1',
        rating: 1,
        availability: 3,
        restricted: true,
        forbidden: false,
        cost: 49500,
        data: { attributes: [4, 3, 2, 1], programs: 1 }
      },
      {
        name: 'Microdeck Summit',
        rating: 1,
        availability: 3,
        restricted: true,
        forbidden: false,
        cost: 58000,
        data: { attributes: [4, 3, 3, 1], programs: 1 }
      },
      {
        name: 'Microtronica Azteca 200',
        rating: 2,
        availability: 6,
        restricted: true,
        forbidden: false,
        cost: 110250,
        data: { attributes: [5, 4, 3, 2], programs: 2 }
      },
      {
        name: 'Hermes Chariot',
        rating: 2,
        availability: 6,
        restricted: true,
        forbidden: false,
        cost: 123000,
        data: { attributes: [5, 4, 4, 2], programs: 2 }
      },
      {
        name: 'Novatech Navigator',
        rating: 3,
        availability: 6,
        restricted: true,
        forbidden: false,
        cost: 205750,
        data: { attributes: [6, 5, 4, 3], programs: 3 }
      },
      {
        name: 'Renraku Tsurugi',
        rating: 3, availability: 9,
        restricted: true,
        forbidden: false,
        cost: 214125,
        data: { attributes: [6, 5, 5, 3], programs: 3 }
      },
      {
        name: 'Sony CIY-720',
        rating: 4,
        availability: 12,
        restricted: true,
        forbidden: false,
        cost: 345000,
        data: { attributes: [7, 6, 5, 4], programs: 4 }
      },
      {
        name: 'Shiawase Cyber-5',
        rating: 5,
        availability: 15,
        restricted: true,
        forbidden: false,
        cost: 549375,
        data: { attributes: [8, 7, 6, 5], programs: 5 }
      },
      {
        name: 'Fairlight Excalibur',
        rating: 6,
        availability: 18,
        restricted: true,
        forbidden: false,
        cost: 823250,
        data: { attributes: [9, 8, 7, 6], programs: 6 }
      }
    ],
    restricted: true,
    forbidden: false,
    specialty: false,
    quantity: 1
  },
  {
    id: GEAR_ID.RCC,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Rigger Command Console (RCC)',
    type: GEAR_TYPE_ID.RCC,
    ratings: [
      {
        name: 'Scratch-Built Junk',
        rating: 1,
        availability: 2,
        restricted: true,
        forbidden: false,
        cost: 1400,
        data: { data_processing: 3, firewall: 2 }
      },
      {
        name: 'Radio Shack Remote Controller',
        rating: 2,
        availability: 6,
        restricted: true,
        forbidden: false,
        cost: 8000,
        data: { data_processing: 3, firewall: 3 }
      },
      {
        name: 'Essy Motors DroneMaster',
        rating: 3,
        availability: 6,
        restricted: true,
        forbidden: false,
        cost: 16000,
        data: { data_processing: 4, firewall: 4 }
      },
      {
        name: 'CompuForce TaskMaster',
        rating: 4,
        availability: 8,
        restricted: true,
        forbidden: false,
        cost: 32000,
        data: { data_processing: 5, firewall: 4 }
      },
      {
        name: 'Maersk Spider',
        rating: 4,
        availability: 8,
        restricted: true,
        forbidden: false,
        cost: 34000,
        data: { data_processing: 4, firewall: 5 }
      },
      {
        name: 'Maser Industrial Electronics',
        rating: 5,
        availability: 8,
        restricted: true,
        forbidden: false,
        cost: 64000,
        data: { data_processing: 3, firewall: 4 }
      },
      {
        name: 'Vulcan Liegelord',
        rating: 5,
        availability: 10,
        restricted: true,
        forbidden: false,
        cost: 66000,
        data: { data_processing: 5, firewall: 6 }
      },
      {
        name: 'Proteus Poseidon',
        rating: 5,
        availability: 12,
        restricted: true,
        forbidden: false,
        cost: 68000,
        data: { data_processing: 5, firewall: 6 }
      },
      {
        name: 'Lone Star Remote Commander',
        rating: 6,
        availability: 14,
        restricted: true,
        forbidden: false,
        cost: 75000,
        data: { data_processing: 6, firewall: 5 }
      },
      {
        name: 'MCT Drone Web',
        rating: 6,
        availability: 16,
        restricted: true,
        forbidden: false,
        cost: 95000,
        data: { data_processing: 7, firewall: 6 }
      },
      {
        name: 'Triox UberMensch',
        rating: 6,
        availability: 18,
        restricted: true,
        forbidden: false,
        cost: 140000,
        data: { data_processing: 8, firewall: 7 }
      }
    ],
    restricted: true,
    forbidden: false,
    specialty: false,
    quantity: 1
  },
  {
    id: GEAR_ID.ENCHANTING_FOCUS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Enchanting Focus',
    type: GEAR_TYPE_ID.FOCI,
    ratings: [],
    formulas: {
      availability: (rating: number): number => rating * 3,
      cost: (rating: number): number => rating * 5000,
    },
    restricted: true,
    forbidden: false,
    specialty: true,
    quantity: 1
  }
];

// export const GEAR = [];
// export const GEAR = [];
// export const GEAR = [];
