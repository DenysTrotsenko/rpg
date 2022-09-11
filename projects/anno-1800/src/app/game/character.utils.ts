import {Character} from '@ti/app/game/models/character';
import {getBonusFromAttribute} from '@flames-of-freedom-1e/utils';
import {AttributeId} from '@flames-of-freedom-1e/enums';

export function getAttributeBonus(character: Character, attribute: AttributeId): number {
  const bonus: number = getBonusFromAttribute(character.attributes[attribute]);
  const advances: number = [
    ...character.advancements.basic.bonuses ?? [],
    ...character.advancements.intermediate.bonuses ?? [],
    ...character.advancements.advanced.bonuses ?? [],
  ].filter(i => i === attribute).length;
  return bonus + advances;
}

export function getDamageThreshold(character: Character): number {
  const fromDetermination: number = character.determination;
  const fromBrawnBonus: number = getAttributeBonus(character, AttributeId.BRAWN);
  return fromDetermination + fromBrawnBonus;
}

export function getDamageThresholds(threshold: number): string {
  return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
}

export function getEncumbranceLimit(character: Character): number {
  const brawn: number = getBonusFromAttribute(character.attributes[AttributeId.BRAWN]);
  return 3 + brawn;
}

export function getInitiative(character: Character): number {
  const perception: number = getBonusFromAttribute(character.attributes[AttributeId.PERCEPTION]);
  return 3 + perception;
}

export function getMovement(character: Character): number {
  const agility: number = getBonusFromAttribute(character.attributes[AttributeId.AGILITY]);
  return 3 + agility;
}

export function getPerilThreshold(character: Character): number {
  const willpower: number = getBonusFromAttribute(character.attributes[AttributeId.WILLPOWER]);
  const advances: number = [
    ...character.advancements.basic.bonuses ?? [],
    ...character.advancements.intermediate.bonuses ?? [],
    ...character.advancements.advanced.bonuses ?? [],
  ].filter(i => i === AttributeId.WILLPOWER).length;
  return 3 + willpower + advances;
}

export function getPerilThresholds(threshold: number): string {
  return `${threshold} (${threshold + 6}/${threshold + 12}/${threshold + 18})`;
}
