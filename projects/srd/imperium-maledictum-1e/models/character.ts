import { CampaignId, CharacterId, UserId } from '@shared';
import { Characteristic, CharacteristicId, PatronId } from './common';

export class Character {
  id: CharacterId;
  authors: UserId[];
  members: UserId[];
  campaign: CampaignId;
  name: string;
  patron: PatronId;
  characteristics: { id: CharacteristicId; value: number; }[];

  static getMaxWounds(character: Character, characteristics: Characteristic[]): number {
    return characteristics
      .filter(i => i.system?.MAXIMUM_WOUNDS_CHARACTERISTIC_BONUS_TIMES)
      .reduce((acc, cur) => {
        const value = character.characteristics.find(i => i.id === cur.id)?.value ?? 0;
        const bonus = Math.floor(value / 10);
        const wounds = Math.round(bonus * cur.system?.MAXIMUM_WOUNDS_CHARACTERISTIC_BONUS_TIMES);
        return acc + wounds;
      }, 0);
  }
//   static getRolledInitiative(): number {
//     return getIntegerInRange(1, 10);
//   }
//
//   static getAttributeBonus(character: Character, attribute: AttributeId): number {
//     const bonus: number = getBonusFromAttribute(character.attributes[attribute]);
//     const advances: number = [
//       ...character.advancements.basic.bonuses ?? [],
//       ...character.advancements.intermediate.bonuses ?? [],
//       ...character.advancements.advanced.bonuses ?? [],
//     ].filter(i => i === attribute).length;
//     return bonus + advances;
//   }
//
//   static getWeaponDamage(weapon: Weapon, character: Character, qualities: Quality[]): string {
//     const dices = 1;
//     const system = System.getSystemProperties([
//       ...qualities.filter(i => weapon.qualities.includes(i.id)).map(i => i.system ?? {})
//     ]);
//     let bonus;
//     if (system.hasOwnProperty('BRAWN_WEAPON_BONUS')) {
//       bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
//     } else if (system.hasOwnProperty('AGILITY_WEAPON_BONUS')) {
//       bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_AGILITY);
//     } else {
//       bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_COMBAT);
//     }
//     return system.hasOwnProperty('INEFFECTIVE_WEAPON')
//       ? 'None'
//       : `${dices}d6+${bonus}`;
//   }
//
//   static getDamageThreshold(character: Character, talents: Talent[]): number {
//     const fromDetermination: number = character.determination;
//     const fromBrawnBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
//     const fromWillpowerBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
//     const talentIds: TalentId[] = [
//       ...character.advancements.basic.talents ?? [],
//       ...character.advancements.intermediate.talents ?? [],
//       ...character.advancements.advanced.talents ?? [],
//     ];
//     const system = System.getSystemProperties([
//       ...talents.filter(i => talentIds.includes(i.id)).map(i => i.system ?? {})
//     ]);
//     const fromAttribute: number = system.hasOwnProperty('DAMAGE_THRESHOLD_MAX_OF_BRAWN_WILLPOWER_BONUS')
//       ? Math.max(fromBrawnBonus, fromWillpowerBonus)
//       : fromBrawnBonus;
//     return fromDetermination + fromAttribute;
//   }
//
//   static getEncumbranceLimit(character: Character): number {
//     const brawn: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_BRAWN]);
//     return 3 + brawn;
//   }
//
//   static getInitiative(character: Character): number {
//     const perception: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_PERCEPTION]);
//     return 3 + perception;
//   }
//
//   static getMovement(character: Character): number {
//     const agility: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_AGILITY]);
//     return 3 + agility;
//   }
//
//   static getPerilThreshold(character: Character, talents: Talent[]): number {
//     const fromBrawnBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
//     const fromWillpowerBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
//     const talentIds: TalentId[] = [
//       ...character.advancements.basic.talents ?? [],
//       ...character.advancements.intermediate.talents ?? [],
//       ...character.advancements.advanced.talents ?? [],
//     ];
//     const system = System.getSystemProperties([
//       ...talents.filter(i => talentIds.includes(i.id)).map(i => i.system ?? {})
//     ]);
//     const fromAttribute: number = system.hasOwnProperty('PERIL_THRESHOLD_MAX_OF_BRAWN_WILLPOWER_BONUS')
//       ? Math.max(fromBrawnBonus, fromWillpowerBonus)
//       : fromWillpowerBonus;
//     return 3 + fromAttribute;
//   }
}
