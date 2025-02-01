import { CharacteristicId, SkillId, TalentId } from './enums';

export const getCharacteristicValue = (value: AdvanceableValue<CharacteristicId>): number => {
  return (value?.starting ?? 0) + (value?.advances ?? 0);
};

export const getCharacteristicBonus = (value: AdvanceableValue<CharacteristicId>): number => {
  return Math.floor(getCharacteristicValue(value) / 10);
};

export const getCharacteristicBonusFn = (id: CharacteristicId): (character: WFRPCharacter) => number => {
  return (character: WFRPCharacter) => getCharacteristicBonus(character.characteristics.find(i => i.id === id));
};

export const getWeaponSkillBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.WEAPON_SKILL)
);

export const getBallisticSkillBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.BALLISTIC_SKILL)
);

export const getStrengthBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.STRENGTH)
);

export const getToughnessBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.TOUGHNESS)
);

export const getAgilityBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.AGILITY)
);

export const getInitiativeBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.INITIATIVE)
);

export const getDexterityBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.DEXTERITY)
);

export const getIntelligenceBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.INTELLIGENCE)
);

export const getWillpowerBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.WILLPOWER)
);

export const getFellowshipBonus = (character: WFRPCharacter): number => getCharacteristicBonus(
  character.characteristics.find(i => i.id === CharacteristicId.FELLOWSHIP)
);

export interface AdvanceableValue<T> {
  id: T;
  group?: string;
  starting?: number;
  advances?: number;
}

export interface WFRPCharacterConfig {
  name: string;
}

export class WFRPCharacter {
  name: string;
  characteristics: AdvanceableValue<CharacteristicId>[];
  skills: AdvanceableValue<SkillId>[];
  talents: AdvanceableValue<TalentId>[];


  constructor(config: Partial<WFRPCharacterConfig>) {
    this.name = config?.name ? config?.name : this.name;
  }

  static getCharacteristicBonus(character: WFRPCharacter, id: CharacteristicId): number {
    return getCharacteristicBonus(character.characteristics.find(i => i.id === id));
  }
}
