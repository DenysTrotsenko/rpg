import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, switchMap, take } from 'rxjs/operators';
import { AuthService, FirestoreService } from '@shared';
import { User } from './core.models';

@Injectable()
export class UserService {
  private readonly id$: Observable<string> = this.auth.auth$
    .pipe(map(auth => !!auth ? auth.uid : null));
  readonly user$: Observable<User> = this.id$
    .pipe(
      switchMap(id => !!id ? this.firestore.doc<User>(`users/${id}`) : of(null)),
      distinctUntilChanged(),
      shareReplay(1)
    );

  constructor(private readonly auth: AuthService, private readonly firestore: FirestoreService) {}

  isAdmin(): Observable<boolean> {
    return this.user$.pipe(map(user => user?.permissions?.admin));
  }

  isMaster(): Observable<boolean> {
    return of(false);
  }

  update(data: object): Observable<void> {
    return this.id$
      .pipe(
        take(1),
        switchMap(id => this.firestore.update(`users/${id}`, data))
      );
  }
}
