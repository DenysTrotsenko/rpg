import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { Campaign, CampaignEvent, CampaignId, CampaignService, DialogService, FirestoreService } from '@shared';
import { EventEditDialogComponent } from '../event-edit-dialog/event-edit-dialog.component';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {
  readonly campaign$: Observable<Campaign> = this.route.paramMap.pipe(
    map(params => params.get('id') as CampaignId),
    switchMap(id => this.campaign.get(id)),
    distinctUntilChanged((p: Campaign, q: Campaign) => JSON.stringify(p) === JSON.stringify(q)),
    shareReplay(1)
  );

  // readonly itemGroups = [
  //   { icon: 'swords', label: 'Melee Weapons' },
  //   { icon: 'explosion', label: 'Grenades & Explosives' },
  //   { icon: 'shield', label: 'Armour' },
  //   { icon: 'handyman', label: 'Tools' },
  //   { icon: 'night_shelter', label: 'Accommodations & Lodgings' },
  //   { icon: 'lunch_dining', label: 'Provisions & Meals' },
  //   { icon: 'syringe', label: 'Drugs' },
  // ];

  constructor(
    private readonly campaign: CampaignService,
    private readonly dialog: DialogService,
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
  ) {}

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

  onEditEventClick(event: CampaignEvent): void {
    console.log('Not implemented yet.');
  }

  onDeleteEventClick(id: string): void {
    console.log('Not implemented yet.');
  }
}
