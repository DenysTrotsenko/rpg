import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'map',
    standalone: false
})
export class MapPipe implements PipeTransform {
  transform<T>(value: T | T[], property: keyof T): any | any[] {
    return Array.isArray(value) ? value?.map(i => i[property]) : value?.[property];
  }
}
