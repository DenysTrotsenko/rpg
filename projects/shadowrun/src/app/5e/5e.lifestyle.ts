import { BOOK_ID, LIFESTYLE_ID, LIFESTYLE_OPTION_ID } from './5e.enums';
import {Lifestyle, LifestyleOption} from './5e.models';

export const LIFESTYLES: Lifestyle[] = [
  {
    id: LIFESTYLE_ID.STREETS,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Streets',
    cost: 0
  },
  {
    id: LIFESTYLE_ID.SQUATTER,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Squatter',
    cost: 500
  },
  {
    id: LIFESTYLE_ID.LOW,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Low',
    cost: 2000
  },
  {
    id: LIFESTYLE_ID.MIDDLE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Middle',
    cost: 5000
  },
  {
    id: LIFESTYLE_ID.HIGH,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'High',
    cost: 10000
  },
  {
    id: LIFESTYLE_ID.LUXURY,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Luxury',
    cost: 100000
  }
];

export const LIFESTYLE_OPTIONS: LifestyleOption[] = [
  {
    id: LIFESTYLE_OPTION_ID.SPECIAL_WORK_AREA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Special Work Area',
    cost: (cost: number): number => 1000
  },
  {
    id: LIFESTYLE_OPTION_ID.EXTRA_SECURE,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Extra Secure',
    cost: (cost: number): number => cost * 0.2
  },
  {
    id: LIFESTYLE_OPTION_ID.OBSCURE_DIFFICULT_TO_FIND,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Obscure / Difficult to Find',
    cost: (cost: number): number => cost * 0.1
  },
  {
    id: LIFESTYLE_OPTION_ID.CRAMPED,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Cramped',
    cost: (cost: number): number => - cost * 0.1
  },
  {
    id: LIFESTYLE_OPTION_ID.DANGEROUS_AREA,
    book: BOOK_ID.CORE_RULEBOOK,
    name: 'Dangerous Area',
    cost: (cost: number): number => - cost * 0.2
  },
];
