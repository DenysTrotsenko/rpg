import { Character } from '@std';
import {
  Characteristic,
  CharacteristicId,
  FactionId,
  ItemId,
  ItemModificationId,
  ItemTraitId,
  OriginId,
  PsychicPowerId,
  RoleId, Skill,
  SkillId, Specialisation,
  SpecialisationId, Talent,
  TalentId
} from '@imperium-maledictum-1e/models/common';

export interface ImperiumMaledictumCharacter extends Character {
  origin: OriginId;
  faction: FactionId;
  role: RoleId;
  characteristics: AdvanceableValue<CharacteristicId>[];
  skills: AdvanceableValue<SkillId>[];
  specialisations: AdvanceableValue<SpecialisationId>[];
  talents: AdvanceableValue<TalentId>[];
  powers: PsychicPowerId[];
  items: ItemValue[];
  prosthetics: ItemValue[];
  // patron: PatronId;

  fate: number;
  wounds: number;
  corruption: number;
}

export interface AdvanceableValue<T> {
  id: T;
  starting: number;
  advances: number;
}

export type Advanceable = AdvanceableValue<CharacteristicId> | AdvanceableValue<SkillId> | AdvanceableValue<SpecialisationId>;

export interface ItemValue {
  id: ItemId;
  qualities: ItemTraitId[];
  flaws: ItemTraitId[];
  modifications: ItemModificationId[];
  quantity: number;
}

export function getCharacteristicValue(value: AdvanceableValue<CharacteristicId>): number {
  return (value?.starting ?? 0) + (value?.advances ?? 0);
}

export function getCharacteristicBonus(value: AdvanceableValue<CharacteristicId>): number {
  return Math.floor(getCharacteristicValue(value) / 10);
}

export function isLessThanMax(option: Characteristic | Skill | Specialisation | Talent, entities: Advanceable[], max: number): boolean {
  const entity = entities?.find(i => i.id === option.id);
  const starting = entity?.starting ?? 0;
  const advances = entity?.advances ?? 0;
  const value = starting + advances;

  return value < max;
}

export function getAdvancesXpCost(entities: Advanceable[], step: number, cost: Map<number, number>): number {
  return !entities ? 0 : entities.reduce((acc, cur) => {
    const advances = cur?.advances ?? 0;

    if (!advances) { return acc; }

    const starting = cur?.starting ?? 0;
    let sum = 0;

    for (let i = starting + step; i <= starting + advances; i += step) {
      sum += cost.get(i) ?? 0;
    }

    return acc + sum;
  }, 0);
}
