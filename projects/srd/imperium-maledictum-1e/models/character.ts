import { Character } from '@std';
import {
  CharacteristicId, FactionId, OriginId,
  PsychicPowerId, RoleId,
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
  talents: TalentId[];
  powers: PsychicPowerId[];
  // patron: PatronId;
}

export interface CharacteristicValue {
  id: CharacteristicId;
  starting: number;
  advances: number;
}

// export interface TalentValue {
//   id: TalentId;
//   value: unknown;
// }

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
