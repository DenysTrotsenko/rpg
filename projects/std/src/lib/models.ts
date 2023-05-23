export type Opaque<T, K> = T & { __opaque__: K };
export type JsonString<T> = Opaque<string, T>;

export type CampaignId = Opaque<string, 'CampaignId'>;
export type SettingId = Opaque<string, 'SettingId'>;
export type UserId = Opaque<string, 'UserId'>;

export interface AuthWithEmailAndPassword {
  email: string;
  password: string;
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
  link: string;
  label: string;
  class?: string;
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
  setting: string;
  events: CampaignEvent[];
  personas: CampaignPersona[];
  locations: CampaignLocation[];
}

export interface CampaignEvent extends HasId<string>, HasName {
  icon: string | null;
  description: string;
}

export interface CampaignPersona extends HasId<string> {
  icon: string | null;
  description: string;
}

export interface CampaignLocation extends HasId<string> {
  icon: string | null;
  description: string;
}
