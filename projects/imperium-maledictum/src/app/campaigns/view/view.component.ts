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
  FirestoreService, FS_COLLECTION, User, UserService
} from '@std';
import { EventEditDialogComponent, EventEditDialogData } from '../event-edit-dialog/event-edit-dialog.component';
import { XpEditDialogComponent, XpEditDialogData } from '../xp-edit-dialog/xp-edit-dialog.component';
import { TodoMode, TodoTask } from '@std';
import { CharacterService } from '../../character.service';
import {
  JsonEditorDialogComponent
} from '../../../../../std/src/lib/shared/json-editor-dialog/json-editor-dialog.component';

@Component({
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ViewComponent {
  readonly campaign = inject(CampaignService);
  readonly character = inject(CharacterService);
  readonly dialog = inject(DialogService);
  readonly firestore = inject(FirestoreService);
  readonly route = inject(ActivatedRoute);
  readonly user = inject(UserService);

  readonly id$: Observable<CampaignId> = this.route.paramMap.pipe(
    map(params => params.get('id') as CampaignId),
    distinctUntilChanged(),
    shareReplay(1)
  );
  readonly campaign$: Observable<Campaign> = this.id$.pipe(
    switchMap(id => this.campaign.get(id)),
    distinctUntilChanged((p: Campaign, q: Campaign) => JSON.stringify(p) === JSON.stringify(q)),
    shareReplay(1)
  );
  readonly path$: Observable<string> = this.id$.pipe(
    map(id => `${FS_COLLECTION.CAMPAIGNS}/${id}/images`),
    distinctUntilChanged(),
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
      const characterExperienceMap: Map<CharacterId, number> = (campaign.experience ?? [])
        .reduce((acc, cur) => this.updateXpMap(acc, cur.tasks), new Map());
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
    const data: EventEditDialogData = {
      title: 'Add Event',
      members: campaign.members,
      event: null,
      campaign: campaign.id
    };
    this.dialog.open(EventEditDialogComponent, { data, width: '800px' })
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
    const data: EventEditDialogData = {
      title: 'Add Location',
      members: campaign.members,
      event: null,
      campaign: campaign.id
    };
    this.dialog.open(EventEditDialogComponent, { data, width: '800px' })
      .afterClosed()
      .pipe(
        filter(location => !!location),
        switchMap(location => {
          const locations: CampaignEvent[] = campaign?.locations
            ? [...campaign.locations, location]
            : [location];

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign, locations
          });
        })
      )
      .subscribe();
  }

  onAddPersonaClick(campaign: Campaign): void {
    const data: EventEditDialogData = {
      title: 'Add Persona',
      members: campaign.members,
      event: null,
      campaign: campaign.id
    };
    this.dialog.open(EventEditDialogComponent, { data, width: '800px' })
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

  onJsonClick(campaign: Campaign): void {
    this.dialog.open(JsonEditorDialogComponent, {
      data: campaign,
      width: '1200px'
    }).afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(result => this.firestore.update(`campaigns/${campaign.id}`, result))
      )
      .subscribe();
  }

  onEditEventClick(event: CampaignEvent, campaign: Campaign): void {
    const data: EventEditDialogData = {
      title: 'Edit Event',
      members: campaign.members,
      event,
      campaign: campaign.id
    };
    this.dialog.open(EventEditDialogComponent, { data, width: '800px' })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => {
          const index = campaign?.events?.findIndex(i => i.id === event.id);

          campaign.events[index] = res;

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign
          });
        })
      )
      .subscribe();
  }

  onDeleteEventClick(id: string, campaign: Campaign): void {
    this.onDeleteDialog(() => this.firestore.update(`campaigns/${campaign.id}`, {
      ...campaign,
      events: campaign?.events.filter(i => i.id !== id)
    }));
  }

  onEditLocationClick(event: CampaignEvent, campaign: Campaign): void {
    const data: EventEditDialogData = {
      title: 'Edit Location',
      members: campaign.members,
      event,
      campaign: campaign.id
    };
    this.dialog.open(EventEditDialogComponent, { data, width: '800px' })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => {
          const index = campaign?.locations?.findIndex(i => i.id === event.id);

          campaign.locations[index] = res;

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign
          });
        })
      )
      .subscribe();
  }

  onDeleteLocationClick(id: string, campaign: Campaign): void {
    this.onDeleteDialog(() => this.firestore.update(`campaigns/${campaign.id}`, {
      ...campaign,
      locations: campaign?.locations.filter(i => i.id !== id)
    }));
  }

  onEditPersonaClick(event: CampaignEvent, campaign: Campaign): void {
    const data: EventEditDialogData = {
      title: 'Edit Persona',
      members: campaign.members,
      event,
      campaign: campaign.id
    };
    this.dialog.open(EventEditDialogComponent, { data, width: '800px' })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => {
          const index = campaign?.personas?.findIndex(i => i.id === event.id);

          campaign.personas[index] = res;

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign
          });
        })
      )
      .subscribe();
  }

  onDeletePersonaClick(id: string, campaign: Campaign): void {
    this.onDeleteDialog(() => this.firestore.update(`campaigns/${campaign.id}`, {
      ...campaign,
      personas: campaign?.personas.filter(i => i.id !== id)
    }));
  }

  onEditExperienceClick(event: CampaignExperience, campaign: Campaign): void {
    const data: XpEditDialogData = {
      event
    };
    this.dialog.open(XpEditDialogComponent, { data, width: '800px' })
      .afterClosed()
      .pipe(
        filter(xp => !!xp),
        switchMap(xp => {
          const index = campaign?.experience?.findIndex(i => i.id === event.id);

          campaign.experience[index] = xp;

          return this.firestore.update(`campaigns/${campaign.id}`, {
            ...campaign
          });
        })
      )
      .subscribe();
  }

  onDeleteExperienceClick(id: string, campaign: Campaign): void {
    this.onDeleteDialog(() => this.firestore.update(`campaigns/${campaign.id}`, {
      ...campaign,
      experience: campaign?.experience.filter(i => i.id !== id)
    }));
  }

  onResultChange(tasks: TodoTask[], campaign: Campaign, xp: CampaignExperience): void {
    const xpRef: CampaignExperience | null = campaign?.experience.find(i => i.id === xp.id);

    if (!xpRef) { return; }

    xpRef.tasks = tasks;

    this.firestore.update(`campaigns/${campaign.id}`, campaign);
  }

  updateXpMap(characterExperienceMap: Map<CharacterId, number>, tasks: TodoTask[] = []): Map<CharacterId, number> {
    tasks.forEach(task => {
      task.characters.forEach(characterId => {
        const xp = characterExperienceMap.get(characterId) ?? 0;
        const bonus = task.status === 'completed' ? task.experience : 0;

        characterExperienceMap.set(characterId, xp + bonus);
      });
      this.updateXpMap(characterExperienceMap, task.tasks);
    });

    return characterExperienceMap;
  }

  trackById(_, i): string { return i.id; }

  private onDeleteDialog(cb: () => Observable<void>): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete Entry',
          description: `Are sure you want to delete this entry?`,
          ok: 'Delete',
          cancel: 'Cancel'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(() => cb())
      )
      .subscribe();
  }
}
