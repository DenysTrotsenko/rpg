import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, share } from 'rxjs';
import { catchError, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Character } from '@imperium-maledictum-1e/models/character';
import { AuthService, CharacterId, FirestoreService, FS_COLLECTION } from '@shared';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly allObservable: Observable<Character[]> = this.firestore.collection<Character>(FS_COLLECTION.CHARACTERS).pipe(
    catchError(() => of([])),
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  // private readonly ownObservable: Observable<Character[]> = this.auth.auth$.pipe(
  //   switchMap(user => this.firestore.collection<Character>(
  //     FS_COLLECTION.CHARACTERS, ref => ref.where('authors', 'array-contains', user.uid)
  //   )),
  //   catchError(() => of([])),
  //   distinctUntilChanged(),
  //   share({
  //     connector: () => new ReplaySubject(),
  //     resetOnComplete: true,
  //     resetOnError: true,
  //     resetOnRefCountZero: true
  //   })
  // );

  // private readonly ownOrMasterObservable: Observable<Character[]> = this.auth.auth$.pipe(
  //   switchMap(user => this.firestore.collection<Character>(
  //     FS_COLLECTION.CHARACTERS, ref => ref.where('members', 'array-contains', user.uid)
  //   )),
  //   catchError(() => of([])),
  //   distinctUntilChanged(),
  //   share({
  //     connector: () => new ReplaySubject(),
  //     resetOnComplete: true,
  //     resetOnError: true,
  //     resetOnRefCountZero: true
  //   })
  // );

  get all$(): Observable<Character[]> { return this.allObservable; }
  // get author$(): Observable<Character[]> { return this.ownObservable; }
  // get member$(): Observable<Character[]> { return this.ownOrMasterObservable; }

  constructor(
    private readonly auth: AuthService,
    private readonly firestore: FirestoreService
  ) { }

  get(id: CharacterId): Observable<Character>  {
    return this.allObservable.pipe(
      map(all => all.find(i => i.id === id))
    );
  }

  create(character: Character): Observable<void> {
    return this.firestore.update(`characters/${character.id}`, character);
  }

  update(id, data): Observable<void> {
    return this.firestore.update(`characters/${id}`, data);
  }

  delete(id: CharacterId): Observable<void> {
    return this.firestore.delete(`characters/${id}`).pipe(
      tap(() => localStorage.removeItem(id))
    );
  }
}
