import { Injectable } from '@angular/core';
import { forkJoin, Observable, OperatorFunction } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AuthService, CacheService, HasCommonFields, HasId, Setting, SettingService, StorageService } from '@shared';
import { BestiaryRole, BestiaryTrait, Characteristic, Size, Skill, Specialisation, Talent } from '@imperium-maledictum-1e/models/common';
import { FileName } from '@imperium-maledictum-1e/models/enums';

interface Data {
  [FileName.BESTIARY_ROLES]: BestiaryRole[];
  [FileName.BESTIARY_TRAITS]: BestiaryTrait[];
  [FileName.CHARACTERISTICS]: Characteristic[];
  [FileName.SIZES]: Size[];
  [FileName.SKILLS]: Skill[];
  [FileName.SPECIALISATIONS]: Specialisation[];
  [FileName.TALENTS]: Talent[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static readonly tooltips: Map<FileName, <T>(item: T, data: Data) => string> = new Map()
    .set(FileName.CHARACTERISTICS, DataService.getCharacteristicTooltip)
    .set(FileName.SIZES, DataService.getSizeTooltip)
    .set(FileName.SKILLS, DataService.getSkillTooltip)
    .set(FileName.SPECIALISATIONS, DataService.getSpecialisationTooltip)
    .set(FileName.TALENTS, DataService.getTalentTooltip);

  private readonly setting$: Observable<Setting> = this.setting.selected$;
  private readonly storage$: Observable<string> = this.setting$.pipe(
    map(setting => setting?.storage),
    filter(storage => !!storage),
    tap(() => this.cache.clear())
  );
  private readonly data$: Observable<Data> = this.storage$.pipe(
    switchMap(storage => forkJoin({
      [FileName.BESTIARY_ROLES]: this.download<BestiaryRole>(storage, FileName.BESTIARY_ROLES),
      [FileName.BESTIARY_TRAITS]: this.download<BestiaryTrait>(storage, FileName.BESTIARY_TRAITS),
      [FileName.CHARACTERISTICS]: this.download<Characteristic>(storage, FileName.CHARACTERISTICS),
      [FileName.SIZES]: this.download<Size>(storage, FileName.SIZES),
      [FileName.SKILLS]: this.download<Skill>(storage, FileName.SKILLS),
      [FileName.SPECIALISATIONS]: this.download<Specialisation>(storage, FileName.SPECIALISATIONS),
      [FileName.TALENTS]: this.download<Talent>(storage, FileName.TALENTS)
    })),
    shareReplay(1)
  );
  readonly bestiaryRoles$: Observable<BestiaryRole[]> = this.data$.pipe(
    this.handleData<BestiaryRole>(FileName.BESTIARY_ROLES)
  );
  readonly bestiaryTraits$: Observable<BestiaryTrait[]> = this.data$.pipe(
    this.handleData<BestiaryTrait>(FileName.BESTIARY_TRAITS)
  );
  readonly characteristics$: Observable<Characteristic[]> = this.data$.pipe(
    this.handleData<Characteristic>(FileName.CHARACTERISTICS)
  );
  readonly sizes$: Observable<Size[]> = this.data$.pipe(
    this.handleData<Size>(FileName.SIZES)
  );
  readonly skills$: Observable<Skill[]> = this.data$.pipe(
    this.handleData<Skill>(FileName.SKILLS)
  );
  readonly specialisations$: Observable<Specialisation[]> = this.data$.pipe(
    this.handleData<Specialisation>(FileName.SPECIALISATIONS)
  );
  readonly talents$: Observable<Talent[]> = this.data$.pipe(
    this.handleData<Talent>(FileName.TALENTS)
  );

  constructor(
    private readonly auth: AuthService,
    private readonly cache: CacheService,
    private readonly setting: SettingService,
    private readonly storage: StorageService
  ) {}

  static getCharacteristicTooltip(item: Characteristic, data: Data): string {
    return [
      `${item.name} (${item.labels?.abbreviation})\n`,
      `${item.labels?.description}`,
    ].join('\n');
  }

  static getSizeTooltip(item: Size, data: Data): string {
    return [
      `${item.name}\n`,
      `${item.labels?.description}`,
    ].join('\n');
  }

  static getSkillTooltip(item: Skill, data: Data): string {
    return [
      `${item.name}\n`,
      `${item.labels?.description}`,
    ].join('\n');
  }

  static getSpecialisationTooltip(item: Specialisation, data: Data): string {
    return [
      `${item.name}\n`,
      `${item.labels?.description}`,
    ].join('\n');
  }

  static getTalentTooltip(item: Talent, data: Data): string {
    return [
      `${item.name}\n`,
      `${item.labels?.description}`,
    ].join('\n');
  }

  download<T>(storage: string, file: FileName): Observable<T[]> {
    return this.storage.download<T[]>(`/${storage}/${file}`);
  }

  get<T>(id: string): T {
    return this.cache.get(id) as T;
  }

  private handleData<T extends HasId<unknown> & HasCommonFields>(file: FileName): OperatorFunction<Data, T[]> {
    return source$ => source$.pipe(
      map(data => {
        const items: T[] = data[file];
        items.forEach(i => {
          i.labels.tooltip = DataService.tooltips.has(file) ? DataService.tooltips.get(file)(i, data) : '';
          this.cache.set(i.id, i);
        });
        return items;
      }),
      shareReplay(1)
    );
  }
}
