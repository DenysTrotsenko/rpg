import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, filter, finalize, tap } from 'rxjs/operators';
import { DialogService, SnackbarService, StorageService } from '@std';
import { JsonEditorDialogComponent } from '../../shared/json-editor-dialog/json-editor-dialog.component';


@Injectable()
export class AdminDictionaryService {
  private path: string = null;
  readonly dictionary$ = new BehaviorSubject(null);
  readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  readonly changed$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private dialog: DialogService,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  init(config): void {
    this.path = config.path;
    this.loading$.next(true);

    this.storage.download(this.path)
      .pipe(
        catchError(() => of(null)),
        tap((res: Record<string, string>) => this.dictionary$.next(res)),
        finalize(() => this.loading$.next(false))
      )
      .subscribe();
  }

  editor(): void {
    this.dialog.open(JsonEditorDialogComponent, {
      data: this.dictionary$.value,
      width: '1200px'
    }).afterClosed()
      .pipe(
        filter(res => !!res),
        tap(result => {
          this.dictionary$.next(result);
          this.changed$.next(true);
        })
      )
      .subscribe();
  }

  save(): void {
    this.loading$.next(true);
    const data = JSON.stringify(this.dictionary$.value, null, 2);
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
