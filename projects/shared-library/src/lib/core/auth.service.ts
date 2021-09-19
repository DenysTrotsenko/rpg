import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import {catchError, distinctUntilChanged, map, shareReplay, switchAll, switchMap, take, tap} from 'rxjs/operators';
import { SnackbarService } from '../snackbar';
import firebase from 'firebase/compat/app';
import User = firebase.User;
import {AuthWithEmailAndPassword} from '../models';

@Injectable()
export class AuthService {
  private readonly authSource: BehaviorSubject<firebase.User | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
  private readonly authObservable: Observable<firebase.User | null> = this.authSource.asObservable()
    .pipe(
      distinctUntilChanged(),
      shareReplay(1)
    );

  get auth$(): Observable<firebase.User | null> { return this.authObservable; }
  get logged$(): Observable<boolean> { return this.auth$.pipe(map(res => !!res)); }

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

  deleteUser(data: AuthWithEmailAndPassword): Observable<User> {
    return from(this.afa.signInWithEmailAndPassword(data.email, data.password)).pipe(
      switchMap(res => res.user.delete()),
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(err.message);
        return of(null);
      })
    );
  }

  signIn(data: AuthWithEmailAndPassword): Observable<firebase.auth.UserCredential> {
    return from(this.afa.signInWithEmailAndPassword(data.email, data.password)).pipe(
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(err.message);
        return of(null);
      })
    );
  }

  signOut(): Observable<void> {
    return from(this.afa.signOut()).pipe(
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(err.message);
        return of(null);
      })
    );
  }

  signUp(data: AuthWithEmailAndPassword): Observable<firebase.auth.UserCredential> {
    return from(this.afa.createUserWithEmailAndPassword(data.email, data.password)).pipe(
      catchError((err: firebase.auth.Error) => {
        this.snackbar.error(err.message);
        return of(null);
      })
    );
  }
}
