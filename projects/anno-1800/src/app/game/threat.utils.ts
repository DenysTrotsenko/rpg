import {BRAWN_BONUS_TRAITS, RISK_FACTOR_DT_BONUS, SIZE_DAMAGE_DICE} from '@flames-of-freedom-1e/const';
import {AttributeId, QualityId, ThreatTraitId} from '@flames-of-freedom-1e/enums';
import {Threat, Weapon} from '@flames-of-freedom-1e/models';
import {getBonusFromAttribute} from '@flames-of-freedom-1e/utils';
import {getIntegerInRange} from '@shared';

export function getAttributeBonus(threat: Threat, attributeId: AttributeId): number {
  const fromAttribute: number = getBonusFromAttribute(threat.attributes[attributeId]);
  const fromAdvances: number = Math.min(threat.advancements.bonuses.filter(i => i === attributeId).length, 6);
  const fromTraits: number = threat.advancements.traits.reduce((acc, trait) => {
    let bonus = 0;
    if (BRAWN_BONUS_TRAITS.includes(trait.id) && attributeId === AttributeId.BRAWN) {
      bonus += +trait.value;
    }
    return acc + bonus;
  }, 0);

  return fromAttribute + fromAdvances + fromTraits;
}

export function getWeaponDamage(weapon: Weapon, threat: Threat): string {
  const dices = SIZE_DAMAGE_DICE.get(threat.size) ?? 1;
  let bonus;
  if (weapon.qualities.includes(QualityId.PUMMELING)) {
    bonus = getAttributeBonus(threat, AttributeId.BRAWN);
  } else if (weapon.qualities.includes(QualityId.FAST)) {
    bonus = getAttributeBonus(threat, AttributeId.AGILITY);
  } else {
    bonus = getAttributeBonus(threat, AttributeId.COMBAT);
  }
  return weapon.qualities.includes(QualityId.INEFFECTIVE) ? 'None' : `${dices}d6+${bonus}`;
}

export function getDamageThreshold(threat: Threat): number {
  const fromRiskFactor: number = RISK_FACTOR_DT_BONUS.get(threat.risk_factor);
  const fromBrawnBonus: number = getAttributeBonus(threat, AttributeId.BRAWN);
  return fromBrawnBonus + fromRiskFactor;
}

export function getInitiative(threat: Threat): number {
  return getAttributeBonus(threat, AttributeId.PERCEPTION) + 3;
}

export function getRolledInitiative(threat: Threat): number {
  const hasLethargy: boolean = threat.advancements.traits.map(i => i.id).includes(ThreatTraitId.LETHARGY);
  const hasHypersensitivity: boolean = threat.advancements.traits.map(i => i.id).includes(ThreatTraitId.HYPERSENSITIVITY);
  if (hasLethargy) {
    return getIntegerInRange(1, 6);
  } else if (hasHypersensitivity) {
    return getIntegerInRange(1, 10) + getIntegerInRange(1, 10);
  } else {
    return getIntegerInRange(1, 10);
  }
}

export function getMovement(threat: Threat): number {
  const hasImmobile: boolean = threat.advancements.traits.map(i => i.id).includes(ThreatTraitId.IMMOBILE);
  return hasImmobile ? 0 : getAttributeBonus(threat, AttributeId.AGILITY) + 3;
}
