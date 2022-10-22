import {Lighting} from './models';
import {LightingId} from './enums';

export const LIGHTINGS: Lighting[] = [
  {
    id: LightingId.PERFECT_LIGHT,
    name: 'Perfect Light',
    labels: {
      effect: 'No ambient penalties.',
      examples: 'Daytime, in a direct source of light.'
    }
  },
  {
    id: LightingId.FLEETING_SHADOWS,
    name: 'Fleeting Shadows',
    labels: {
      effect: 'Must flip the results to fail vision-related Skill Tests; cannot give or gain the benefits of Assist Dice.',
      examples: 'Dawn, dusk or clear night skies.'
    }
  },
  {
    id: LightingId.TOTAL_DARKNESS,
    name: 'Total Darkness',
    labels: {
      effect: 'Cannot be targeted unless Engaged; line of sight is broken.',
      examples: 'Blinding light, moonless night, pitch-black.'
    }
  }
];
