import {Character} from '@ti/app/game/models/character';
import {getBonusFromAttribute} from '@grim-and-perilous/utils';
import {AttributeId, QualityId, TalentId, Weapon} from '@grim-and-perilous/models/common';
import {getIntegerInRange} from '@shared';
import {
  ATTRIBUTE_ID_AGILITY,
  ATTRIBUTE_ID_BRAWN,
  ATTRIBUTE_ID_COMBAT, ATTRIBUTE_ID_PERCEPTION, ATTRIBUTE_ID_WILLPOWER,
  QUALITY_ID_FAST,
  QUALITY_ID_INEFFECTIVE, QUALITY_ID_PUMMELING, TALENT_ID_BRAINS_OVER_BRAWN, TALENT_ID_GUT_INSTINCT
} from '@grim-and-perilous/const';

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
  if (weapon.qualities.includes(QUALITY_ID_PUMMELING)) {
    bonus = getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
  } else if (weapon.qualities.includes(QUALITY_ID_FAST)) {
    bonus = getAttributeBonus(character, ATTRIBUTE_ID_AGILITY);
  } else {
    bonus = getAttributeBonus(character, ATTRIBUTE_ID_COMBAT);
  }
  return weapon.qualities.includes(QUALITY_ID_INEFFECTIVE) ? 'None' : `${dices}d6+${bonus}`;
}

export function getDamageThreshold(character: Character): number {
  const fromDetermination: number = character.determination;
  const fromBrawnBonus: number = getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
  const talents: TalentId[] = [
    ...character.advancements.basic.talents ?? [],
    ...character.advancements.intermediate.talents ?? [],
    ...character.advancements.advanced.talents ?? [],
  ];
  const fromAttribute: number = talents.includes(TALENT_ID_BRAINS_OVER_BRAWN)
    ? Math.max(fromBrawnBonus, fromWillpowerBonus)
    : fromBrawnBonus;
  return fromDetermination + fromAttribute;
}

export function getEncumbranceLimit(character: Character): number {
  const brawn: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_BRAWN]);
  return 3 + brawn;
}

export function getInitiative(character: Character): number {
  const perception: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_PERCEPTION]);
  return 3 + perception;
}

export function getRolledInitiative(): number {
  return getIntegerInRange(1, 10);
}

export function getMovement(character: Character): number {
  const agility: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_AGILITY]);
  return 3 + agility;
}

export function getPerilThreshold(character: Character): number {
  const fromBrawnBonus: number = getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
  const fromWillpowerBonus: number = getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
  const talents: TalentId[] = [
    ...character.advancements.basic.talents ?? [],
    ...character.advancements.intermediate.talents ?? [],
    ...character.advancements.advanced.talents ?? [],
  ];
  const fromAttribute: number = talents.includes(TALENT_ID_GUT_INSTINCT)
    ? Math.max(fromBrawnBonus, fromWillpowerBonus)
    : fromWillpowerBonus;
  return 3 + fromAttribute;
}

export function getThresholds(threshold: number): string {
  return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
}
