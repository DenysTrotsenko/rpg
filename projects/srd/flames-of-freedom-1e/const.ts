import {RiskFactorId, SizeId, ThreatTraitId} from './enums';

export const DEFAULT_ATTRIBUTE_PERCENTAGES = 25;
export const DEFAULT_DETERMINATION = 2;
const BULLET = '•';

export const BRAWN_BONUS_TRAITS: ThreatTraitId[] = [
  ThreatTraitId.BRAWNY,
  ThreatTraitId.THICK_HIDE
];
export const RISK_FACTOR_DT_BONUS = new Map()
  .set(RiskFactorId.BASIC, 1)
  .set(RiskFactorId.INTERMEDIATE, 2)
  .set(RiskFactorId.ADVANCED, 3)
  .set(RiskFactorId.ELITE, 4);
export const SIZE_DAMAGE_DICE = new Map()
  .set(SizeId.SMALL, 0)
  .set(SizeId.NORMAL, 1)
  .set(SizeId.LARGE, 2)
  .set(SizeId.HUGE, 3);
