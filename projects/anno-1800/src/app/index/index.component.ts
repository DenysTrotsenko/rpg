import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap, combineLatest } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { AuthService, DialogService, getId, SnackbarService, StorageService } from '@shared';
import { INJURIES, INJURY_TYPES } from '@flames-of-freedom-1e/injuries';
import { InjuryType } from '@grim-and-perilous/models';
import { InjuryId } from '@flames-of-freedom-1e/enums';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
  expanded = true;
  readonly logged$: Observable<boolean> = this.auth.logged$;

  constructor(
    private auth: AuthService,
    private dialog: DialogService,
    private router: Router,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) {}

  onToggleSidenavClick(): void {
    this.expanded = !this.expanded;
  }

  onLogoutClick(): void {
    this.dialog
      .confirm({
        data: {
          title: 'Logout',
          description: 'Are you sure you want to Logout?',
          ok: 'Logout'
        }
      })
      .afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(() => this.auth.signOut()),
        tap(() => this.router.navigate(['/auth/sign-in']))
      )
      .subscribe();
  }

  onSaveDataClick(): void {
    combineLatest([
      this.storage.download<InjuryType[]>('/data/injury-types.json')
    ]).pipe(
      switchMap(([newInjuryTypes]) => {
        const items = INJURIES.map(item => {
          item.id = getId() as any;
          item.type = newInjuryTypes.find(i => i.name === INJURY_TYPES.find(j => j.id === item.type).name).id as any;
          return item;
        });
        console.log(items);
        // const data = JSON.stringify(items, null, 2);
        // const blob = new Blob([data], { type: 'application/json' });
        // return this.storage.upload('/data/injuries.json', blob);
        return of(true);
      }),
      tap(() => this.snackbar.success('Data successfully saved!')),
      catchError(() => {
        this.snackbar.error('Some error occurred, try again later!');
        return of(null);
      })
    ).subscribe();
    // Professions
  }
}
