import {
  APPROACH_ID,
  ARENA_ID,
  BOOK_ID,
  CALLING_ID,
  FLAIR_TYPE_ID,
  QUALITY_TYPE_ID,
  STUNT_TYPE_ID,
  TAG_TYPE_ID,
  TIER_ID
} from './scion.enums';

export interface Base {
  id: number;
  name: string;
}

export interface Attribute extends Base {
  description: string;
  approach: APPROACH_ID;
  arena: ARENA_ID;
}

// export interface Boon extends Base {
//
// }

export interface Condition extends Base {
  labels: {
    description: string;
    effect: string;
    momentum: string;
    resolution: string;
  };
}

export interface Flair extends Base {
  tier: TIER_ID;
  type: FLAIR_TYPE_ID;
  labels: {
    cost: string;
    duration: string;
    subject: string;
    range: string;
    action: string;
    cooldown: string;
    prerequisite?: string;
    description: string;
  };
}

export interface Knack extends Base {
  tier: TIER_ID;
  description: string;
}

export interface Quality extends Base {
  type: QUALITY_TYPE_ID;
  tier: TIER_ID;
  description: string;
}

export interface Skill extends Base {
  description: string;
}

export interface Stunt extends Base {
  type: STUNT_TYPE_ID;
  cost: string;
  description: string;
}

export interface Tag extends Base {
  book: BOOK_ID;
  type: TAG_TYPE_ID;
  cost: number;
  description: string;
}

export interface Virtue extends Base {
  labels: {
    description: string;
  };
}
