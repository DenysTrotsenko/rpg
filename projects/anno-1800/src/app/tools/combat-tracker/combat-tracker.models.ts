import {QualityId, SkillId, ThreatId, ThreatTraitId, WeaponId} from '@flames-of-freedom-1e/enums';

export interface CombatTrackerUnitOptions {
  uid: string;
  name?: string;
  type?: 'player' | 'threat';
  templateId?: ThreatId;
  initiative?: number;
  attributes?: { name: string; value: number; bonus: number; }[];
  skills: { id: SkillId; value: number; }[];
  traits: { id: ThreatTraitId; value?: number | string; }[];
  weapons: WeaponId[];
}

export class CombatTrackerUnit {
  expanded: boolean;
  uid: string;
  name: string;
  type: 'player' | 'threat';
  templateId: ThreatId;
  initiative: number;
  attributes: { name: string; value: number; bonus: number; }[];
  skills: { id: SkillId; value: number; }[];
  traits: { id: ThreatTraitId; value?: number | string; }[];
  weapons: WeaponId[];

  constructor(options: CombatTrackerUnitOptions) {
    this.expanded = false;
    this.uid = options?.uid;
    this.name = options?.name ?? 'unknown';
    this.type = options?.type ?? 'threat';
    this.templateId = this.type === 'threat' ? options?.templateId : null;
    this.initiative = options?.initiative ?? 1;
    this.attributes = [...options.attributes];
    this.skills = [...options.skills];
    this.traits = [...options.traits];
    this.weapons = [...options.weapons];
  }
}
