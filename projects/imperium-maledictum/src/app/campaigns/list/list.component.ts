import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { AuthService, Campaign, CampaignService, DialogService, FirestoreService } from '@shared';


@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly campaigns$: Observable<Campaign[]> = this.campaign.all$;

  constructor(
    private readonly auth: AuthService,
    private readonly campaign: CampaignService,
    private readonly dialog: DialogService,
    private readonly firestore: FirestoreService
  ) {}

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
        switchMap(() => this.firestore.delete(`campaigns/${i.id}`)),
        tap(() => localStorage.removeItem(i.id))
      )
      .subscribe();
  }
}
