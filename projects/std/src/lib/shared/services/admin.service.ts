import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, finalize, tap } from 'rxjs/operators';
import { DialogService, getId16, HasId, SnackbarService, sortByName, StorageService } from '@shared';

export interface AdminServiceConfig<T> {
  path: string;
  responseFn: (data: T) => Observable<Partial<T>>;
}

@Injectable()
export class AdminService<T extends HasId<K>, K> {
  private responseFn: (data: T) => Observable<Partial<T>>;
  private path: string = null;
  readonly items$ = new BehaviorSubject([]);
  readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  init(config: AdminServiceConfig<T>): void {
    this.responseFn = config.responseFn;
    this.path = config.path;
    this.loading$.next(true);

    this.storage.download(this.path)
      .pipe(
        tap((res: T[]) => this.items$.next(res)),
        finalize(() => this.loading$.next(false))
      )
      .subscribe();
  }

  add(): void {
    this.responseFn(null)
      .pipe(
        filter(res => !!res),
        tap(res => this.items$.next([
          { ...res, id: getId16() },
          ...this.items$.value
        ]))
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
        ]))
      )
      .subscribe();
  }

  edit(item: T): void {
    this.responseFn(item)
      .pipe(
        filter(res => !!res),
        tap(res => this.items$.next([
          { ...item, ...res },
          ...this.items$.value.filter(i => i.id !== item.id)
        ])),
      )
      .subscribe();
  }

  save(): void {
    this.loading$.next(true);
    const sorted = this.items$.value.sort(sortByName);
    const data = JSON.stringify(sorted, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    this.storage.upload(this.path, blob)
      .pipe(
        tap(() => this.snackbar.success('Data successfully saved!')),
        catchError(() => {
          this.snackbar.error('Some error occurred, try again later!');
          return of(null);
        }),
        finalize(() => this.loading$.next(false))
      )
      .subscribe();
  }
}
