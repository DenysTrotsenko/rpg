import { Component, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService, DialogService } from '@shared';
import { Character } from '@imperium-maledictum-1e/models/character';
import { CharacterService } from '../../common/character.service';

interface VM extends Character {
  canDelete: boolean;
}

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly characters$: Observable<VM[]> = combineLatest([
    this.auth.uid$, this.character.member$]
  ).pipe(
    map(([uid, characters]) => characters.map(i => {
      return {
        ...i,
        canDelete: i.authors?.includes(uid)
      };
    }))
  );

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

  trackById(_, i): string { return i.id; }
}
