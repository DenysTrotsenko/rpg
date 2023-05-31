import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService, DialogService } from '@shared';
import { Character } from '@imperium-maledictum-1e/models/character';
import { CharacterService } from '../../common/character.service';

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
    private readonly dialog: DialogService
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
        switchMap(() => this.character.delete(i.id)),
      )
      .subscribe();
  }
}
