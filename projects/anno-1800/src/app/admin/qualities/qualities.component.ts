import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { DialogService, StorageService } from '@shared';
import { Quality } from '@flames-of-freedom-1e/models';
import { QualitiesEditComponent } from '@ti/app/admin/qualities/qualities-edit.component';

@Component({
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualitiesComponent implements OnInit {
  readonly path = '/data/qualities.json';
  readonly qualities$: BehaviorSubject<Quality[]> = new BehaviorSubject([]);

  constructor(
    private dialog: DialogService,
    private snackbar: MatSnackBar,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    // const normalized: any[] = QUALITIES.map(i => {
    //   i.id = getId() as any;
    //   return i;
    // });
    // const data = JSON.stringify(normalized, null, 2);
    // const blob = new Blob([data], { type: 'application/json' });
    // this.storage.upload('data/qualities.json', blob).subscribe(res => console.log(res));
    this.storage.download(this.path)
      .pipe(
        tap((res: Quality[]) => this.qualities$.next(res))
      )
      .subscribe();
  }

  onAddClick(): void {
    this.dialog
      .open(QualitiesEditComponent)
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(quality => this.qualities$.next([
          quality,
          ...this.qualities$.value
        ]))
      )
      .subscribe();
  }

  onSaveClick(): void {
    const data = JSON.stringify(this.qualities$.value, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    this.storage.upload(this.path, blob)
      .pipe(
        tap(() => this.snackbar.open('Data successfully saved!', 'Ok')),
        catchError(() => {
          this.snackbar.open('Some error occurred, try again later!', 'Ok');
          return of(null);
        })
      )
      .subscribe();
  }
}
