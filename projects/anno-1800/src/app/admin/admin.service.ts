import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { DialogService, getId, SnackbarService, sortByName, StorageService } from '@shared';
import {
  Ailment, Drug, Quality, Quirk, Talent, Trait,
  AilmentId, DrugId, QualityId, QuirkId, TalentId, TraitId, AfflictionId, Affliction, ThreatId, ThreatTraitId, ThreatTrait
} from '@grim-and-perilous/models/common';
import { Setting } from '@grim-and-perilous/models/setting';
import { SettingId } from '@grim-and-perilous/models/common';
import { Threat } from '@grim-and-perilous/models/threat';
import { StoragePath } from '@grim-and-perilous/enums';

export interface AdminServiceConfig {
  path: StoragePath;
  responseFn: (data: Item) => Observable<unknown>;
}

type Id =
  | AfflictionId
  | AilmentId
  | DrugId
  | QualityId
  | QuirkId
  | SettingId
  | TalentId
  | TraitId
  | ThreatId
  | ThreatTraitId;
type Item =
  | Affliction
  | Ailment
  | Drug
  | Quality
  | Quirk
  | Setting
  | Talent
  | Trait
  | Threat
  | ThreatTrait;

@Injectable()
export class AdminService {
  private responseFn: (data: Item) => Observable<Partial<Item>>;
  private path: string = null;
  readonly items$ = new BehaviorSubject([]);

  constructor(
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  init(config: AdminServiceConfig): void {
    this.responseFn = config.responseFn;
    this.path = config.path;

    this.storage.download(this.path)
      .pipe(
        tap((res: Item[]) => this.items$.next(res))
      )
      .subscribe();
  }

  add(): void {
    this.responseFn(null)
      .pipe(
        filter(res => !!res),
        tap(() => console.log('ADD')),
        tap(res => console.log(res)),
        tap(res => this.items$.next([
          { id: getId(), ...res },
          ...this.items$.value
        ]))
      )
      .subscribe();
  }

  delete(id: Id): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete',
          description: 'Are you sure you want to delete this item?'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(() => this.items$.next([
          ...this.items$.value.filter(i => i.id !== id)
        ]))
      )
      .subscribe();
  }

  edit(item: Item): void {
    this.responseFn(item)
      .pipe(
        filter(res => !!res),
        tap(() => console.log('EDIT')),
        tap(res => console.log(res)),
        tap(res => this.items$.next([
          { ...item, ...res },
          ...this.items$.value.filter(i => i.id !== item.id)
        ]))
      )
      .subscribe();
  }

  save(): void {
    const sorted = this.items$.value.sort(sortByName);
    const data = JSON.stringify(sorted, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    this.storage.upload(this.path, blob)
      .pipe(
        tap(() => this.snackbar.success('Data successfully saved!')),
        catchError(() => {
          this.snackbar.error('Some error occurred, try again later!');
          return of(null);
        })
      )
      .subscribe();
  }
}
