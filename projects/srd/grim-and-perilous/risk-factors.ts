import {RiskFactor} from './models';
import {RiskFactorId} from './enums';

export const RISK_FACTORS: RiskFactor[] = [
  {
    id: RiskFactorId.BASIC,
    name: 'Basic',
    mechanics: {
      DAMAGE_THRESHOLD_BONUS: 1
    }
  },
  {
    id: RiskFactorId.INTERMEDIATE,
    name: 'Intermediate',
    mechanics: {
      DAMAGE_THRESHOLD_BONUS: 2
    }
  },
  {
    id: RiskFactorId.ADVANCED,
    name: 'Advanced',
    mechanics: {
      DAMAGE_THRESHOLD_BONUS: 3
    }
  },
  {
    id: RiskFactorId.ELITE,
    name: 'Elite',
    mechanics: {
      DAMAGE_THRESHOLD_BONUS: 4
    }
  }
];
