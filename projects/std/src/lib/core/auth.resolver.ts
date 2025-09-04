import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat/app';
import User = firebase.User;

@Injectable()
export class AuthResolver  {
  constructor(private auth: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.auth.auth$.pipe(take(1));
  }
}
