import { ShadowrunnerId } from './5e.models';

export interface Shadowrunner {
  id: ShadowrunnerId;
  name: string;
  concept: string;
  qualities: [];
  attributes: [];
  skills: [];
}
