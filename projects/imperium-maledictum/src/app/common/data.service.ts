import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AuthService, Campaign, CampaignService, Setting, SettingService, StorageService } from '@shared';
import { Characteristic, Skill, Specialisation, Talent } from '@imperium-maledictum-1e/models/common';
import { FileName } from '@imperium-maledictum-1e/models/enums';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  readonly campaign$: Observable<Campaign | null> = this.campaign.selected$;
  // readonly setting$: Observable<Setting> = this.campaign$.pipe(
  //   map(campaign => campaign?.setting),
  //   switchMap(id => this.setting.all$.pipe(
  //     map(settings => settings.find(i => i.id === id))
  //   ))
  // );
  readonly setting$: Observable<Setting> = this.setting.selected$;
  readonly storage$: Observable<string> = this.setting$.pipe(
    map(setting => setting?.storage),
    filter(storage => !!storage)
  );

  // readonly characteristics$: Observable<Characteristic[]> = this.storage$.pipe(
  //   map(storage => `/${storage}/${FileName.CHARACTERISTICS}`),
  //   switchMap(path => this.storage.download<Characteristic[]>(path))
  // );
  // readonly skills$: Observable<Skill[]> = this.storage$.pipe(
  //   map(storage => `/${storage}/${FileName.SKILLS}`),
  //   switchMap(path => this.storage.download<Skill[]>(path))
  // );
  // readonly specialisations$: Observable<Specialisation[]> = this.storage$.pipe(
  //   map(storage => `/${storage}/${FileName.SPECIALISATIONS}`),
  //   switchMap(path => this.storage.download<Specialisation[]>(path))
  // );
  // readonly talents$: Observable<Talent[]> = this.storage$.pipe(
  //   map(storage => `/${storage}/${FileName.TALENTS}`),
  //   switchMap(path => this.storage.download<Talent[]>(path))
  // );

  characteristics: Characteristic[] = [];
  skills: Skill[] = [];
  specialisations: Specialisation[] = [];
  talents: Talent[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly campaign: CampaignService,
    private readonly setting: SettingService,
    private readonly storage: StorageService
  ) {
    this.storage$
      .pipe(
        switchMap(id => forkJoin([
          this.storage.download<Characteristic[]>(`/${storage}/${FileName.CHARACTERISTICS}`).pipe(
            tap(res => this.characteristics = res)
          ),
          this.storage.download<Skill[]>(`/${storage}/${FileName.SKILLS}`).pipe(
            tap(res => this.skills = res)
          ),
          this.storage.download<Specialisation[]>(`/${storage}/${FileName.SPECIALISATIONS}`).pipe(
            tap(res => this.specialisations = res)
          ),
          this.storage.download<Talent[]>(`/${id}/${FileName.TALENTS}`).pipe(
            tap(res => this.talents = res)
          )
        ]))
      )
      .subscribe();
  }
  // private getAfflictionTooltip(affliction: Affliction): string {
  //   return [
  //     `${affliction.name}\n`,
  //     `${affliction.labels?.description}\n`,
  //     `Effect: ${affliction.labels?.effect}`,
  //   ].join('\n');
  // }
}
