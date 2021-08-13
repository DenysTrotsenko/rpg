import { Component, ChangeDetectionStrategy } from '@angular/core';
import { filter, shareReplay, switchMap } from 'rxjs/operators';
import { DialogService, FirestoreService } from '@shared';
import { ICharacter } from '@cod/app/data/data.models';
import { EMPTY, Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly characters$: Observable<ICharacter[]> = this.firestore.collection<ICharacter>('characters');

  constructor(
    private readonly dialog: DialogService,
    private readonly firestore: FirestoreService
  ) {}

  trackByFn(index, item): number { return item.id; }

  onEditClick(i: ICharacter): void {}

  onDeleteClick(i: ICharacter): void {
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
