import {RiskFactor} from './models';
import {RiskFactorId} from './enums';

export const RISK_FACTORS: RiskFactor[] = [
  { id: RiskFactorId.BASIC, name: 'Basic' },
  { id: RiskFactorId.INTERMEDIATE, name: 'Intermediate' },
  { id: RiskFactorId.ADVANCED, name: 'Advanced' },
  { id: RiskFactorId.ELITE, name: 'Elite' }
];
