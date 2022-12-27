import {
  AfflictionId, AgeId,
  ArchetypeId,
  AttributeId,
  BeliefId, BuildId, CampaignId,
  CultureId, EyesId,
  FlawId, HairColorId, HairLengthId, HairStyleId, LanguageId, MarkId,
  PermanentInjuryId, ProfessionId, Quality,
  QuirkId, SexId,
  SkillId, SpellId, StatureId, StyleId, Talent,
  TalentId, TierId,
  TraitId, Weapon
} from './common';
import {
  ATTRIBUTE_ID_AGILITY,
  ATTRIBUTE_ID_BRAWN, ATTRIBUTE_ID_COMBAT, ATTRIBUTE_ID_PERCEPTION,
  ATTRIBUTE_ID_WILLPOWER
} from '@grim-and-perilous/const';
import { getBonusFromAttribute } from '@grim-and-perilous/utils';
import { getIntegerInRange, UserId } from '@shared';
import { System } from '@grim-and-perilous/models/system';

export class Character {
  id: string;
  author: UserId;
  members: UserId[];
  campaign: CampaignId;
  name: string;
  // tslint:disable-next-line:variable-name
  full_name: string;
  allegiances: string;
  belief: BeliefId;
  flaw: FlawId;
  culture: CultureId;
  archetype: ArchetypeId;
  attributes: {
    [k in AttributeId]: number;
  };
  advancements: {
    advanced: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
    intermediate: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
    basic: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
  };
  determination: number;
  languages: LanguageId[];
  spells: SpellId[];
  // tslint:disable-next-line:variable-name
  alchemical_arts: SpellId[];
  miscellaneous: {
    portrait: string;
    biography: string;
    age: AgeId;
    build: BuildId;
    eyes: EyesId;
    sex: SexId;
    hair_color: HairColorId;
    hair_length: HairLengthId;
    hair_style: HairStyleId;
    mark: MarkId;
    stature: StatureId;
    style: StyleId;
  };
  // tslint:disable-next-line:variable-name
  permanent_injuries: PermanentInjuryId[];
  afflictions: AfflictionId[];
  professions: {
    basic: ProfessionId;
    intermediate: ProfessionId;
    advanced: ProfessionId;
  };
  schemas: {
    advanced: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
    intermediate: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
    basic: {
      bonuses: AttributeId[];
      quirks: QuirkId[];
      skills: SkillId[];
      talents: TalentId[];
      traits: TraitId[];
    };
  };
  tier: TierId;
  trait: TraitId;

  static getRolledInitiative(): number {
    return getIntegerInRange(1, 10);
  }

  static getAttributeBonus(character: Character, attribute: AttributeId): number {
    const bonus: number = getBonusFromAttribute(character.attributes[attribute]);
    const advances: number = [
      ...character.advancements.basic.bonuses ?? [],
      ...character.advancements.intermediate.bonuses ?? [],
      ...character.advancements.advanced.bonuses ?? [],
    ].filter(i => i === attribute).length;
    return bonus + advances;
  }

  static getWeaponDamage(weapon: Weapon, character: Character, qualities: Quality[]): string {
    const dices = 1;
    const system = System.getSystemProperties([
      ...qualities.filter(i => weapon.qualities.includes(i.id)).map(i => i.system ?? {})
    ]);
    let bonus;
    if (system.hasOwnProperty('BRAWN_WEAPON_BONUS')) {
      bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
    } else if (system.hasOwnProperty('AGILITY_WEAPON_BONUS')) {
      bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_AGILITY);
    } else {
      bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_COMBAT);
    }
    return system.hasOwnProperty('INEFFECTIVE_WEAPON')
      ? 'None'
      : `${dices}d6+${bonus}`;
  }

  static getDamageThreshold(character: Character, talents: Talent[]): number {
    const fromDetermination: number = character.determination;
    const fromBrawnBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
    const fromWillpowerBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
    const talentIds: TalentId[] = [
      ...character.advancements.basic.talents ?? [],
      ...character.advancements.intermediate.talents ?? [],
      ...character.advancements.advanced.talents ?? [],
    ];
    const system = System.getSystemProperties([
      ...talents.filter(i => talentIds.includes(i.id)).map(i => i.system ?? {})
    ]);
    const fromAttribute: number = system.hasOwnProperty('DAMAGE_THRESHOLD_MAX_OF_BRAWN_WILLPOWER_BONUS')
      ? Math.max(fromBrawnBonus, fromWillpowerBonus)
      : fromBrawnBonus;
    return fromDetermination + fromAttribute;
  }

  static getEncumbranceLimit(character: Character): number {
    const brawn: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_BRAWN]);
    return 3 + brawn;
  }

  static getInitiative(character: Character): number {
    const perception: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_PERCEPTION]);
    return 3 + perception;
  }

  static getMovement(character: Character): number {
    const agility: number = getBonusFromAttribute(character.attributes[ATTRIBUTE_ID_AGILITY]);
    return 3 + agility;
  }

  static getPerilThreshold(character: Character, talents: Talent[]): number {
    const fromBrawnBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
    const fromWillpowerBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
    const talentIds: TalentId[] = [
      ...character.advancements.basic.talents ?? [],
      ...character.advancements.intermediate.talents ?? [],
      ...character.advancements.advanced.talents ?? [],
    ];
    const system = System.getSystemProperties([
      ...talents.filter(i => talentIds.includes(i.id)).map(i => i.system ?? {})
    ]);
    const fromAttribute: number = system.hasOwnProperty('PERIL_THRESHOLD_MAX_OF_BRAWN_WILLPOWER_BONUS')
      ? Math.max(fromBrawnBonus, fromWillpowerBonus)
      : fromWillpowerBonus;
    return 3 + fromAttribute;
  }
}
