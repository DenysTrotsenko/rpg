import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { DialogService, FirestoreService } from '@shared';
import { Shadowrunner } from '@shadowrun/app/5e/5e.shadowrunner';
import { PORTRAITS } from '@shadowrun/app/ui/ui.models';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly portraits = PORTRAITS;
  readonly characters$: Observable<Shadowrunner[]> = this.firestore.collection<Shadowrunner>('characters');

  constructor(private readonly dialog: DialogService, private readonly firestore: FirestoreService) {}

  onDeleteClick(i: Shadowrunner): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete Character',
          description: `Are sure you want to delete this character (${i.name})?`,
          ok: 'Delete',
          cancel: 'Cancel'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(() => this.firestore.delete(`characters/${i.id}`))
      )
      .subscribe();
  }
}
