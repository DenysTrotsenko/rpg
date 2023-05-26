import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Campaign, CampaignEvent, CampaignId, CampaignService } from '@shared';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {
  readonly campaign$: Observable<Campaign> = this.route.paramMap
    .pipe(
      map(res => res.get('id') as CampaignId),
      switchMap(id => this.campaign.get(id))
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
    private readonly route: ActivatedRoute,
  ) {}

  onEventAddClick(): void {
  }

  onEventEditClick(event: CampaignEvent): void {}

  onEventDeleteClick(id: string): void {}
}
