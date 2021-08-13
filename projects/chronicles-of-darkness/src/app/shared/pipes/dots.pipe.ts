import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dots'
})
export class DotsPipe implements PipeTransform {
  transform(value: number): string {
    return !!value ? Array(value).fill('●').join('') : '';
  }
}
