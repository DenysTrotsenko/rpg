import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, share } from 'rxjs';
import {
  AuthService,
  Campaign,
  CampaignId,
  FirestoreService,
  FS_COLLECTION,
  SettingService
} from '@std';
import { catchError, distinctUntilChanged, map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private readonly auth = inject(AuthService);
  private readonly firestore = inject(FirestoreService);
  private readonly setting = inject(SettingService);

  private readonly allObservable: Observable<Campaign[]> = this.firestore.collection<Campaign>(FS_COLLECTION.CAMPAIGNS).pipe(
    catchError(() => of([])),
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  private readonly authorObservable: Observable<Campaign[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Campaign>(
      FS_COLLECTION.CAMPAIGNS, ref => ref.where('authors', 'array-contains', user.uid)
    )),
    catchError(() => of([])),
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  readonly memberObservable: Observable<Campaign[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Campaign>(
      FS_COLLECTION.CAMPAIGNS, ref => ref.where('members', 'array-contains', user.uid)
    )),
    catchError(() => of([])),
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  private readonly campaignSource: BehaviorSubject<Campaign | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('campaign')));
  private readonly campaignObservable: Observable<Campaign | null> = this.campaignSource.asObservable().pipe(
    distinctUntilChanged(),
    share({
      connector: () => new ReplaySubject(),
      resetOnComplete: true,
      resetOnError: true,
      resetOnRefCountZero: true
    })
  );

  get selected$(): Observable<Campaign | null> { return this.campaignObservable; }
  get all$(): Observable<Campaign[]> { return this.allObservable; }
  get author$(): Observable<Campaign[]> { return this.authorObservable; }
  get member$(): Observable<Campaign[]> { return this.memberObservable; }

  get(id: CampaignId): Observable<Campaign>  {
    return this.allObservable.pipe(
      map(all => all?.find(i => i.id === id))
    );
  }

  set(id: CampaignId): void {
    this.all$
      .pipe(
        take(1),
        map(campaigns => campaigns.find(i => i.id === id)),
        tap(campaign => {
          localStorage.setItem('campaign', !!campaign ? JSON.stringify(campaign) : null);
          this.campaignSource.next(!!campaign ? campaign : null);
          this.setting.set(!!campaign ? campaign.setting : null);
        })
      )
      .subscribe();
  }

  create(): void {}
  update(): void {}
  delete(): void {}
}
