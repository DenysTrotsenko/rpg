import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTruthy',
    standalone: false
})
export class FilterTruthyPipe implements PipeTransform {
  transform<T>(value: T[]): T[] {
    return value?.filter(i => !!i);
  }
}
