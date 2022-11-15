import { ThreatId } from '@grim-and-perilous/models/common';

export interface CombatTrackerUnitOptions {
  uid: string;
  name?: string;
  type?: 'player' | 'threat';
  templateId?: ThreatId;
  initiative?: number;
  damage?: 0|1|2|3|4|5;
  peril?: 0|1|2|3|4|5;
}

export class CombatTrackerUnit {
  expanded: boolean;
  uid: string;
  name: string;
  type: 'player' | 'threat';
  templateId: ThreatId;
  initiative: number;
  damage: 0|1|2|3|4|5;
  peril: 0|1|2|3|4|5;

  constructor(options: CombatTrackerUnitOptions) {
    this.expanded = false;
    this.uid = options?.uid;
    this.name = options?.name ?? 'unknown';
    this.type = options?.type ?? 'threat';
    this.templateId = this.type === 'threat' ? options?.templateId : null;
    this.initiative = options?.initiative ?? 1;
    this.damage = options?.damage ?? 0;
    this.peril = options?.peril ?? 0;
  }
}
