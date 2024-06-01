import { Pipe, PipeTransform } from '@angular/core';
import {
  BestiaryFaction,
  BestiaryFactionId, BestiaryRole, BestiaryRoleId,
  BestiaryTrait, BestiaryTraitId, BestiaryType, BestiaryTypeId,
  Characteristic, CharacteristicId,
  Skill, SkillId,
  Specialisation, SpecialisationId
} from '@imperium-maledictum-1e/models/common';
import { DataService } from '@im-common';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(value: BestiaryFactionId): BestiaryFaction;
  transform(value: BestiaryRoleId): BestiaryRole;
  transform(value: BestiaryTraitId): BestiaryTrait;
  transform(value: BestiaryTypeId): BestiaryType;
  transform(value: CharacteristicId): Characteristic;
  transform(value: SkillId): Skill;
  transform(value: SpecialisationId): Specialisation;
  transform(id: any): any { return this.data.get(id); }

}
