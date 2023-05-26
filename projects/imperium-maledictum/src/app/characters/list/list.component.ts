import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { AuthService, DialogService, FirestoreService } from '@shared';
import { Character } from '@imperium-maledictum-1e/models/character';
import { CharacterService } from '../../common/character.service';
// import { DataService } from '../../game/data.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly characters$: Observable<Character[]> = this.character.member$;

  constructor(
    private readonly auth: AuthService,
    private readonly character: CharacterService,
    // private readonly data: DataService,
    private readonly dialog: DialogService,
    private readonly firestore: FirestoreService
  ) {}

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
        switchMap(() => this.firestore.delete(`characters/${i.id}`)),
        tap(() => localStorage.removeItem(i.id))
      )
      .subscribe();
  }
}
