import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { CampaignId } from '@imperium-maledictum-1e/models/common';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private readonly campaignSource: BehaviorSubject<CampaignId | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('campaign')));
  private readonly campaignObservable: Observable<CampaignId | null> = this.campaignSource.asObservable()
    .pipe(
      distinctUntilChanged(),
      shareReplay(1)
    );

  get campaign$(): Observable<CampaignId | null> { return this.campaignObservable; }

  setCampaign(id: CampaignId): void {
    localStorage.setItem('campaign', !!id ? JSON.stringify(id) : null);
    this.campaignSource.next(id);
  }
}
