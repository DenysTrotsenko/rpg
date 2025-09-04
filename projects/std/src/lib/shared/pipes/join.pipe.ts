import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join',
    standalone: false
})
export class JoinPipe implements PipeTransform {
  transform(value: unknown[], separator: string): string {
    return value?.join(separator);
  }
}
