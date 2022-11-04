import {SkillId, SettingId, TalentId, TraitId, QuirkId} from './common';

export class Setting {
  id: SettingId;
  name: string;
  quirks: QuirkId[];
  skills: SkillId[];
  talents: TalentId[];
  traits: TraitId[];
}
