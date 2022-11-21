import {
  AfflictionId, AgeId,
  ArchetypeId,
  AttributeId,
  BeliefId, BuildId,
  CultureId, EyesId,
  FlawId, HairColorId, HairLengthId, HairStyleId, LanguageId, MarkId,
  PermanentInjuryId, ProfessionId,
  QuirkId, SexId,
  SkillId, SpellId, StatureId, StyleId,
  TalentId, TierId,
  TraitId, Weapon
} from './common';
import {
  ATTRIBUTE_ID_AGILITY,
  ATTRIBUTE_ID_BRAWN, ATTRIBUTE_ID_COMBAT, ATTRIBUTE_ID_PERCEPTION,
  ATTRIBUTE_ID_WILLPOWER, QUALITY_ID_FAST, QUALITY_ID_INEFFECTIVE, QUALITY_ID_PUMMELING,
  TALENT_ID_BRAINS_OVER_BRAWN,
  TALENT_ID_GUT_INSTINCT
} from '@grim-and-perilous/const';
import { getBonusFromAttribute } from '@grim-and-perilous/utils';
import { getIntegerInRange } from '@shared';

export class Character {
  id: string;
  authors: string[];
  campaign: string;
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

  static getWeaponDamage(weapon: Weapon, character: Character): string {
    const dices = 1;
    let bonus;
    if (weapon.qualities.includes(QUALITY_ID_PUMMELING)) {
      bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
    } else if (weapon.qualities.includes(QUALITY_ID_FAST)) {
      bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_AGILITY);
    } else {
      bonus = Character.getAttributeBonus(character, ATTRIBUTE_ID_COMBAT);
    }
    return weapon.qualities.includes(QUALITY_ID_INEFFECTIVE) ? 'None' : `${dices}d6+${bonus}`;
  }

  static getDamageThreshold(character: Character): number {
    const fromDetermination: number = character.determination;
    const fromBrawnBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
    const fromWillpowerBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
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

  static getPerilThreshold(character: Character): number {
    const fromBrawnBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_BRAWN);
    const fromWillpowerBonus: number = Character.getAttributeBonus(character, ATTRIBUTE_ID_WILLPOWER);
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
}
