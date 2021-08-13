import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import {
  DATAFILE,
  IAttribute, IBase,
  ICondition,
  IData,
  IEquipment,
  IEquipmentQuality,
  IMerit,
  ISkill,
  ITilt, IVirtueOrVice
} from '@cod/app/data/data.models';
import { ARMOR_COVERAGE } from '@cod/app/data/miscellaneous';
import { FirestoreService } from '@shared';

@Injectable()
export class DataService {
  private readonly attributes$: Observable<IAttribute[]> = this.download$<IAttribute[]>(DATAFILE.ATTRIBUTES)
    .pipe(catchError(() => of([])));
  private readonly books$: Observable<IBase[]> = this.download$<IBase[]>(DATAFILE.BOOKS)
    .pipe(catchError(() => of([])));
  private readonly conditions$: Observable<ICondition[]> = this.download$<ICondition[]>(DATAFILE.CONDITIONS)
    .pipe(catchError(() => of([])));
  private readonly equipment$: Observable<IEquipment[]> = this.download$<IEquipment[]>(DATAFILE.EQUIPMENT)
    .pipe(catchError(() => of([])));
  private readonly qualities$: Observable<IEquipmentQuality[]> = this.download$<IEquipmentQuality[]>(DATAFILE.EQUIPMENT_QUALITIES)
    .pipe(catchError(() => of([])));
  private readonly merits$: Observable<IMerit[]> = this.download$<IMerit[]>(DATAFILE.MERITS)
    .pipe(catchError(() => of([])));
  private readonly skills$: Observable<ISkill[]> = this.download$<ISkill[]>(DATAFILE.SKILLS)
    .pipe(catchError(() => of([])));
  private readonly tilts$: Observable<ITilt[]> = this.download$<ITilt[]>(DATAFILE.TILTS)
    .pipe(catchError(() => of([])));
  private readonly virtues$: Observable<IVirtueOrVice[]> = this.download$<IVirtueOrVice[]>(DATAFILE.VIRTUES_VICES)
    .pipe(catchError(() => of([])));
  readonly data$: Observable<IData> = combineLatest([
    this.attributes$ as Observable<IAttribute[]>,
    this.books$ as Observable<IBase[]>,
    this.conditions$ as Observable<ICondition[]>,
    this.equipment$ as Observable<IEquipment[]>,
    this.merits$ as Observable<IMerit[]>,
    this.qualities$ as Observable<IEquipmentQuality[]>,
    this.skills$ as Observable<ISkill[]>,
    this.tilts$ as Observable<ITilt[]>,
    this.virtues$ as Observable<IVirtueOrVice[]>
  ])
    .pipe(
      map(res => ({
        attributes: res[0],
        books: res[1],
        conditions: res[2],
        coverage: ARMOR_COVERAGE,
        equipment: res[3],
        merits: res[4],
        qualities: res[5],
        skills: res[6],
        tilts: res[7],
        virtues: res[8]
      }) as IData),
      distinctUntilChanged(),
      shareReplay(1)
    );

  constructor(
    private readonly http: HttpClient,
    private readonly storage: AngularFireStorage
  ) {}

  download$<T>(filename: string): Observable<T> {
    return this.storage
      .ref(`data/${filename}`)
      .getDownloadURL()
      .pipe(
        switchMap(url => this.http.get<T>(url, { responseType: 'json' }))
      );
  }

  get id(): string {
    return (Date.now() + Math.random()).toString(36).replace('.', '');
  }
}
