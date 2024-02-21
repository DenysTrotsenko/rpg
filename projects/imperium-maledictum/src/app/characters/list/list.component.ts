import { Component, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService, CampaignService, Character, DialogService } from '@shared';
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

  constructor(
    private readonly auth: AuthService,
    private readonly campaign: CampaignService,
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
