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
export interface Language extends HasBase, HasLabels {}
