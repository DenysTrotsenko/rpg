import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
    standalone: false
})
export class SortPipe implements PipeTransform {
  transform<T>(value: T[], property: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
    return value?.sort((a, b) => {
      const aProp = a[property] as number;
      const bProp = b[property] as number;
      const isNumbers = typeof aProp === 'number' && typeof bProp === 'number';

      if (!isNumbers) {
        return 0;
      }

      if (order === 'asc') {
        return aProp - bProp;
      } else if (order === 'desc') {
        return bProp - aProp;
      }
      return 0;
    });
  }
}
