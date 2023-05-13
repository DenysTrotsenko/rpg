import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { FirestoreService, getErrorMessage, Setting, SnackbarService } from '@shared';

@Injectable()
export class SettingService {
  private readonly allObservable: Observable<Setting[]> = this.firestore.collection<Setting>('settings').pipe(
    catchError(() => of([])),
    distinctUntilChanged(),
    shareReplay(1)
  );
  private readonly settingSource: BehaviorSubject<Setting | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('setting')));
  private readonly settingObservable: Observable<Setting | null> = this.settingSource.asObservable().pipe(
    distinctUntilChanged(),
    shareReplay(1)
  );

  get selected$(): Observable<Setting | null> { return this.settingObservable; }
  get all$(): Observable<Setting[]> { return this.allObservable; }

  constructor(
    private readonly firestore: FirestoreService,
    private snackbar: SnackbarService
  ) {}

  setSetting(id: string): void {
    this.all$
      .pipe(
        take(1),
        map(settings => settings.find(i => i.id === id)),
        tap(setting => {
          localStorage.setItem('setting', !!setting ? JSON.stringify(setting) : null);
          this.settingSource.next(!!setting ? setting : null);
        })
      )
      .subscribe();
  }

  // deleteUser(data: AuthWithEmailAndPassword): Observable<User | void> {
  //   return from(this.afa.signInWithEmailAndPassword(data.email, data.password)).pipe(
  //     switchMap(res => res.user.delete()),
  //     catchError((err: firebase.auth.Error) => {
  //       this.snackbar.error(getErrorMessage(err));
  //       return of(null);
  //     })
  //   );
  // }

  // signIn(data: AuthWithEmailAndPassword): Observable<firebase.auth.UserCredential> {
  //   return from(this.afa.signInWithEmailAndPassword(data.email, data.password)).pipe(
  //     catchError((err: firebase.auth.Error) => {
  //       this.snackbar.error(getErrorMessage(err));
  //       return of(null);
  //     })
  //   );
  // }

  // signOut(): Observable<void> {
  //   return from(this.afa.signOut()).pipe(
  //     catchError((err: firebase.auth.Error) => {
  //       this.snackbar.error(getErrorMessage(err));
  //       return of(null);
  //     })
  //   );
  // }

  // signUp(data: AuthWithEmailAndPassword): Observable<firebase.auth.UserCredential> {
  //   return from(this.afa.createUserWithEmailAndPassword(data.email, data.password)).pipe(
  //     catchError((err: firebase.auth.Error) => {
  //       this.snackbar.error(getErrorMessage(err));
  //       return of(null);
  //     })
  //   );
  // }
}
