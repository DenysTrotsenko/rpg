import { inject, Pipe, PipeTransform } from '@angular/core';
import {
  BestiaryTrait, BestiaryTraitId,
  Characteristic, CharacteristicId,
  Skill, SkillId,
  Specialisation, SpecialisationId
} from '@imperium-maledictum-1e/models/common';
import { DataService } from '@im-common';

@Pipe({
  name: 'getById',
  standalone: true
})
export class GetByIdPipe implements PipeTransform {
  private readonly data = inject(DataService);

  transform(value: BestiaryTraitId): BestiaryTrait;
  transform(value: CharacteristicId): Characteristic;
  transform(value: SkillId): Skill;
  transform(value: SpecialisationId): Specialisation;
  transform(id: any): any { return this.data.get(id); }

}
