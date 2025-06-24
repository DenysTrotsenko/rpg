import { AttributeId, KinId, TalentId } from '../models/enums';
import { Kin } from '../models/common';

export const KINS: Kin[] = [
  {
    id: KinId.HUMAN,
    name: '',
    attribute: AttributeId.STRENGTH,
    talent: TalentId.ADAPTIVE
  },
];
