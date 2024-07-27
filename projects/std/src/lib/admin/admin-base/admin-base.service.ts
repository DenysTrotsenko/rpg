import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, filter, finalize, shareReplay, tap } from 'rxjs/operators';
import {
  DialogService,
  getId16,
  getObjectKeys,
  HasBaseProperties,
  HasId,
  SnackbarService,
  sortByName, sortByProperty,
  StorageService
} from '@std';
import { AdminServiceConfig } from './admin-base.models';
import { AbstractControl } from '@angular/forms';
import { JsonEditorDialogComponent } from '../../shared/json-editor-dialog/json-editor-dialog.component';

const getCount = items => items.reduce((result, value) => {
  return { ...result, [value]: (result[value] || 0) + 1 };
}, {});

const getDuplicates = dict => Object.keys(dict).filter((a) => dict[a] > 1);

@Injectable()
export class AdminBaseService<T extends HasId<K>, K> {
  private path: string = null;
  private component: any = null;
  private readonly itemsSrc$ = new BehaviorSubject([]);
  readonly items$ = this.itemsSrc$.asObservable().pipe(
    tap(items => {
      const duplicates: string = getDuplicates(getCount(items.map(i => i.id))).join(', ');
      const options: string[] = items.reduce((acc, cur) => {
        return [...acc, ...getObjectKeys(cur)];
      }, []);
      const unique: string[] = [...new Set(options)];

      this.properties$.next(unique);
      this.duplicates$.next(duplicates);
      this.valid$.next(!duplicates.length);
    }),
    shareReplay(1)
  );
  readonly sort$: BehaviorSubject<string> = new BehaviorSubject(null);
  readonly properties$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  readonly changed$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly duplicates$: BehaviorSubject<string> = new BehaviorSubject(null);
  readonly valid$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  static setControlDefault<T extends HasBaseProperties<unknown>>(control: AbstractControl, items: T[]): void {
    if (!control.value) {
      control.setValue(items.find(i => i.default)?.id);
    }
  }

  init(config: AdminServiceConfig<T>): void {
    this.path = config.path;
    this.component = config.component;
    this.loading$.next(true);

    this.storage.download(this.path)
      .pipe(
        catchError(() => of([])),
        tap((res: T[]) => {
          this.itemsSrc$.next((res ?? []).sort(sortByProperty(this.sort$.value ?? 'name')));
        }),
        finalize(() => this.loading$.next(false))
      )
      .subscribe();
  }

  sort(key: string): void {
    this.sort$.next(key);
    this.itemsSrc$.next(this.itemsSrc$.value.sort(sortByProperty(key ?? 'name')));
  }

  add(): void {
    this.dialog.open(this.component, { data: null, width: '800px' }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => this.itemsSrc$.next([
          { ...res, id: getId16() },
          ...this.itemsSrc$.value
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
        tap(() => this.itemsSrc$.next([
          ...this.itemsSrc$.value.filter(i => i.id !== id)
        ])),
        tap(() => this.changed$.next(true))
      )
      .subscribe();
  }

  clone(item: T): void {
    this.dialog.open(this.component, { data: item, width: '800px' }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => this.itemsSrc$.next([
          { ...item, ...res, id: getId16() },
          ...this.itemsSrc$.value ?? []
        ])),
        tap(() => this.changed$.next(true))
      )
      .subscribe();
  }

  edit(item: T): void {
    this.dialog.open(this.component, { data: item, width: '800px' }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => this.itemsSrc$.next([
          { ...item, ...res },
          ...this.itemsSrc$.value.filter(i => i.id !== item.id)
        ])),
        tap(() => this.changed$.next(true))
      )
      .subscribe();
  }

  editor(): void {
    this.dialog.open(JsonEditorDialogComponent, {
      data: this.itemsSrc$.value,
      width: '1200px'
    }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(result => {
          this.itemsSrc$.next(result.map(i => {
            i.id = i.id ? i.id : getId16();
            return i;
          }));
          this.changed$.next(true);
        })
      )
      .subscribe();
  }

  save(): void {
    this.loading$.next(true);
    const sorted = this.itemsSrc$.value.sort(sortByName);
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
