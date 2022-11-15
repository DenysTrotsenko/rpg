import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { DialogService, getId, SnackbarService, sortByName, StorageService } from '@shared';
import {
  Ailment, Drug, Quality, Quirk, Talent, Trait,
  AilmentId, DrugId, QualityId, QuirkId, TalentId, TraitId
} from '@grim-and-perilous/models/common';
import { Setting } from '@grim-and-perilous/models/setting';
import { SettingId } from '@grim-and-perilous/models/common';

export interface AdminServiceConfig {
  dialog: DialogService;
  snackbar: SnackbarService;
  storage: StorageService;
  path: string;
  responseFn: (data) => Observable<any>;
}

type Id = AilmentId | DrugId | QualityId | QuirkId | SettingId | TalentId | TraitId;
type Item = Ailment | Drug | Quality | Quirk | Setting | Talent | Trait;

@Injectable()
export class AdminService {
  private responseFn: (data) => Observable<any>;
  private dialog: DialogService;
  private snackbar: SnackbarService;
  private storage: StorageService;
  private path: string = null;
  readonly items$ = new BehaviorSubject([]);

  init(config: AdminServiceConfig): void {
    this.responseFn = config.responseFn;
    this.dialog = config.dialog;
    this.snackbar = config.snackbar;
    this.storage = config.storage;
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
