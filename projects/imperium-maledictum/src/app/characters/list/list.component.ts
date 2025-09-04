import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { combineLatest, Observable, take } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService, CampaignService, DialogService } from '@std';
import { CharacterService } from '../../character.service';
import { ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';
import { AdvancementDialogComponent } from '@im-common';

interface VM extends ImperiumMaledictumCharacter {
  canAdvance: boolean;
  canDelete: boolean;
}

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ListComponent {
  private readonly auth = inject(AuthService);
  private readonly campaign = inject(CampaignService);
  private readonly character = inject(CharacterService);
  private readonly dialog = inject(DialogService);

  readonly characters$: Observable<VM[]> = combineLatest([
    this.auth.uid$, this.character.all$, this.campaign.all$]
  ).pipe(
    map(([uid, characters, campaigns]) => {
      const filtered = characters.filter(i => {
        const campaign = campaigns.find(j => j.id === i.campaign);
        const isMy = i.author === uid;
        const isMaster = campaign?.authors?.includes(uid);

        return isMy || isMaster;
      });

      return filtered.map(i => {
        const own = i.author === uid;

        return {
          ...i,
          canAdvance: own,
          canDelete: own,
        };
      });
    })
  );

  onAdvanceClick(id: string): void {
    this.character.all$
      .pipe(
        take(1),
        map(characters => characters.find(c => c.id === id)),
        switchMap(character => this.dialog.open(AdvancementDialogComponent, {
          data: character,
          width: '600px'
        }).afterClosed()),
        filter(character => !!character),
        switchMap(character => this.character.update(character.id, character))
      )
      .subscribe();
  }

  onDeleteClick(i: VM): void {
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
