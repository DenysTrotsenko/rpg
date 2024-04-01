import { Injectable } from '@angular/core';
import { forkJoin, Observable, OperatorFunction } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AuthService, CacheService, HasCommonFields, HasId, Setting, SettingService, StorageService } from '@shared';
import {
  Availability,
  BestiaryFaction,
  BestiaryRole,
  BestiaryTrait,
  BestiaryType,
  Characteristic, Condition, Difficulty, Duration,
  Item,
  ItemTrait,
  ItemType,
  PsychicDiscipline,
  PsychicPhenomena,
  PsychicPower,
  Range,
  Size,
  Skill,
  Specialisation,
  Talent, Target
} from '@imperium-maledictum-1e/models/common';
import { FileName } from '@imperium-maledictum-1e/models/enums';
import { LoggerService } from '../../../../std/src/lib/logger/logger.service';

interface Data {
  [FileName.AVAILABILITIES]: Availability[];
  [FileName.BESTIARY_FACTIONS]: BestiaryFaction[];
  [FileName.BESTIARY_ROLES]: BestiaryRole[];
  [FileName.BESTIARY_TYPES]: BestiaryType[];
  [FileName.BESTIARY_TRAITS]: BestiaryTrait[];
  [FileName.CHARACTERISTICS]: Characteristic[];
  [FileName.CONDITIONS]: Condition[];
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
      [FileName.AVAILABILITIES]: this.download<Availability>(storage, FileName.AVAILABILITIES),
      [FileName.BESTIARY_FACTIONS]: this.download<BestiaryFaction>(storage, FileName.BESTIARY_FACTIONS),
      [FileName.BESTIARY_ROLES]: this.download<BestiaryRole>(storage, FileName.BESTIARY_ROLES),
      [FileName.BESTIARY_TRAITS]: this.download<BestiaryTrait>(storage, FileName.BESTIARY_TRAITS),
      [FileName.BESTIARY_TYPES]: this.download<BestiaryType>(storage, FileName.BESTIARY_TYPES),
      [FileName.CHARACTERISTICS]: this.download<Characteristic>(storage, FileName.CHARACTERISTICS),
      [FileName.CONDITIONS]: this.download<Condition>(storage, FileName.CONDITIONS),
      [FileName.DIFFICULTIES]: this.download<Difficulty>(storage, FileName.DIFFICULTIES),
      [FileName.DURATIONS]: this.download<Duration>(storage, FileName.DURATIONS),
      [FileName.ITEMS]: this.download<Item>(storage, FileName.ITEMS),
      [FileName.ITEM_FLAWS]: this.download<ItemTrait>(storage, FileName.ITEM_FLAWS),
      [FileName.ITEM_QUALITIES]: this.download<ItemTrait>(storage, FileName.ITEM_QUALITIES),
      [FileName.ITEM_TRAITS]: this.download<ItemTrait>(storage, FileName.ITEM_TRAITS),
      [FileName.ITEM_TYPES]: this.download<ItemType>(storage, FileName.ITEM_TYPES),
      [FileName.PSYCHIC_DISCIPLINES]: this.download<PsychicDiscipline>(storage, FileName.PSYCHIC_DISCIPLINES),
      [FileName.PSYCHIC_PHENOMENAS]: this.download<PsychicPhenomena>(storage, FileName.PSYCHIC_PHENOMENAS),
      [FileName.PSYCHIC_POWERS]: this.download<PsychicPower>(storage, FileName.PSYCHIC_POWERS),
      [FileName.RANGES]: this.download<Range>(storage, FileName.RANGES),
      [FileName.SIZES]: this.download<Size>(storage, FileName.SIZES),
      [FileName.SKILLS]: this.download<Skill>(storage, FileName.SKILLS),
      [FileName.SPECIALISATIONS]: this.download<Specialisation>(storage, FileName.SPECIALISATIONS),
      [FileName.TALENTS]: this.download<Talent>(storage, FileName.TALENTS),
      [FileName.TARGETS]: this.download<Target>(storage, FileName.TARGETS)
    })),
    tap(() => this.logger.log('Downloaded all data.')),
    shareReplay(1)
  );
  readonly availabilities$: Observable<Availability[]> = this.data$.pipe(
    this.handleData<Availability>(FileName.AVAILABILITIES)
  );
  readonly bestiaryFactions$: Observable<BestiaryFaction[]> = this.data$.pipe(
    this.handleData<BestiaryFaction>(FileName.BESTIARY_FACTIONS)
  );
  readonly bestiaryRoles$: Observable<BestiaryRole[]> = this.data$.pipe(
    this.handleData<BestiaryRole>(FileName.BESTIARY_ROLES)
  );
  readonly bestiaryTraits$: Observable<BestiaryTrait[]> = this.data$.pipe(
    this.handleData<BestiaryTrait>(FileName.BESTIARY_TRAITS)
  );
  readonly bestiaryTypes$: Observable<BestiaryType[]> = this.data$.pipe(
    this.handleData<BestiaryType>(FileName.BESTIARY_TYPES)
  );
  readonly characteristics$: Observable<Characteristic[]> = this.data$.pipe(
    this.handleData<Characteristic>(FileName.CHARACTERISTICS)
  );
  readonly conditions$: Observable<Condition[]> = this.data$.pipe(
    this.handleData<Condition>(FileName.CONDITIONS)
  );
  readonly difficulties$: Observable<Difficulty[]> = this.data$.pipe(
    this.handleData<Difficulty>(FileName.DIFFICULTIES)
  );
  readonly durations$: Observable<Duration[]> = this.data$.pipe(
    this.handleData<Duration>(FileName.DURATIONS)
  );
  readonly items$: Observable<Item[]> = this.data$.pipe(
    this.handleData<Item>(FileName.ITEMS)
  );
  readonly itemFlaws$: Observable<ItemTrait[]> = this.data$.pipe(
    this.handleData<ItemTrait>(FileName.ITEM_FLAWS)
  );
  readonly itemQualities$: Observable<ItemTrait[]> = this.data$.pipe(
    this.handleData<ItemTrait>(FileName.ITEM_QUALITIES)
  );
  readonly itemTraits$: Observable<ItemTrait[]> = this.data$.pipe(
    this.handleData<ItemTrait>(FileName.ITEM_TRAITS)
  );
  readonly itemTypes$: Observable<ItemType[]> = this.data$.pipe(
    this.handleData<ItemType>(FileName.ITEM_TYPES)
  );
  readonly psychicDisciplines$: Observable<PsychicDiscipline[]> = this.data$.pipe(
    this.handleData<PsychicDiscipline>(FileName.PSYCHIC_DISCIPLINES)
  );
  readonly psychicPhenomenas$: Observable<PsychicPhenomena[]> = this.data$.pipe(
    this.handleData<PsychicPhenomena>(FileName.PSYCHIC_PHENOMENAS)
  );
  readonly psychicPowers$: Observable<PsychicPower[]> = this.data$.pipe(
    this.handleData<PsychicPower>(FileName.PSYCHIC_POWERS)
  );
  readonly ranges$: Observable<Range[]> = this.data$.pipe(
    this.handleData<Range>(FileName.RANGES)
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
  readonly targets$: Observable<Target[]> = this.data$.pipe(
    this.handleData<Target>(FileName.TARGETS)
  );

  constructor(
    private readonly auth: AuthService,
    private readonly cache: CacheService,
    private readonly logger: LoggerService,
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
    const characteristic: Characteristic = data[FileName.CHARACTERISTICS]?.find(i => i.id === item.characteristic);
    return [
      `${item.name} (${characteristic?.labels?.abbreviation})\n`,
      `${item.labels?.description}`,
    ].join('\n');
  }

  static getSpecialisationTooltip(item: Specialisation, data: Data): string {
    return [
      `${item.name}${item.restricted ? ' (Restricted)' : ''}\n`,
      `${item.labels?.description}`,
    ].join('\n');
  }

  static getTalentTooltip(item: Talent, data: Data): string {
    return [
      `${item.name}\n`,
      item.labels?.requirements ? `Requirements: ${item.labels?.requirements}\n` : null,
      `${item.labels?.description}`,
    ].filter(i => !!i).join('\n');
  }

  private download<T>(storage: string, file: FileName): Observable<T[]> {
    return this.storage.download<T[]>(`/${storage}/${file}`).pipe(
      tap(res => this.logger.log('Downloaded:', file, res?.length, 'items loaded.'))
    );
  }

  get<T>(id: string): T {
    return this.cache.get(id) as T;
  }

  init(): void {
    this.availabilities$.subscribe().unsubscribe();
    this.bestiaryFactions$.subscribe().unsubscribe();
    this.bestiaryRoles$.subscribe().unsubscribe();
    this.bestiaryTypes$.subscribe().unsubscribe();
    this.bestiaryTraits$.subscribe().unsubscribe();
    this.characteristics$.subscribe().unsubscribe();
    this.conditions$.subscribe().unsubscribe();
    this.difficulties$.subscribe().unsubscribe();
    this.durations$.subscribe().unsubscribe();
    this.items$.subscribe().unsubscribe();
    this.itemFlaws$.subscribe().unsubscribe();
    this.itemQualities$.subscribe().unsubscribe();
    this.itemTraits$.subscribe().unsubscribe();
    this.itemTypes$.subscribe().unsubscribe();
    this.psychicDisciplines$.subscribe().unsubscribe();
    this.psychicPhenomenas$.subscribe().unsubscribe();
    this.psychicPowers$.subscribe().unsubscribe();
    this.ranges$.subscribe().unsubscribe();
    this.sizes$.subscribe().unsubscribe();
    this.skills$.subscribe().unsubscribe();
    this.specialisations$.subscribe().unsubscribe();
    this.talents$.subscribe().unsubscribe();
    this.targets$.subscribe().unsubscribe();
  }

  private handleData<T extends HasId<unknown> & HasCommonFields>(file: FileName): OperatorFunction<Data, T[]> {
    return source$ => source$.pipe(
      map(data => {
        const items: T[] = data[file];
        items.forEach(i => {
          if (DataService.tooltips.has(file)) {
            if (!i.labels) { i.labels = {}; }
            i.labels.tooltip = DataService.tooltips.get(file)(i, data);
          }
          this.cache.set(i.id, i);
        });
        return items;
      }),
      shareReplay(1)
    );
  }
}
