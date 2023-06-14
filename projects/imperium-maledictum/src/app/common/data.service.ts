import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService, Campaign, CampaignService, Setting, SettingService, StorageService } from '@shared';
import { Characteristic, Specialisation } from '@imperium-maledictum-1e/models/common';
import { FileName } from '@imperium-maledictum-1e/models/enums';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly campaign$: Observable<Campaign | null> = this.campaign.selected$;
  readonly setting$: Observable<Setting> = this.campaign$.pipe(
    map(campaign => campaign?.setting),
    switchMap(id => this.setting.all$.pipe(
      map(settings => settings.find(i => i.id === id))
    ))
  );
  readonly storage$: Observable<string> = this.setting$.pipe(
    map(setting => setting?.storage),
    filter(storage => !!storage)
  );

  readonly characteristics$: Observable<Characteristic[]> = this.storage$.pipe(
    map(storage => `/${storage}/${FileName.CHARACTERISTICS}`),
    switchMap(path => this.storage.download<Characteristic[]>(path))
  );
  readonly specialisations$: Observable<Specialisation[]> = this.storage$.pipe(
    map(storage => `/${storage}/${FileName.SPECIALISATIONS}`),
    switchMap(path => this.storage.download<Specialisation[]>(path))
  );

  constructor(
    private readonly auth: AuthService,
    private readonly campaign: CampaignService,
    private readonly setting: SettingService,
    private readonly storage: StorageService
  ) {}
  // private getAfflictionTooltip(affliction: Affliction): string {
  //   return [
  //     `${affliction.name}\n`,
  //     `${affliction.labels?.description}\n`,
  //     `Effect: ${affliction.labels?.effect}`,
  //   ].join('\n');
  // }
}
