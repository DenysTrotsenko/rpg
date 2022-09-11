export interface CombatTrackerUnitOptions {
  uid: string;
  name?: string;
  type?: 'player' | 'threat';
  initiative?: number;
  attributes?: { name: string; value: number; bonus: number; }[];
}

export class CombatTrackerUnit {
  uid: string;
  name: string;
  type: 'player' | 'threat';
  initiative: number;
  attributes: { name: string; value: number; bonus: number; }[];
  constructor(options: CombatTrackerUnitOptions) {
    this.uid = options?.uid;
    this.name = options?.name ?? 'unknown';
    this.type = options?.type ?? 'threat';
    this.initiative = options?.initiative ?? 1;
    this.attributes = [...options.attributes];
  }
}
