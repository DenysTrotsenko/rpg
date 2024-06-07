import { Character } from '@std';
import {
  CharacteristicId,
  PsychicPowerId,
  SkillId,
  SpecialisationId,
  TalentId
} from '@imperium-maledictum-1e/models/common';

export interface ImperiumMaledictumCharacter extends Character {
  characteristics: CharacteristicValue[];
  skills: { id: SkillId; value: number; }[];
  specialisations: { id: SpecialisationId; value: number; }[];
  talents: { id: TalentId; value: unknown; }[];
  powers: PsychicPowerId[];

  // patron: PatronId;
}

export interface CharacteristicValue {
  id: CharacteristicId;
  starting: number;
  advances: number;
}
