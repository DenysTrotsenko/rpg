import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, share } from 'rxjs';
import { Campaign, FirestoreService, FS_COLLECTION } from '@shared';
import { catchError, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
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
  // private readonly settingSource: BehaviorSubject<Setting | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('campaign')));
  // private readonly settingObservable: Observable<Setting | null> = this.settingSource.asObservable().pipe(
  //   distinctUntilChanged(),
  //   share({
  //     connector: () => new ReplaySubject(),
  //     resetOnComplete: true,
  //     resetOnError: true,
  //     resetOnRefCountZero: true
  //   })
  // );

  get all$(): Observable<Campaign[]> { return this.allObservable; }

  constructor(private readonly firestore: FirestoreService) { }
}
