import { CareerPath } from '@wfrp-4e/models/common';
import { CareerPathId, StatusTier } from '@wfrp-4e/models/enums';

export const CAREER_PATHS: CareerPath[] = [
  {
    id: CareerPathId.APOTHECARYS_APPRENTICE,
    name: '',
    status: { tier: StatusTier.BRASS, standing: 1 },
    skills: [],
    talents: []
  }
];
