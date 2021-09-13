import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { DialogService, FirestoreService } from '@shared';
import { Character } from '@shadowrun/app/5e/5e.models';
import { PORTRAITS } from '@shadowrun/app/ui/ui.models';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly portraits = PORTRAITS;
  readonly characters$: Observable<Character[]> = this.firestore.collection<Character>('characters');

  constructor(private readonly dialog: DialogService, private readonly firestore: FirestoreService) {}

  onDeleteClick(i: Character): void {
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
