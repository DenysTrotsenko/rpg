import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'find',
    standalone: false
})
export class FindPipe implements PipeTransform {
  transform<T>(value: T[], property: string, comparator: any): T {
    return value?.find(i => i[property] === comparator);
  }
}
