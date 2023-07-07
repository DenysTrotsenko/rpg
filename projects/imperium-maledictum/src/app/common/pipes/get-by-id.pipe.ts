import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
