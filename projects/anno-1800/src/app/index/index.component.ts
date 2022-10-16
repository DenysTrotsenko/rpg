import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { AuthService, DialogService } from '@shared';

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
    private router: Router
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
}
