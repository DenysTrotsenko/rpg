import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, Observable, of } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import {
  CacheService,
  LoggerService,
  Setting,
  SettingService,
  StorageService
} from '@std';
import {
  Action,
  Availability,
  Bestiary,
  BestiaryFaction,
  BestiaryRole,
  BestiaryTrait,
  BestiaryType,
  Characteristic,
  Condition,
  Difficulty,
  Duration,
  Endeavour,
  EnvironmentalTrait,
  Event, Faction,
  Item,
  ItemTrait,
  ItemType, Origin,
  PsychicDiscipline,
  PsychicPhenomena,
  PsychicPower,
  Range,
  Size,
  Skill,
  Specialisation,
  Talent,
  Target
} from '@imperium-maledictum-1e/models/common';
import { FileName } from '@imperium-maledictum-1e/models/enums';

interface Data {
  [FileName.AVAILABILITIES]: Availability[];
  [FileName.BESTIARY]: Bestiary[];
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

function getTooltip(item: Size, data: Data): string {
  return [
    `${item.name}\n`,
    `${item.labels?.description}`
  ].join('\n');
}

function getBestiaryRoleTooltip(item: BestiaryRole, data: Data): string {
  return [
    `${item.name}\n`,
    `${item.labels?.description}\n`,
    `● A Characteristic Maximum of ${item.characteristic_maximum}.`,
    `● A combined Characteristics total of ${item.characteristics_total}`,
    `● Around ${item.skill_spec_advances} Advances in relevant Skills or Specialisations.`,
    `● ${item.name}s have ${item.critical_wounds_max} Critical Wound(s).`,
  ].join('\n');
}

function getCharacteristicTooltip(item: Characteristic, data: Data): string {
  return [
    `${item.name} (${item.labels?.abbreviation})\n`,
    `${item.labels?.description}`,
  ].join('\n');
}

function getSkillTooltip(item: Skill, data: Data): string {
  const characteristic: Characteristic = data[FileName.CHARACTERISTICS]?.find(i => i.id === item.characteristic);
  return [
    `${item.name} (${characteristic?.labels?.abbreviation})\n`,
    `${item.labels?.description}`,
  ].join('\n');
}

function getSpecialisationTooltip(item: Specialisation, data: Data): string {
  return [
    `${item.name}${item.restricted ? ' (Restricted)' : ''}\n`,
    `${item.labels?.description}`,
  ].join('\n');
}

function getTalentTooltip(item: Talent, data: Data): string {
  return [
    `${item.name}\n`,
    item.labels?.requirements ? `Requirements: ${item.labels?.requirements}\n` : null,
    `${item.labels?.description}`,
  ].filter(i => !!i).join('\n');
}

const TOOLTIPS: Map<FileName, <T>(item: T, data: Data) => string> = new Map()
  .set(FileName.BESTIARY_ROLES, getBestiaryRoleTooltip)
  .set(FileName.CHARACTERISTICS, getCharacteristicTooltip)
  .set(FileName.SIZES, getTooltip)
  .set(FileName.SKILLS, getSkillTooltip)
  .set(FileName.SPECIALISATIONS, getSpecialisationTooltip)
  .set(FileName.TALENTS, getTalentTooltip);

@Injectable()
export class DataService {
  private readonly cache = inject(CacheService);
  private readonly logger = inject(LoggerService);
  private readonly setting = inject(SettingService);
  private readonly storage = inject(StorageService);

