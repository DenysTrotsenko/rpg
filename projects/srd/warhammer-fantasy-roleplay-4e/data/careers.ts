import { CareerId, CharacteristicId, ClassId } from '@wfrp-4e/models/enums';
import { Career } from '@wfrp-4e/models/common';

export const CAREERS: Career[] = [
  {
    id: CareerId.APOTHECARY,
    name: 'Apothecary',
    class: ClassId.ACADEMICS,
    scheme: {
      [CharacteristicId.TOUGHNESS]: 1,
      [CharacteristicId.INITIATIVE]: 3,
      [CharacteristicId.DEXTERITY]: 1,
      [CharacteristicId.INTELLIGENCE]: 1,
      [CharacteristicId.WILLPOWER]: 4,
      [CharacteristicId.FELLOWSHIP]: 2,
    },
    paths: []
  },
];
