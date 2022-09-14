import {SkillId, ThreatId, ThreatTraitId} from '@flames-of-freedom-1e/enums';

export interface CombatTrackerUnitOptions {
  uid: string;
  name?: string;
  type?: 'player' | 'threat';
  templateId?: ThreatId;
  attributes?: { name: string; value: number; bonus: number; }[];
  skills: { id: SkillId; value: number; }[];
  traits: { id: ThreatTraitId; value?: number | string; }[];
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
  attributes: { name: string; value: number; bonus: number; }[];
  skills: { id: SkillId; value: number; }[];
  traits: { id: ThreatTraitId; value?: number | string; }[];
  initiative: number;
  damage: 0|1|2|3|4|5;
  peril: 0|1|2|3|4|5;

  constructor(options: CombatTrackerUnitOptions) {
    this.expanded = false;
    this.uid = options?.uid;
    this.name = options?.name ?? 'unknown';
    this.type = options?.type ?? 'threat';
    this.templateId = this.type === 'threat' ? options?.templateId : null;
    this.attributes = [...options.attributes];
    this.skills = [...options.skills];
    this.traits = [...options.traits];
    this.initiative = options?.initiative ?? 1;
    this.damage = options?.damage ?? 0;
    this.peril = options?.peril ?? 0;
  }
}
