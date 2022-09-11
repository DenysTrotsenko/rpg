import {BRAWN_BONUS_TRAITS, RISK_FACTOR_DT_BONUS} from '@flames-of-freedom-1e/const';
import {AttributeId, ThreatTraitId} from '@flames-of-freedom-1e/enums';
import {Threat} from '@flames-of-freedom-1e/models';
import {getBonusFromAttribute} from '@flames-of-freedom-1e/utils';

export function getAttributeBonus(threat: Threat, attributeId: AttributeId): number {
  const fromAttribute: number = getBonusFromAttribute(threat.attributes[attributeId]);
  const fromAdvances: number = threat.advancements.bonuses.filter(i => i === attributeId).length;
  const fromTraits: number = threat.advancements.traits.reduce((acc, trait) => {
    let bonus = 0;
    if (BRAWN_BONUS_TRAITS.includes(trait.id) && attributeId === AttributeId.BRAWN) {
      bonus += +trait.value;
    }
    return acc + bonus;
  }, 0);

  return fromAttribute + fromAdvances + fromTraits;
}

export function getDamageThreshold(threat: Threat): number {
  const fromRiskFactor: number = RISK_FACTOR_DT_BONUS.get(threat.risk_factor);
  const fromBrawnBonus: number = getAttributeBonus(threat, AttributeId.BRAWN);

  return fromBrawnBonus + fromRiskFactor;
}

export function getMovement(threat: Threat): number {
  const hasImmobile: boolean = threat.advancements.traits.map(i => i.id).includes(ThreatTraitId.IMMOBILE);
  return hasImmobile ? 0 : getAttributeBonus(threat, AttributeId.AGILITY) + 3;
}
