import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AuthService, CampaignService, DialogService, NavListItemData, PermissionId, UserService } from '@shared';
import { DataService } from '../common/data.service';

const LOGGED_OPTIONS: NavListItemData[] = [
  { link: './admin', icon: 'admin_panel_settings', label: 'Admin', permission: PermissionId.ADMIN },
];

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
  expanded = true;
  readonly logged$: Observable<boolean> = this.auth.logged$;
  readonly options$: Observable<NavListItemData[]> = this.user.me$.pipe(
    map(user => user?.permissions ?? []),
    map(permissions => LOGGED_OPTIONS.filter(i => i.permission ? permissions.includes(i.permission) : true))
  );

  constructor(
    private readonly auth: AuthService,
    private readonly campaign: CampaignService,
    private readonly data: DataService,
    private readonly dialog: DialogService,
    private readonly router: Router,
    private readonly user: UserService
  ) {}

  ngOnInit(): void {
    this.data.init();
  }

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

  trackById(_: number, item): unknown {
    return item.id;
  }
}
