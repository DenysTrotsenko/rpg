import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '@ti/app/game/data.service';
import { Archetype, Attribute, Profession, Quirk, Skill, Talent, Trait } from '@flames-of-freedom-1e/models';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(value: number, type: string): Archetype | Attribute | Profession | Quirk | Skill | Talent | Trait {
    const data = this.data[type];
    return !!data ? data.find(i => i.id === value) : value;
  }
}
