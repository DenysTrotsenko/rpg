import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IData } from '@cod/app/data/data.models';
import { DataService } from '@cod/app/data/data.service';

type DataKeys = keyof IData;

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {
  constructor(private data: DataService) {}
  transform(value: number | number[], type: DataKeys): Observable<any> | Observable<any[]> {
    return this.data.data$.pipe(
      map(data => {
        const collection: any[] = data[type] ?? [];

        return Array.isArray(value)
          ? collection.filter(i => value.includes(i.id))
          : collection.find(i => i.id === value);
      })
    );
  }

}
