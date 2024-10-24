import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, share } from 'rxjs';
import { catchError, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { AuthService, CharacterId, FirestoreService, FS_COLLECTION } from '@std';
import { ImperiumMaledictumCharacter as Character } from '@imperium-maledictum-1e/models/character';

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

  get all$(): Observable<Character[]> { return this.allObservable; }

  constructor(
    private readonly auth: AuthService,
    private readonly firestore: FirestoreService
  ) {}

  get(id: CharacterId): Observable<Character | null>  {
    return this.allObservable.pipe(
      map(all => all.find(i => i.id === id))
    );
  }

  create(character: Character): Observable<void> {
    return this.firestore.update(`characters/${character.id}`, character);
  }

  update(id: CharacterId, data: Partial<Character>): Observable<void> {
    return this.firestore.update(`characters/${id}`, data);
  }

  delete(id: CharacterId): Observable<void> {
    return this.firestore.delete(`characters/${id}`).pipe(
      tap(() => localStorage.removeItem(id))
    );
  }
}
