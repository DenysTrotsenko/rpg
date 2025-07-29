import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy',
    standalone: false
})
export class FilterByPipe implements PipeTransform {
  transform<T>(value: T[], property: string, comparator: any): T[] {
    return value?.filter(i => i[property] === comparator);
  }
}
