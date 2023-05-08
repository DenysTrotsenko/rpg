import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { AuthService, DialogService, FirestoreService } from '@shared';
// import { DataService } from '@ti/app/game/data.service';
// import { Campaign } from '@grim-and-perilous/models/campaign';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  // readonly campaigns$: Observable<Campaign[]> = this.data.campaignsOwn$;
  //
  // constructor(
  //   private readonly auth: AuthService,
  //   private readonly data: DataService,
  //   private readonly dialog: DialogService,
  //   private readonly firestore: FirestoreService
  // ) {}
  //
  // onDeleteClick(i: Campaign): void {
  //   this.dialog
  //     .confirm({
  //       data: {
  //         title: 'Delete Campaign',
  //         description: `Are sure you want to delete this campaign (${i.name})?`,
  //         ok: 'Delete',
  //         cancel: 'Cancel'
  //       }
  //     })
  //     .afterClosed()
  //     .pipe(
  //       filter(res => !!res),
  //       switchMap(() => this.firestore.delete(`campaigns/${i.id}`)),
  //       tap(() => localStorage.removeItem(i.id))
  //     )
  //     .subscribe();
  // }
}
