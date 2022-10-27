import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import {DialogService, getId, SnackbarService, sortByName, StorageService} from '@shared';
import { Quality } from '@flames-of-freedom-1e/models';
import { QualitiesEditComponent } from '@ti/app/admin/qualities/qualities-edit.component';
import { QualityId } from '@flames-of-freedom-1e/enums';

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
    private snackbar: SnackbarService,
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
        tap(res => this.qualities$.next([
          { id: getId(), ...res },
          ...this.qualities$.value
        ]))
      )
      .subscribe();
  }

  onDeleteClick(id: QualityId): void {
    this.dialog
      .confirm({
        data: {
          title: 'Delete',
          description: 'Are you sure you want to delete this quality?'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(() => this.qualities$.next([
          ...this.qualities$.value.filter(i => i.id !== id)
        ]))
      )
      .subscribe();
  }

  onEditClick(quality: Quality): void {
    this.dialog
      .open(QualitiesEditComponent, {
        data: quality
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        tap(res => this.qualities$.next([
          res,
          ...this.qualities$.value.filter(i => i.id !== quality.id)
        ]))
      )
      .subscribe();
  }

  onSaveClick(): void {
    const sorted = this.qualities$.value.sort(sortByName);
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
