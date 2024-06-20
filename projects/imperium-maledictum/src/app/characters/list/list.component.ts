import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService, CampaignService, DialogService } from '@std';
import { CharacterService } from '../../character.service';
import { ImperiumMaledictumCharacter } from '@imperium-maledictum-1e/models/character';


interface VM extends ImperiumMaledictumCharacter {
  canDelete: boolean;
}

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
        return {
          ...i,
          canDelete: i.author === uid
        };
      });
    })
  );

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
