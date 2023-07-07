import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';
import {
  BestiaryTrait, BestiaryTraitId,
  Characteristic, CharacteristicId,
  Skill, SkillId,
  Specialisation, SpecialisationId
} from '@imperium-maledictum-1e/models/common';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(value: BestiaryTraitId, type: string): BestiaryTrait;
  transform(value: CharacteristicId, type: string): Characteristic;
  transform(value: SkillId, type: string): Skill;
  transform(value: SpecialisationId, type: string): Specialisation;
  transform(id: string): any { return this.data.get(id); }

}
