import {Size} from './models';
import {SizeId} from './enums';

export const SIZES: Size[] = [
  {
    id: SizeId.SMALL,
    name: 'Small',
    mechanics: {
      FURY_DICE: 0
    }
  },
  {
    id: SizeId.NORMAL,
    name: 'Normal',
    mechanics: {
      FURY_DICE: 1
    }
  },
  {
    id: SizeId.LARGE,
    name: 'Large',
    mechanics: {
      FURY_DICE: 2
    }
  },
  {
    id: SizeId.HUGE,
    name: 'Huge',
    mechanics: {
      FURY_DICE: 3
    }
  }
];
