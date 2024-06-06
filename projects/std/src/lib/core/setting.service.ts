import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, share } from 'rxjs';
import { catchError, distinctUntilChanged, map, take, tap } from 'rxjs/operators';
import { FirestoreService, Setting, SettingId } from '@std';

@Injectable()
export class SettingService {
  private readonly allObservable: Observable<Setting[]> = this.firestore.collection<Setting>('settings').pipe(
    catchError(() => of([])),
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );
  private readonly settingSource: BehaviorSubject<Setting | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('setting')));
  private readonly settingObservable: Observable<Setting | null> = this.settingSource.asObservable().pipe(
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  get selected$(): Observable<Setting | null> { return this.settingObservable; }
  get all$(): Observable<Setting[]> { return this.allObservable; }

  constructor(private readonly firestore: FirestoreService) {}

  set(id: string): void {
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

  create(): void {}

  update(id: SettingId, setting: Setting): Observable<void> {
    return this.firestore.update(`settings/${id}`, setting);
  }

  delete(): void {}
}
