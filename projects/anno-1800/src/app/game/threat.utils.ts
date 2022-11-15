import {
  ATTRIBUTE_ID_AGILITY,
  ATTRIBUTE_ID_BRAWN,
  ATTRIBUTE_ID_COMBAT,
  ATTRIBUTE_ID_PERCEPTION,
  ATTRIBUTE_ID_WILLPOWER,
  BRAWN_BONUS_TRAITS,
  DAMAGE_THRESHOLD_TRAITS,
  QUALITY_ID_FAST,
  QUALITY_ID_INEFFECTIVE,
  QUALITY_ID_PUMMELING,
  SKILL_ID_COORDINATION,
  SKILL_ID_SIMPLE_MELEE,
  THREAT_TRAIT_ID_BRAINS_OVER_BRAWN,
  THREAT_TRAIT_ID_GUT_INSTINCT,
  THREAT_TRAIT_ID_HYPERSENSITIVITY,
  THREAT_TRAIT_ID_IMMOBILE,
  THREAT_TRAIT_ID_LETHARGY
} from '@grim-and-perilous/const';
import {AttributeId, QualityId, SkillId, ThreatTraitId, Threat, Weapon} from '@grim-and-perilous/models/common';
import {getBonusFromAttribute} from '@grim-and-perilous/utils';
import {getIntegerInRange} from '@shared';
import { DataService, DataTypes } from '@ti/app/game/data.service';

export function getAttributeBonus(threat: Threat, attributeId: AttributeId): number {
  const fromAttribute: number = getBonusFromAttribute(threat.attributes[attributeId]);
  const fromAdvances: number = Math.min(threat.advancements.bonuses.filter(i => i === attributeId).length, 6);
  const fromTraits: number = threat.advancements.traits.reduce((acc, trait) => {
    let bonus = 0;
    if (BRAWN_BONUS_TRAITS.includes(trait.id) && attributeId === ATTRIBUTE_ID_BRAWN) {
      bonus += +trait.value;
    }
    return acc + bonus;
  }, 0);

  return fromAttribute + fromAdvances + fromTraits;
}

export function getWeaponDamage(data: DataService, weapon: Weapon, threat: Threat): string {
  const dices = data[DataTypes.SIZES].find(i => i.id === threat.size)?.mechanics?.FURY_DICE ?? 1;
  let bonus;
  if (weapon.qualities.includes(QUALITY_ID_PUMMELING)) {
    bonus = getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN);
  } else if (weapon.qualities.includes(QUALITY_ID_FAST)) {
    bonus = getAttributeBonus(threat, ATTRIBUTE_ID_AGILITY);
  } else {
    bonus = getAttributeBonus(threat, ATTRIBUTE_ID_COMBAT);
  }
  return weapon.qualities.includes(QUALITY_ID_INEFFECTIVE) ? 'None' : `${dices}d6+${bonus}`;
}

export function getDamageThreshold(data: DataService, threat: Threat): number {
  const fromRiskFactor: number = data[DataTypes.RISK_FACTORS]
    .find(i => i.id === threat.risk_factor)?.mechanics?.DAMAGE_THRESHOLD_BONUS ?? 0;
  const fromBrawnBonus: number = getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(threat, ATTRIBUTE_ID_WILLPOWER);
  const fromAttribute: number = threat.advancements.traits.map(i => i.id).includes(THREAT_TRAIT_ID_BRAINS_OVER_BRAWN)
    ? Math.max(fromBrawnBonus, fromWillpowerBonus)
    : fromBrawnBonus;
  const fromTraits: number = threat.advancements.traits.reduce((acc, trait) => {
    return DAMAGE_THRESHOLD_TRAITS.includes(trait.id) ? acc + +trait.value : acc;
  }, 0);
  return fromAttribute + fromTraits + fromRiskFactor;
}

export function getDefences(threat: Threat, peril: number): string {
  const fromCombat: number = threat.attributes[ATTRIBUTE_ID_COMBAT];
  const fromAgility: number = threat.attributes[ATTRIBUTE_ID_AGILITY];
  const skillRanksPenalty = Math.max(peril - 1, 0);
  const simpleMeleeRanks = threat.advancements.skills.filter(i => i === SKILL_ID_SIMPLE_MELEE).length;
  const coordinationMeleeRanks = threat.advancements.skills.filter(i => i === SKILL_ID_COORDINATION).length;
  const fromSimpleMelee: number = Math.max(0, simpleMeleeRanks - skillRanksPenalty) * 10;
  const fromCoordination: number = Math.max(0, coordinationMeleeRanks - skillRanksPenalty) * 10;
  const ranged: number = Math.round(fromAgility + fromCoordination);
  const melee: number = Math.round(fromCombat + fromSimpleMelee);
  return `${melee}% / ${ranged}%`;
}

export function getEncumbranceLimit(threat: Threat): number {
  return getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN) + 3;
}

export function getInitiative(threat: Threat): number {
  return getAttributeBonus(threat, ATTRIBUTE_ID_PERCEPTION) + 3;
}

export function getMovement(threat: Threat): number {
  const hasImmobile: boolean = threat.advancements.traits.map(i => i.id).includes(THREAT_TRAIT_ID_IMMOBILE);
  return hasImmobile ? 0 : getAttributeBonus(threat, ATTRIBUTE_ID_AGILITY) + 3;
}

export function getPerilThreshold(threat: Threat): number {
  const fromBrawnBonus: number = getAttributeBonus(threat, ATTRIBUTE_ID_BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(threat, ATTRIBUTE_ID_WILLPOWER);
  const fromAttribute: number = threat.advancements.traits.map(i => i.id).includes(THREAT_TRAIT_ID_GUT_INSTINCT)
    ? Math.max(fromBrawnBonus, fromWillpowerBonus)
    : fromWillpowerBonus;
  return 3 + fromAttribute;
}

export function getRolledInitiative(threat: Threat): number {
  const hasLethargy: boolean = threat.advancements.traits.map(i => i.id).includes(THREAT_TRAIT_ID_LETHARGY);
  const hasHypersensitivity: boolean = threat.advancements.traits.map(i => i.id).includes(THREAT_TRAIT_ID_HYPERSENSITIVITY);
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
