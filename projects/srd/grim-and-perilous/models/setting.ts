import {SkillId, SettingId, TalentId, TraitId, QuirkId, QualityId} from './common';

export class Setting {
  id: SettingId;
  name: string;
  description: string;
  qualities: QualityId[];
  quirks: QuirkId[];
  skills: SkillId[];
  talents: TalentId[];
  traits: TraitId[];
}
