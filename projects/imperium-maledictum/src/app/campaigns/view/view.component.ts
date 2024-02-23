import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import {
  Campaign,
  CampaignEvent,
  CampaignExperience,
  CampaignId,
  CampaignService, Character,
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

  getNormalizedExperience(users: User[], xp: CampaignExperience): { name: string; value: number; }[] {
    // return Object.entries(xp?.value ?? {}).map(i => {
    //   const user = users.find(j => j.id === i[0]);
    //   return {
    //     name: user?.name ?? user?.email,
    //     value: i[1]
    //   };
    // });
    return [];
  }

  getTotalNormalizedExperience(users: User[], xp: CampaignExperience[]): { name: string; value: number; }[] {
    // const reducedXp = xp?.reduce((acc, cur) => {
    //   Object.entries(cur.value).forEach(entry => {
    //     const id = entry[0];
    //     const value = entry[1] ?? 0;
    //
    //     acc[id] = !!acc[id] ? acc[id] + value : value;
    //   });
    //
    //   return acc;
    // }, {} as Record<string, number>);
    //
    // return Object.entries(reducedXp ?? {}).map(i => {
    //   const user = users.find(j => j.id === i[0]);
    //   return {
    //     name: user?.name ?? user?.email,
    //     value: i[1]
    //   };
    // });
    return [];
  }

  trackById(_, i): string { return i.id; }
}
