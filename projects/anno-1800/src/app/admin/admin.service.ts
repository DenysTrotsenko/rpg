import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {catchError, filter, tap} from 'rxjs/operators';
import {DialogService, getId, SnackbarService, sortByName, StorageService} from '@shared';
import {Ailment, Drug, Quality} from '@flames-of-freedom-1e/models';
import {AilmentId, DrugId, QualityId} from '@flames-of-freedom-1e/enums';
import {QualitiesEditComponent} from '@ti/app/admin/qualities/qualities-edit.component';

export interface AdminServiceConfig {
  dialog: DialogService;
  snackbar: SnackbarService;
  storage: StorageService;
  path: string;
}

type Id = AilmentId | DrugId | QualityId;
type Item = Ailment | Drug | Quality;

@Injectable()
export class AdminService {
  private dialog: DialogService;
  private snackbar: SnackbarService;
  private storage: StorageService;
  private path: string = null;
  readonly items$ = new BehaviorSubject([]);

  init(config: AdminServiceConfig): void {
    this.dialog = config.dialog;
    this.snackbar = config.snackbar;
    this.storage = config.storage;
    this.path = config.path;

    this.storage.download(this.path)
      .pipe(
        tap((res: Quality[]) => this.items$.next(res))
      )
      .subscribe();
  }

  add(): void {
    this.dialog
      .open(QualitiesEditComponent)
      .afterClosed()
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

  edit(quality: Item): void {
    this.dialog
      .open(QualitiesEditComponent, {
        data: quality
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => this.items$.next([
          res,
          ...this.items$.value.filter(i => i.id !== quality.id)
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
