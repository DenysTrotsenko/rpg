import {AttributeId} from '@flames-of-freedom-1e/enums';

export interface CombatTrackerUnitOptions {
  uid: string;
  name?: string;
  type?: 'player' | 'threat';
  initiative?: number;
  attributes?: { name: string; value: number; }[];
}

export class CombatTrackerUnit {
  uid: string;
  name: string;
  type: 'player' | 'threat';
  initiative: number;
  attributes: { name: string; value: number; }[];
  constructor(options: CombatTrackerUnitOptions) {
    this.uid = options?.uid;
    this.name = options?.name ?? 'unknown';
    this.type = options?.type ?? 'threat';
    this.initiative = options?.initiative ?? 1;
    this.attributes = [...options.attributes];
  }
}
