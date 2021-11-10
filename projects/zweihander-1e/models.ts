import {AncestryId, SkillId} from './enums';

export interface Ancestry {
  id: AncestryId;
  name: string;
}

export interface Skill {
  id: SkillId;
  name: string;
}
