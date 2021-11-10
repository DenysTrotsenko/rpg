import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable()
export class FunctionsService {
  constructor(private readonly aff: AngularFireFunctions) {}

  call$(name: string, data: object): Observable<any> {
    const fn = this.aff.httpsCallable(name);
    return of(fn(data));
  }
}

