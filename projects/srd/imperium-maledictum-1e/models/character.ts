import { Character } from '@std';
import {
  CharacteristicId,
  FactionId,
  ItemId,
  ItemTraitId,
  OriginId,
  PsychicPowerId,
  RoleId,
  SkillId,
  SpecialisationId,
  TalentId
} from '@imperium-maledictum-1e/models/common';

export interface ImperiumMaledictumCharacter extends Character {
  origin: OriginId;
  faction: FactionId;
  role: RoleId;

  characteristics: CharacteristicValue[];
  skills: SkillValue[];
  specialisations: SpecialisationValue[];
  talents: TalentValue[];
  powers: PsychicPowerId[];
  items: ItemValue[];
  prosthetics: ItemValue[];
  // patron: PatronId;
}

export interface CharacteristicValue {
  id: CharacteristicId;
  starting: number;
  advances: number;
}

export interface TalentValue {
  id: TalentId;
  starting: number;
  advances: number;
}

export interface SkillValue {
  id: SkillId;
  starting: number;
  advances: number;
}

export interface SpecialisationValue {
  id: SpecialisationId;
  starting: number;
  advances: number;
}

export interface ItemValue {
  id: ItemId;
  qualities: ItemTraitId[];
  flaws: ItemTraitId[];
  modifications: unknown[];
  quantity: number;
}

export function getCharacteristicValue(value: CharacteristicValue): number {
  return (value.starting ?? 0) + (value.advances ?? 0);
}

export function getCharacteristicBonus(value: CharacteristicValue): number {
  return Math.floor(getCharacteristicValue(value) / 10);
}
