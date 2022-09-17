import {BRAWN_BONUS_TRAITS, DAMAGE_THRESHOLD_TRAITS} from '@flames-of-freedom-1e/const';
import {AttributeId, QualityId, SkillId, ThreatTraitId} from '@flames-of-freedom-1e/enums';
import {Threat, Weapon} from '@flames-of-freedom-1e/models';
import {getBonusFromAttribute} from '@flames-of-freedom-1e/utils';
import {getIntegerInRange} from '@shared';
import {SIZES} from '@grim-and-perilous/sizes';
import {RISK_FACTORS} from '@grim-and-perilous/risk-factors';

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
  const dices = SIZES.find(i => i.id === threat.size)?.mechanics?.FURY_DICE ?? 1;
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
  const fromRiskFactor: number = RISK_FACTORS.find(i => i.id === threat.risk_factor)?.mechanics?.DAMAGE_THRESHOLD_BONUS ?? 0;
  const fromBrawnBonus: number = getAttributeBonus(threat, AttributeId.BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(threat, AttributeId.WILLPOWER);
  const fromAttribute: number = threat.advancements.traits.map(i => i.id).includes(ThreatTraitId.BRAINS_OVER_BRAWN)
    ? Math.max(fromBrawnBonus, fromWillpowerBonus)
    : fromBrawnBonus;
  const fromTraits: number = threat.advancements.traits.reduce((acc, trait) => {
    return DAMAGE_THRESHOLD_TRAITS.includes(trait.id) ? acc + +trait.value : acc;
  }, 0);
  return fromAttribute + fromTraits + fromRiskFactor;
}

export function getDefences(threat: Threat): string {
  const fromCombat: number = threat.attributes[AttributeId.COMBAT];
  const fromSimpleMelee: number = threat.advancements.skills.filter(i => i === SkillId.SIMPLE_MELEE).length * 10;
  const fromAgility: number = threat.attributes[AttributeId.AGILITY];
  const fromCoordination: number = threat.advancements.skills.filter(i => i === SkillId.COORDINATION).length * 10;
  const ranged: number = Math.round(fromAgility + fromCoordination);
  const melee: number = Math.round(fromCombat + fromSimpleMelee);
  return `${melee}% / ${ranged}%`;
}

export function getEncumbranceLimit(threat: Threat): number {
  return getAttributeBonus(threat, AttributeId.BRAWN) + 3;
}

export function getInitiative(threat: Threat): number {
  return getAttributeBonus(threat, AttributeId.PERCEPTION) + 3;
}

export function getMovement(threat: Threat): number {
  const hasImmobile: boolean = threat.advancements.traits.map(i => i.id).includes(ThreatTraitId.IMMOBILE);
  return hasImmobile ? 0 : getAttributeBonus(threat, AttributeId.AGILITY) + 3;
}

export function getPerilThreshold(threat: Threat): number {
  const fromBrawnBonus: number = getAttributeBonus(threat, AttributeId.BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(threat, AttributeId.WILLPOWER);
  return getAttributeBonus(threat, AttributeId.WILLPOWER) + 3;
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

export function getThresholds(threshold: number): string {
  return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
}
