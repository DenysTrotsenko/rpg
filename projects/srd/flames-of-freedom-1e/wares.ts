import {WareId, WareTypeId} from './enums';
import {Ware} from './models';

export const WARE_TYPES = [
  { id: WareTypeId.ALCHEMICAL_DRUGS_MEDICINE, name: 'Alchemical, Drugs & Medicine' }
];

export const WARES: Ware[] = [
  {
    id: WareId.TEST,
    name: '',
    type: WareTypeId.ALCHEMICAL_DRUGS_MEDICINE
  }
];
