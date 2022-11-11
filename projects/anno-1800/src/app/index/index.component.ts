import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap, combineLatest } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { AuthService, DialogService, getId, SnackbarService, StorageService } from '@shared';
import { RISK_FACTORS } from '@flames-of-freedom-1e/risk-factors';
import { LANGUAGES } from '@flames-of-freedom-1e/languages';
import { ALCHEMICAL_ARTS, SPELL_TYPES, SPELLS } from '@flames-of-freedom-1e/spells';
import { THREAT_TRAITS } from '@flames-of-freedom-1e/threat-traits';
import { THREAT_TYPES } from '@flames-of-freedom-1e/threat-types';
import { Attribute, Skill, Tier } from '@grim-and-perilous/models/common';
import { SpellType, ThreatTrait } from '@flames-of-freedom-1e/models';
import { TIERS } from '@flames-of-freedom-1e/tiers';
import { WEAPONS } from '@flames-of-freedom-1e/weapons';
import { SKILLS } from '@flames-of-freedom-1e/skills';
import { QUALITIES } from '@flames-of-freedom-1e/qualities';
import { THREATS } from '@flames-of-freedom-1e/threats';
import { StoragePath } from '@grim-and-perilous/enums';
import { SIZES } from '@flames-of-freedom-1e/sizes';
import { NOTCHES } from '@flames-of-freedom-1e/notches';
import { ATTRIBUTES } from '@flames-of-freedom-1e/attributes';
import { PROFESSIONS } from '@flames-of-freedom-1e/professions';
import { TRAITS } from '@flames-of-freedom-1e/traits';
import { QUIRKS } from '@flames-of-freedom-1e/quirks';
import { TALENTS } from '@flames-of-freedom-1e/talents';
import { ARCHETYPES } from '@flames-of-freedom-1e/archetypes';
import { CULTURES } from '@flames-of-freedom-1e/cultures';

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

  // onSaveDataClick(): void {
  //   const path = StoragePath.THREAT_TYPES;
  //   this.storage.download<any[]>(path).pipe(
  //     switchMap(items => {
  //       const data = JSON.stringify(items, null, 2);
  //       const blob = new Blob([data], { type: 'application/json' });
  //       return this.storage.upload(path.replace('_', '-'), blob);
  //     }),
  //     tap(() => this.snackbar.success('Data successfully saved!')),
  //     catchError(() => {
  //       this.snackbar.error('Some error occurred, try again later!');
  //       return of(null);
  //     })
  //   ).subscribe();
  // }
}
