import { PermissionId } from './enums';
import { TodoTask } from './shared/todo-editor/todo-editor.models';

export type Opaque<T, K> = T & { __opaque__: K };
export type JsonString<T> = Opaque<string, T>;

export type CampaignId = Opaque<string, 'CampaignId'>;
export type CharacterId = Opaque<string, 'CharacterId'>;
export type SettingId = Opaque<string, 'SettingId'>;
export type UserId = Opaque<string, 'UserId'>;

export interface AuthWithEmailAndPassword {
  email: string;
  password: string;
}

export interface HasBaseProperties<T> {
  id: T;
  name: string;
  default?: boolean;
  labels?: {
    flavor?: string;
    description?: string;
    tooltip?: string;
  };
}

export interface HasId<T> {
  id: T;
}

export interface HasCommonFields {
  name: string;
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface HasSystem {
  system?: Record<string, number | string | boolean>;
}

export interface HasWeight {
  weight: number;
}

export interface NavListItemData {
  icon?: string;
  link: string;
  label: string;
  class?: string;
  permission?: PermissionId;
  children?: NavListItemData[];
}

export interface Setting {
  default?: boolean;
  id: SettingId;
  name: string;
  storage: string;
}

export interface Campaign {
  id: CampaignId;
  name: string;
  authors: UserId[];
  members: UserId[];
  characters: CharacterId[];
  setting: SettingId;
  modules: SettingId[];
  events: CampaignEvent[];
  personas: CampaignEvent[];
  locations: CampaignEvent[];
  experience: CampaignExperience[];
}

export interface CampaignEvent {
  id: string;
  image: string | null;
  name: string;
  short?: string;
  description: string;
  members: UserId[];
  createdAt: number;
  updatedAt: number;
}

export interface CampaignExperience {
  id: string;
  name: string;
  description: string;
  tasks: TodoTask[];
  createdAt: number;
  updatedAt: number;
}

export interface Character {
  id: CharacterId;
  author: UserId;
  campaign: CampaignId;
  name: string;
  image?: string | null;
}

export interface User {
  id: UserId;
  name: string;
  email: string;
  permissions: PermissionId[];
}
