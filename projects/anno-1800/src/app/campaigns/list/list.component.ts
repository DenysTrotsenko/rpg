import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService, DialogService, FirestoreService } from '@shared';
import { Campaign } from '@ti/app/game/models/campaign';
import { CampaignService } from '@ti/app/game/campaign.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly campaigns$: Observable<Campaign[]> = this.auth.auth$.pipe(
    switchMap(user => this.firestore.collection<Campaign>('campaigns', ref => ref.where('author', '==', user.uid)))
  );

  constructor(
    private readonly auth: AuthService,
    private readonly dialog: DialogService,
    private readonly firestore: FirestoreService,
    private readonly campaign: CampaignService
  ) {}

  onSelectClick(i: Campaign): void {
    this.campaign.setSelectedCampaign(i);
  }

  onDeleteClick(i: Campaign): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete Campaign',
          description: `Are sure you want to delete this campaign (${i.name})?`,
          ok: 'Delete',
          cancel: 'Cancel'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(() => this.firestore.delete(`campaigns/${i.id}`))
      )
      .subscribe();
  }
}