  private readonly setting$: Observable<Setting> = this.setting.selected$;
  private readonly storage$: Observable<string> = this.setting$.pipe(
    map(setting => setting?.storage),
    filter(storage => !!storage),
    tap(() => this.cache.clear()),
  );
  private readonly data$: Observable<Data> = this.storage$.pipe(
    switchMap(storage => forkJoin({
      [FileName.ACTIONS]: this.download<Action>(storage, FileName.ACTIONS),
      [FileName.AVAILABILITIES]: this.download<Availability>(storage, FileName.AVAILABILITIES),
      [FileName.BESTIARY]: this.download<Bestiary>(storage, FileName.BESTIARY),
      [FileName.BESTIARY_FACTIONS]: this.download<BestiaryFaction>(storage, FileName.BESTIARY_FACTIONS),
      [FileName.BESTIARY_ROLES]: this.download<BestiaryRole>(storage, FileName.BESTIARY_ROLES),
      [FileName.BESTIARY_TRAITS]: this.download<BestiaryTrait>(storage, FileName.BESTIARY_TRAITS),
      [FileName.BESTIARY_TYPES]: this.download<BestiaryType>(storage, FileName.BESTIARY_TYPES),
      [FileName.CHARACTERISTICS]: this.download<Characteristic>(storage, FileName.CHARACTERISTICS),
      [FileName.CONDITIONS]: this.download<Condition>(storage, FileName.CONDITIONS),
      [FileName.DIFFICULTIES]: this.download<Difficulty>(storage, FileName.DIFFICULTIES),
      [FileName.DURATIONS]: this.download<Duration>(storage, FileName.DURATIONS),
      [FileName.ENDEAVOURS]: this.download<Endeavour>(storage, FileName.ENDEAVOURS),
      [FileName.ENVIRONMENTAL_TRAITS]: this.download<EnvironmentalTrait>(storage, FileName.ENVIRONMENTAL_TRAITS),
      [FileName.EVENTS]: this.download<Event>(storage, FileName.EVENTS),
      [FileName.FACTIONS]: this.download<Faction>(storage, FileName.FACTIONS),
      [FileName.ITEMS]: this.download<Item>(storage, FileName.ITEMS),
      [FileName.ITEM_FLAWS]: this.download<ItemTrait>(storage, FileName.ITEM_FLAWS),
      [FileName.ITEM_QUALITIES]: this.download<ItemTrait>(storage, FileName.ITEM_QUALITIES),
      [FileName.ITEM_TRAITS]: this.download<ItemTrait>(storage, FileName.ITEM_TRAITS),
      [FileName.ITEM_TYPES]: this.download<ItemType>(storage, FileName.ITEM_TYPES),
      [FileName.ORIGINS]: this.download<Origin>(storage, FileName.ORIGINS),
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
    tap(data => {
      const keys: FileName[] = Object.keys(data) as FileName[];
      keys.forEach(key => {
        const items = data[key];
        items.forEach(i => {
          if (TOOLTIPS.has(key)) {
            if (!i.labels) { i.labels = {}; }
            i.labels.tooltip = TOOLTIPS.get(key)(i, data);
          }
          this.cache.set(i.id, i);
        });
      });
    }),
    shareReplay(1)
  );
  readonly actions$: Observable<Action[]> = this.data$.pipe(map(data => data[FileName.ACTIONS]));
  readonly availabilities$: Observable<Availability[]> = this.data$.pipe(map(data => data[FileName.AVAILABILITIES]));
  readonly bestiary$: Observable<Bestiary[]> = this.data$.pipe(map(data => data[FileName.BESTIARY]));
  readonly bestiaryFactions$: Observable<BestiaryFaction[]> = this.data$.pipe(map(data => data[FileName.BESTIARY_FACTIONS]));
  readonly bestiaryRoles$: Observable<BestiaryRole[]> = this.data$.pipe(map(data => data[FileName.BESTIARY_ROLES]));
  readonly bestiaryTraits$: Observable<BestiaryTrait[]> = this.data$.pipe(map(data => data[FileName.BESTIARY_TRAITS]));
  readonly bestiaryTypes$: Observable<BestiaryType[]> = this.data$.pipe(map(data => data[FileName.BESTIARY_TYPES]));
  readonly characteristics$: Observable<Characteristic[]> = this.data$.pipe(map(data => data[FileName.CHARACTERISTICS]));
  readonly conditions$: Observable<Condition[]> = this.data$.pipe(map(data => data[FileName.CONDITIONS]));
  readonly difficulties$: Observable<Difficulty[]> = this.data$.pipe(map(data => data[FileName.DIFFICULTIES]));
  readonly durations$: Observable<Duration[]> = this.data$.pipe(map(data => data[FileName.DURATIONS]));
  readonly endeavours$: Observable<Endeavour[]> = this.data$.pipe(map(data => data[FileName.ENDEAVOURS]));
  readonly environmentalTraits$: Observable<EnvironmentalTrait[]> = this.data$.pipe(map(data => data[FileName.ENVIRONMENTAL_TRAITS]));
  readonly events$: Observable<Event[]> = this.data$.pipe(map(data => data[FileName.EVENTS]));
  readonly factions$: Observable<Faction[]> = this.data$.pipe(map(data => data[FileName.FACTIONS]));
  readonly items$: Observable<Item[]> = this.data$.pipe(map(data => data[FileName.ITEMS]));
  readonly itemFlaws$: Observable<ItemTrait[]> = this.data$.pipe(map(data => data[FileName.ITEM_FLAWS]));
  readonly itemQualities$: Observable<ItemTrait[]> = this.data$.pipe(map(data => data[FileName.ITEM_QUALITIES]));
  readonly itemTraits$: Observable<ItemTrait[]> = this.data$.pipe(map(data => data[FileName.ITEM_TRAITS]));
  readonly itemTypes$: Observable<ItemType[]> = this.data$.pipe(map(data => data[FileName.ITEM_TYPES]));
  readonly origins$: Observable<Origin[]> = this.data$.pipe(map(data => data[FileName.ORIGINS]));
  readonly psychicDisciplines$: Observable<PsychicDiscipline[]> = this.data$.pipe(map(data => data[FileName.PSYCHIC_DISCIPLINES]));
  readonly psychicPhenomenas$: Observable<PsychicPhenomena[]> = this.data$.pipe(map(data => data[FileName.PSYCHIC_PHENOMENAS]));
  readonly psychicPowers$: Observable<PsychicPower[]> = this.data$.pipe(map(data => data[FileName.PSYCHIC_POWERS]));
  readonly ranges$: Observable<Range[]> = this.data$.pipe(map(data => data[FileName.RANGES]));
  readonly sizes$: Observable<Size[]> = this.data$.pipe(map(data => data[FileName.SIZES]));
  readonly skills$: Observable<Skill[]> = this.data$.pipe(map(data => data[FileName.SKILLS]));
  readonly specialisations$: Observable<Specialisation[]> = this.data$.pipe(map(data => data[FileName.SPECIALISATIONS]));
  readonly talents$: Observable<Talent[]> = this.data$.pipe(map(data => data[FileName.TALENTS]));
  readonly targets$: Observable<Target[]> = this.data$.pipe(map(data => data[FileName.TARGETS]));

  get<T>(id: string): T {
    return this.cache.get(id) as T;
  }

  init(): void {
    this.data$.subscribe().unsubscribe();
  }

  private download<T>(storage: string, file: FileName): Observable<T[]> {
    return this.storage.download<T[]>(`/${storage}/${file}`).pipe(
      tap(res => this.logger.log('Downloaded:', file, res?.length, 'items loaded.')),
      catchError(() => of([]))
    );
  }
}
