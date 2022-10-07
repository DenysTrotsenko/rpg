import {Character} from '@ti/app/game/models/character';
import {getBonusFromAttribute} from '@flames-of-freedom-1e/utils';
import {AttributeId, QualityId, TalentId, ThreatTraitId} from '@flames-of-freedom-1e/enums';
import {Weapon} from '@flames-of-freedom-1e/models';
import {getIntegerInRange} from '@shared';

export function getAttributeBonus(character: Character, attribute: AttributeId): number {
  const bonus: number = getBonusFromAttribute(character.attributes[attribute]);
  const advances: number = [
    ...character.advancements.basic.bonuses ?? [],
    ...character.advancements.intermediate.bonuses ?? [],
    ...character.advancements.advanced.bonuses ?? [],
  ].filter(i => i === attribute).length;
  return bonus + advances;
}

export function getWeaponDamage(weapon: Weapon, character: Character): string {
  const dices = 1;
  let bonus;
  if (weapon.qualities.includes(QualityId.PUMMELING)) {
    bonus = getAttributeBonus(character, AttributeId.BRAWN);
  } else if (weapon.qualities.includes(QualityId.FAST)) {
    bonus = getAttributeBonus(character, AttributeId.AGILITY);
  } else {
    bonus = getAttributeBonus(character, AttributeId.COMBAT);
  }
  return weapon.qualities.includes(QualityId.INEFFECTIVE) ? 'None' : `${dices}d6+${bonus}`;
}

export function getDamageThreshold(character: Character): number {
  const fromDetermination: number = character.determination;
  const fromBrawnBonus: number = getAttributeBonus(character, AttributeId.BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(character, AttributeId.WILLPOWER);
  const talents: TalentId[] = [
    ...character.advancements.basic.talents ?? [],
    ...character.advancements.intermediate.talents ?? [],
    ...character.advancements.advanced.talents ?? [],
  ];
  const fromAttribute: number = talents.includes(TalentId.BRAINS_OVER_BRAWN)
    ? Math.max(fromBrawnBonus, fromWillpowerBonus)
    : fromBrawnBonus;
  return fromDetermination + fromAttribute;
}

export function getEncumbranceLimit(character: Character): number {
  const brawn: number = getBonusFromAttribute(character.attributes[AttributeId.BRAWN]);
  return 3 + brawn;
}

export function getInitiative(character: Character): number {
  const perception: number = getBonusFromAttribute(character.attributes[AttributeId.PERCEPTION]);
  return 3 + perception;
}

export function getRolledInitiative(): number {
  return getIntegerInRange(1, 10);
}

export function getMovement(character: Character): number {
  const agility: number = getBonusFromAttribute(character.attributes[AttributeId.AGILITY]);
  return 3 + agility;
}

export function getPerilThreshold(character: Character): number {
  const fromBrawnBonus: number = getAttributeBonus(character, AttributeId.BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(character, AttributeId.WILLPOWER);
  const talents: TalentId[] = [
    ...character.advancements.basic.talents ?? [],
    ...character.advancements.intermediate.talents ?? [],
    ...character.advancements.advanced.talents ?? [],
  ];
  const fromAttribute: number = talents.includes(TalentId.GUT_INSTINCT)
    ? Math.max(fromBrawnBonus, fromWillpowerBonus)
    : fromWillpowerBonus;
  return 3 + fromAttribute;
}

export function getThresholds(threshold: number): string {
  return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
}
