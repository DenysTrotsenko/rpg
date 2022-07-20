import {Augmentation, AugmentationGrade} from './models';
import {AUGMENTATION_GRADE_ID} from './enums';

export const AUGMENTATION_GRADES: AugmentationGrade[] = [
  {
    id: AUGMENTATION_GRADE_ID.STANDARD,
    name: 'Standard',
    formulas: {
      availability: (availability: number) => availability,
      cost: (cost: number) => cost,
      essence: (essence: number) => essence,
    },
    labels: {
      availability: '-',
      cost: 'x 1',
      essence: 'x 1'
    }
  },
  {
    id: AUGMENTATION_GRADE_ID.ALPHAWARE,
    name: 'Alphaware',
    formulas: {
      availability: (availability: number) => availability + 2,
      cost: (cost: number) => cost * 1.2,
      essence: (essence: number) => essence * 0.8,
    },
    labels: {
      availability: '+2',
      cost: 'x 1.2',
      essence: 'x 0.8'
    }
  },
  {
    id: AUGMENTATION_GRADE_ID.BETAWARE,
    name: 'Betaware',
    formulas: {
      availability: (availability: number) => availability + 4,
      cost: (cost: number) => cost * 1.5,
      essence: (essence: number) => essence * 0.7,
    },
    labels: {
      availability: '+4',
      cost: 'x 1.5',
      essence: 'x 0.7'
    }
  },
  {
    id: AUGMENTATION_GRADE_ID.DELTAWARE,
    name: 'Deltaware',
    formulas: {
      availability: (availability: number) => availability + 8,
      cost: (cost: number) => cost * 2.5,
      essence: (essence: number) => essence * 0.5,
    },
    labels: {
      availability: '+8',
      cost: 'x 2.5',
      essence: 'x 0.5'
    }
  },
  {
    id: AUGMENTATION_GRADE_ID.USED,
    name: 'Used',
    formulas: {
      availability: (availability: number) => availability - 4,
      cost: (cost: number) => cost * 0.75,
      essence: (essence: number) => essence * 1.25,
    },
    labels: {
      availability: '-4',
      cost: 'x 0.75',
      essence: 'x 1.25'
    }
  }
];

export const AUGMENTATIONS: Augmentation[] = [
  // {
  //   id: AUGMENTATION_ID.COMMLINK,
  //   name: 'Commlink',
  //
  // }
];
