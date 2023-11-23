import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mapTo, Observable, of, switchMap } from 'rxjs';
import { DialogService, Setting, SettingService, SnackbarService, StorageService } from '@shared';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { AdminSettingsEditComponent } from './admin-settings-edit.component';

@Component({
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSettingsComponent {
  readonly items$: Observable<Setting[]> = this.setting.all$;
  constructor(
    private readonly dialog: DialogService,
    private readonly setting: SettingService,
    private readonly storage: StorageService,
    private readonly snackbar: SnackbarService
  ) {}

  onEditClick(setting: Setting): void {
    this.dialog.open(AdminSettingsEditComponent, { data: setting }).afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(res => !!setting
          ? of(null).pipe(map(() => res))
          : this.storage.clone(res.id, res.clone).pipe(map(() => res))
        ),
        switchMap(res => this.setting.update(res.id, {
          id: res.id,
          name: res.name,
          storage: res.storage
        }).pipe(map(() => res))),
        tap(res => {
          this.snackbar.success(`${res.name} successfully created!`);
        }),
        catchError(() => {
          this.snackbar.error('Some error occurred, try again later!');
          return of(null);
        })
      )
      .subscribe();
  }
}
