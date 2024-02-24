import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import {
  Campaign,
  CampaignEvent,
  CampaignExperience,
  CampaignId,
  CampaignService, Character, CharacterId,
  DialogService,
  FirestoreService, User, UserService
} from '@shared';
import { EventEditDialogComponent } from '../event-edit-dialog/event-edit-dialog.component';
import { XpEditDialogComponent } from '../xp-edit-dialog/xp-edit-dialog.component';
import { TodoMode, TodoTask } from '../../../../../std/src/lib/shared/todo-editor/todo-editor.models';
import { CharacterService } from '../../common/character.service';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {
  readonly campaign = inject(CampaignService);
  readonly character = inject(CharacterService);
  readonly dialog = inject(DialogService);
  readonly firestore = inject(FirestoreService);
  readonly route = inject(ActivatedRoute);
  readonly user = inject(UserService);

  readonly campaign$: Observable<Campaign> = this.route.paramMap.pipe(
    map(params => params.get('id') as CampaignId),
    switchMap(id => this.campaign.get(id)),
    distinctUntilChanged((p: Campaign, q: Campaign) => JSON.stringify(p) === JSON.stringify(q)),
    shareReplay(1)
  );
  readonly members$: Observable<User[]> = combineLatest([this.campaign$, this.user.all$]).pipe(
    map(([campaign, users]) => users.filter(i => campaign?.members?.includes(i.id))),
    shareReplay(1)
  );
  readonly characters$: Observable<Character[]> = combineLatest([this.campaign$, this.character.all$]).pipe(
    map(([campaign, characters]) => characters.filter(i => campaign?.characters?.includes(i.id))),
    shareReplay(1)
  );
  readonly mode$: Observable<TodoMode> = combineLatest([this.campaign$, this.user.me$]).pipe(
    map(([campaign, user]) => campaign.authors.includes(user.id) ? 'edit' : 'view' as TodoMode),
    shareReplay(1)
  );
  readonly hide$: Observable<boolean> = combineLatest([this.campaign$, this.user.me$]).pipe(
    map(([campaign, user]) => !campaign.authors.includes(user.id)),
    shareReplay(1)
  );
  experience$: Observable<{ name: string; value: number; }[]> = combineLatest([
    this.campaign$, this.characters$
  ]).pipe(
    map(([campaign, characters]) => {
      const characterExperienceMap: Map<CharacterId, number> = campaign.experience
        .reduce((acc, cur) => this.getXpMap(acc, cur.tasks), new Map());
      const characterExperienceArr: { name: string; value: number; }[] = Array
        .from(characterExperienceMap)
        .map(entry => ({
          name: characters.find(i => i.id === entry[0])?.name,
          value: entry[1]
        }))
        .filter(i => !!i.name);

      return characterExperienceArr;
    }),
    shareReplay(1)
  );

  onAddEventClick(campaign: Campaign): void {
    this.dialog.open(EventEditDialogComponent, { data: null, width: '800px' })
      .afterClosed()
      .pipe(
        filter(event => !!event),
        switchMap(event => {
          const events: CampaignEvent[] = campaign?.events
            ? [...campaign.events, event]
            : [event];

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign, events
          });
        })
      )
      .subscribe();
  }

  onAddLocationClick(campaign: Campaign): void {
    this.dialog.open(EventEditDialogComponent, { data: null, width: '800px' })
      .afterClosed()
      .pipe(
        filter(location => !!location),
        switchMap(location => {
          const locations: CampaignEvent[] = campaign?.locations
            ? [...campaign.events, location]
            : [location];

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign, locations
          });
        })
      )
      .subscribe();
  }

  onAddPersonaClick(campaign: Campaign): void {
    this.dialog.open(EventEditDialogComponent, { data: null, width: '800px' })
      .afterClosed()
      .pipe(
        filter(persona => !!persona),
        switchMap(persona => {
          const personas: CampaignEvent[] = campaign?.personas
            ? [...campaign.personas, persona]
            : [persona];

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign, personas
          });
        })
      )
      .subscribe();
  }

  onAddExperienceClick(campaign: Campaign): void {
    this.dialog.open(XpEditDialogComponent, { data: {campaign}, width: '800px' })
      .afterClosed()
      .pipe(
        filter(xp => !!xp),
        switchMap(xp => {
          const experience: CampaignExperience[] = campaign?.experience
            ? [...campaign.experience, xp]
            : [xp];

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign, experience
          });
        })
      )
      .subscribe();
  }

  onEditEventClick(event: CampaignEvent): void {
    console.log('Not implemented yet.');
  }

  onDeleteEventClick(id: string): void {
    console.log('Not implemented yet.');
  }

  onEditExperienceClick(event: CampaignExperience): void {
    console.log('Not implemented yet.');
  }

  onDeleteExperienceClick(id: string): void {
    console.log('Not implemented yet.');
  }

  onResultChange(tasks: TodoTask[], campaign: Campaign, xp: CampaignExperience): void {
    const xpRef: CampaignExperience | null = campaign?.experience.find(i => i.id === xp.id);

    if (!xpRef) { return; }

    xpRef.tasks = tasks;

    this.firestore.update(`campaigns/${campaign.id}`, campaign);
  }

  getXpMap(characterExperienceMap: Map<CharacterId, number>, tasks: TodoTask[] = []): Map<CharacterId, number> {
    tasks.forEach(task => {
      task.characters.forEach(characterId => {
        const xp = characterExperienceMap.get(characterId) ?? 0;
        const bonus = task.status === 'completed' ? task.experience : 0;

        characterExperienceMap.set(characterId, xp + bonus);
      });
      this.getXpMap(characterExperienceMap, task.tasks);
    });

    return characterExperienceMap;
  }

  trackById(_, i): string { return i.id; }
}
