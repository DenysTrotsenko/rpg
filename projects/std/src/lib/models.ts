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
    description?: string;
    tooltip?: string;
  };
}

export interface HasId<T> {
  id: T;
}

export interface HasName {
  name: string;
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
  events: CampaignEvent[];
  personas: CampaignEvent[];
  locations: CampaignEvent[];
  experience: CampaignExperience[];
}

export interface CampaignEvent extends HasId<string> {
  icon: string | null;
  name: string;
  description: string;
  members: UserId[];
  createdAt: number;
  updatedAt: number;
}

export interface CampaignExperience extends HasId<string> {
  name: string;
  description: string;
  tasks: TodoTask[];
  createdAt: number;
  updatedAt: number;
}

export interface Character {
  id: CharacterId;
  name: string;
  author: UserId;
  campaign: CampaignId;
}

export interface User extends HasId<UserId> {
  name: string;
  email: string;
  permissions: PermissionId[];
}
