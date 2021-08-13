import { Pipe, PipeTransform } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { EMPTY, Observable } from 'rxjs';

@Pipe({
  name: 'getUrl'
})
export class GetUrlPipe implements PipeTransform {
  constructor(private readonly storage: AngularFireStorage) {}
  transform(value: string): Observable<string> {
    return !!value
      ? this.storage.ref(`images/${value}`).getDownloadURL()
      : EMPTY;
  }
}
