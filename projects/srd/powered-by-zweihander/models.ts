import {QualityId} from './enums';

export interface HasBase {
  id: number;
  name: string;
}

export interface HasLabels {
  labels?: {
    description?: string;
    tooltip?: string;
  };
}

export interface Allegiance extends HasBase, HasLabels {}

export interface Disposition extends HasBase, HasLabels {
  labels?: {
    description?: string;
    tooltip?: string;
    interact_check?: string;
    social_tactics_same_allegiance?: string;
    social_tactics_different_allegiance?: string;
  };
}

export interface Language extends HasBase, HasLabels {}

export interface Quality {
  id: QualityId;
  name: string;
  labels?: {
    effect: string;
  };
}
