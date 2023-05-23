import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable()
export class FunctionsService {
  constructor(private readonly aff: AngularFireFunctions) {}

  call$(name: string, data: object): Observable<any> {
    return this.aff.httpsCallable(name)(data);
  }
}

