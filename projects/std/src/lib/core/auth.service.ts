import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { SnackbarService } from '../snackbar';
import firebase from 'firebase/compat/app';
import { AuthWithEmailAndPassword, UserId } from '../models';
import { getErrorMessage } from '../utils';

@Injectable()
export class AuthService {
  private readonly authSource: BehaviorSubject<firebase.User | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
  private readonly authObservable: Observable<firebase.User | null> = this.authSource.asObservable().pipe(
    distinctUntilChanged(),
    shareReplay(1)
  );
  private readonly optionSource: Subject<unknown> = new Subject();
  private readonly optionObservable: Observable<unknown> = this.optionSource.asObservable().pipe(
    distinctUntilChanged(),
    shareReplay(1)
  );

  get auth$(): Observable<firebase.User | null> { return this.authObservable; }
  get logged$(): Observable<boolean> { return this.auth$.pipe(map(res => !!res)); }
  get option$(): Observable<unknown> { return this.optionObservable; }
  get uid$(): Observable<UserId | null> { return this.auth$.pipe(map(res => res?.uid as UserId)); }

  constructor(private afa: AngularFireAuth, private snackbar: SnackbarService) {
    this.afa.authState
      .pipe(
        tap((user: firebase.User | null) => {
          localStorage.setItem('user', user ? JSON.stringify(user) : null);
          this.authSource.next(user);
        })
      )
      .subscribe();
  }

  deleteUser(data: AuthWithEmailAndPassword): Observable<firebase.User | void> {
    return from(this.afa.signInWithEmailAndPassword(data.email, data.password)).pipe(
      switchMap(res => res.user.delete()),
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(getErrorMessage(err));
        return of(null);
      })
    );
  }

  setOption(value: unknown): void {
    this.optionSource.next(value);
  }

  signIn(data: AuthWithEmailAndPassword): Observable<firebase.auth.UserCredential> {
    return from(this.afa.signInWithEmailAndPassword(data.email, data.password)).pipe(
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(getErrorMessage(err));
        return of(null);
      })
    );
  }

  signOut(): Observable<void> {
    return from(this.afa.signOut()).pipe(
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(getErrorMessage(err));
        return of(null);
      })
    );
  }

  signUp(data: AuthWithEmailAndPassword): Observable<firebase.auth.UserCredential> {
    return from(this.afa.createUserWithEmailAndPassword(data.email, data.password)).pipe(
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(getErrorMessage(err));
        return of(null);
      })
    );
  }
}
