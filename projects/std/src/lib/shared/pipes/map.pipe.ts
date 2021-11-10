import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {
  transform(value: object | object[], property: string): any | any[] {
    return Array.isArray(value) ? value.map(i => i[property]) : value[property];
  }
}
