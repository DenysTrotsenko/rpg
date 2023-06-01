import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, share } from 'rxjs';
import { catchError, distinctUntilChanged, map, take, tap } from 'rxjs/operators';
import { AuthService, FirestoreService, FS_COLLECTION, User, UserId } from '@shared';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly allObservable: Observable<User[]> = this.firestore.collection<User>(FS_COLLECTION.USERS).pipe(
    catchError(() => of([])),
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  private readonly userSource: BehaviorSubject<User | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
  private readonly userObservable: Observable<User | null> = this.userSource.asObservable().pipe(
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  get selected$(): Observable<User | null> { return this.userObservable; }
  get all$(): Observable<User[]> { return this.allObservable; }

  constructor(
    private readonly auth: AuthService,
    private readonly firestore: FirestoreService
  ) {}

  get(id: UserId): Observable<User>  {
    return this.allObservable.pipe(
      map(all => all.find(i => i.id === id))
    );
  }

  set(id: UserId): void {
    this.all$
      .pipe(
        take(1),
        map(users => users.find(i => i.id === id)),
        tap(user => {
          localStorage.setItem('user', !!user ? JSON.stringify(user) : null);
          this.userSource.next(!!user ? user : null);
        })
      )
      .subscribe();
  }

  // create(user: User): Observable<void> {
  //   return this.firestore.update(`users/${user.id}`, user);
  // }

  update(id: UserId, user: User): Observable<void> {
    return this.firestore.update(`users/${id}`, user);
  }

  // delete(id: UserId): Observable<void> {
  //   return this.firestore.delete(`users/${id}`).pipe(
  //     tap(() => localStorage.removeItem(id))
  //   );
  // }
}
