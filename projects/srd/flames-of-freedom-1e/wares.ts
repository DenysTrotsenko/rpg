import {WareId, WareTypeId} from './enums';
import {Ware, Weapon} from './models';

export const WARE_TYPES = [
  { id: WareTypeId.ALCHEMICAL_DRUGS_MEDICINE, name: 'Alchemical, Drugs & Medicine' }
];

export const WARES: Ware[] = [
  {
    id: WareId.ANTIDOTE,
    name: 'Antidote (by dose)',
    type: WareTypeId.ALCHEMICAL_DRUGS_MEDICINE,
    cost: 0
  }
];
