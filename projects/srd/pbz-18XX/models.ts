import {AllegianceId, WareId, WareTypeId} from './enums';

export interface Allegiance {
  id: AllegianceId;
  name: string;
  labels?: {
    description: string;
  };
}

export interface WareType {
  id: WareTypeId;
  name: string;
}

export interface Ware {
  id: WareId;
  name: string;
  type: WareTypeId;
  cost: number;
  labels?: {
    description?: string;
    tooltip?: string;
  };
}
