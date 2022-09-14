import {InjuryTypeId} from './enums';
import {InjuryType} from './models';

export const INJURY_TYPES: InjuryType[] = [
  {
    id: InjuryTypeId.MODERATE,
    name: 'Moderate'
  },
  {
    id: InjuryTypeId.SERIOUS,
    name: 'Serious'
  },
  {
    id: InjuryTypeId.GRIEVOUS,
    name: 'Grievous'
  },
  {
    id: InjuryTypeId.PERMANENT,
    name: 'Permanent'
  },
];
