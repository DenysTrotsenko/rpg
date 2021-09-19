import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable()
export class FunctionsService {
  private readonly helloWorld = this.aff.httpsCallable('getCharacters');

  constructor(private readonly aff: AngularFireFunctions) {}

  sendMessage(text: string): Observable<any> {
    return from(this.helloWorld({
      search: text
    }));
  }
}

