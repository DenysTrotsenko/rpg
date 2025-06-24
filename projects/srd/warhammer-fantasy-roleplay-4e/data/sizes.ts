import { Size } from '@wfrp-4e/models/common';
import { SizeId } from '@wfrp-4e/models/enums';
import { getToughnessBonus } from '@wfrp-4e/models/character';

export const SIZES: Size[] = [
  {
    id: SizeId.TINY,
    name: 'Tiny',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.LITTLE,
    name: 'Little',
    system: {
      MAX_WOUNDS_FN: getToughnessBonus
    }
  },
  {
    id: SizeId.SMALL,
    name: 'Small',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.AVERAGE,
    name: 'Average',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.LARGE,
    name: 'Large',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.ENORMOUS,
    name: 'Enormous',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.MONSTROUS,
    name: 'Monstrous',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.TINY,
    name: 'Tiny',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.TINY,
    name: 'Tiny',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
  {
    id: SizeId.TINY,
    name: 'Tiny',
    system: {
      MAX_WOUNDS_FN: () => 1
    }
  },
];
