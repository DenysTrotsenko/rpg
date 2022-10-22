import {Obscurement} from './models';
import {ObscurementId} from './enums';

export const OBSCUREMENTS: Obscurement[] = [
  {
    id: ObscurementId.NO,
    name: 'No Obscurement',
    labels: {
      effect: 'No ambient penalties.',
      examples: 'Clear weather.'
    }
  },
  {
    id: ObscurementId.LIGHT,
    name: 'Light Obscurement',
    labels: {
      effect: 'Cannot use Extreme Distances.',
      examples: 'Mist, light rain or light snow.'
    }
  },
  {
    id: ObscurementId.MEDIUM,
    name: 'Medium Obscurement',
    labels: {
      effect: 'Cannot use Extreme or Long Distances.',
      examples: 'Fog, heavy rain or heavy snow.'
    }
  },
  {
    id: ObscurementId.HEAVY,
    name: 'Heavy Obscurement',
    labels: {
      effect: 'Cannot use Extreme, Long or Medium Distances.',
      examples: 'Sleet, smoke or blizzard.'
    }
  }
];
