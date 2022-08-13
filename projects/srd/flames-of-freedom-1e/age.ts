import {AgeId} from './enums';
import {Age} from './models';

export const AGES: Age[] = [
  {
    id: AgeId.YOUNG,
    name: 'Young'
  },
  {
    id: AgeId.ADULT,
    name: 'Adult'
  },
  {
    id: AgeId.MATURE,
    name: 'Mature'
  },
  {
    id: AgeId.AGING,
    name: 'Aging'
  },
  {
    id: AgeId.ELDERLY,
    name: 'Elderly'
  }
];
