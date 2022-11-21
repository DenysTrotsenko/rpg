import { CampaignId, SettingId } from './common';

export class Campaign {
  id: CampaignId;
  name: string;
  author: string;
  setting: SettingId;
}
