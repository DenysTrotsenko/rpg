import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, filter, finalize, tap } from 'rxjs/operators';
import { DialogService, getId16, HasId, SnackbarService, sortByName, StorageService } from '@shared';
import { AdminServiceConfig } from './admin-base.models';

@Injectable()
export class AdminBaseService<T extends HasId<K>, K> {
  private path: string = null;
  private component: any = null;
  readonly items$ = new BehaviorSubject([]);
  readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  readonly changed$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  init(config: AdminServiceConfig<T>): void {
    this.path = config.path;
    this.component = config.component;
    this.loading$.next(true);

    this.storage.download(this.path)
      .pipe(
        tap((res: T[]) => this.items$.next(res)),
        finalize(() => this.loading$.next(false))
      )
      .subscribe();
  }

  add(): void {
    this.dialog.open(this.component, { data: null, width: '800px' }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => this.items$.next([
          { ...res, id: getId16() },
          ...this.items$.value
        ])),
        tap(() => this.changed$.next(true))
      )
      .subscribe();
  }

  delete(id: K): void {
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
        ])),
        tap(() => this.changed$.next(true))
      )
      .subscribe();
  }

  edit(item: T): void {
    this.dialog.open(this.component, { data: item, width: '800px' }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => this.items$.next([
          { ...item, ...res },
          ...this.items$.value.filter(i => i.id !== item.id)
        ])),
        tap(() => this.changed$.next(true))
      )
      .subscribe();
  }

  editor(): void {}

  save(): void {
    this.loading$.next(true);
    const sorted = this.items$.value.sort(sortByName);
    const data = JSON.stringify(sorted, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    this.storage.upload(this.path, blob)
      .pipe(
        tap(() => {
          this.changed$.next(false);
          this.snackbar.success('Data successfully saved!');
        }),
        catchError(() => {
          this.snackbar.error('Some error occurred, try again later!');
          return of(null);
        }),
        finalize(() => this.loading$.next(false))
      )
      .subscribe();
  }
}
