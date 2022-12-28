import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { DialogService, getId, SnackbarService, sortByName, StorageService } from '@shared';
import {
  Ailment, Drug, Quality, Quirk, Talent, Trait,
  AilmentId, DrugId, QualityId, QuirkId, TalentId, TraitId, AfflictionId, Affliction
} from '@grim-and-perilous/models/common';
import { Setting } from '@grim-and-perilous/models/setting';
import { SettingId } from '@grim-and-perilous/models/common';

export interface AdminServiceConfig {
  path: string;
  responseFn: (data) => Observable<any>;
}

type Id = AfflictionId | AilmentId | DrugId | QualityId | QuirkId | SettingId | TalentId | TraitId;
type Item = Affliction | Ailment | Drug | Quality | Quirk | Setting | Talent | Trait;

@Injectable()
export class AdminService {
  private responseFn: (data) => Observable<any>;
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
        tap(res => this.items$.next([
          res,
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
