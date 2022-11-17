import { SettingId } from './common';

export interface Campaign {
  id: string;
  name: string;
  author: string;
  setting: SettingId;
}
