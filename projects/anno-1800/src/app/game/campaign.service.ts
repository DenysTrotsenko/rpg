import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { Campaign } from '@ti/app/game/models/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private readonly campaignSource: BehaviorSubject<Campaign | null> = new BehaviorSubject(JSON.parse(localStorage.getItem('campaign')));
  private readonly campaignObservable: Observable<Campaign | null> = this.campaignSource.asObservable()
    .pipe(
      distinctUntilChanged(),
      shareReplay(1)
    );

  get campaign$(): Observable<Campaign | null> { return this.campaignObservable; }

  setSelectedCampaign(campaign: Campaign): void {
    localStorage.setItem('campaign', campaign ? JSON.stringify(campaign) : null);
    this.campaignSource.next(campaign);
  }
}
