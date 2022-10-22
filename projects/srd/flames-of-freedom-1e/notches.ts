import {Notch} from './models';
import {NotchId} from './enums';

export const NOTCHES: Notch[] = [
  {
    id: NotchId.LOW,
    name: 'Low'
  },
  {
    id: NotchId.MEDIUM,
    name: 'Medium'
  },
  {
    id: NotchId.HIGH,
    name: 'High'
  },
  {
    id: NotchId.UNIQUE,
    name: 'Unique'
  }
];
