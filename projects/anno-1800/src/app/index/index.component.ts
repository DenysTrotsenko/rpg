import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap, combineLatest } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { AuthService, DialogService, getId, SnackbarService, StorageService } from '@shared';
import { RISK_FACTORS } from '@flames-of-freedom-1e/risk-factors';
import { LANGUAGES } from '@flames-of-freedom-1e/languages';
import { SPELL_TYPES } from '@flames-of-freedom-1e/spells';
import { THREAT_TRAITS } from '@flames-of-freedom-1e/threat-traits';
import { THREAT_TYPES } from '@flames-of-freedom-1e/threat-types';

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

  // Archetypes
  // Cultures ???
  // Professions
  // Spells, Alchemical
  // Threats
  // Weapons
  onSaveDataClick(): void {
    // combineLatest([
    //   this.storage.download<InjuryType[]>('/data/injury-types.json')
    // ]).pipe(
    //   switchMap(([newInjuryTypes]) => {
    //     const items = INJURIES.map(item => {
    //       item.id = getId() as any;
    //       item.type = newInjuryTypes.find(i => i.name === INJURY_TYPES.find(j => j.id === item.type).name).id as any;
    //       return item;
    //     });
    //     console.log(items);
        // const data = JSON.stringify(items, null, 2);
        // const blob = new Blob([data], { type: 'application/json' });
        // return this.storage.upload('/data/injuries.json', blob);
        // return of(true);
      // }),
      // tap(() => this.snackbar.success('Data successfully saved!')),
      // catchError(() => {
      //   this.snackbar.error('Some error occurred, try again later!');
      //   return of(null);
      // })
    // ).subscribe();
    const items = THREAT_TYPES.map(item => {
      item.id = getId() as any;
      return item;
    });
    const data = JSON.stringify(items, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    this.storage.upload('/data/threat_types.json', blob).subscribe(res => console.log('SUCCESS!'));
  }
}
