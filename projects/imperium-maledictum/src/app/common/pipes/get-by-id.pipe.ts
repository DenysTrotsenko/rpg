import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../data.service';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(id: string): unknown { return this.data.get(id); }

}
