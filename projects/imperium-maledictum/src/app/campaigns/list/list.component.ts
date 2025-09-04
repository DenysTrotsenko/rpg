import { Component, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AuthService, Campaign, CampaignService, DialogService, FirestoreService } from '@std';

interface VM extends Campaign {
  canEdit: boolean;
  canDelete: boolean;
}

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ListComponent {
  readonly campaigns$: Observable<VM[]> = combineLatest([
    this.auth.uid$, this.campaign.member$, this.campaign.selected$
  ]).pipe(
    map(([uid, campaigns, selected]) => campaigns
      .filter(i => i.id === selected.id)
      .map(i => {
        return {
          ...i,
          canEdit: i.authors?.includes(uid),
          canDelete: i.authors?.includes(uid)
        };
      })
    )
  );

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

  trackById(_, i): string { return i.id; }
}
