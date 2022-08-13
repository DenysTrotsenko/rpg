import {ActionId, BackgroundId, ContactId, HeritageId, ItemId, PlaybookId, SpecialAbilityId, ViceId} from './enums';

export interface Action {
  id: ActionId;
  name: string;
  labels: {
    description: string;
    examples: string;
  };
}

export interface Background {
  id: BackgroundId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Contact {
  id: ContactId;
  name: string;
  labels: {
    short: string;
    description: string;
    hint: string;
  };
}

export interface Heritage {
  id: HeritageId;
  name: string;
  labels: {
    description: string;
  };
}

export interface Item {
  id: ItemId;
  name: string;
  load: number;
  labels: {
    description: string;
  };
}

export interface Playbook {
  id: PlaybookId;
  name: string;
  actions: { action: ActionId; value: number; }[];
  abilities: SpecialAbilityId[];
  contacts: ContactId[];
  items: ItemId[];
  labels: {
    description: string;
  };
}

export interface SpecialAbility {
  id: SpecialAbilityId;
  name: string;
  labels: {
    description: string;
    explanation: string;
  };
}

export interface Vice {
  id: ViceId;
  name: string;
  labels: {
    description: string;
  };
}
