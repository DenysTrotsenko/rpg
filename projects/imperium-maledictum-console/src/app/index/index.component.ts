import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import {
  AuthService,
  DialogService,
  NavListItemData,
  PermissionId, Setting,
  SettingService,
  UserService
} from '@shared';
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
  private readonly auth = inject(AuthService);
  private readonly data = inject(DataService);
  private readonly dialog = inject(DialogService);
  private readonly router = inject(Router);
  private readonly user = inject(UserService);
  private readonly setting = inject(SettingService);

  expanded = true;
  readonly logged$: Observable<boolean> = this.auth.logged$;
  readonly setting$: Observable<Setting> = this.setting.selected$;
  readonly options$: Observable<NavListItemData[]> = this.user.me$.pipe(
    map(user => user?.permissions ?? []),
    map(permissions => LOGGED_OPTIONS.filter(i => i.permission ? permissions.includes(i.permission) : true))
  );

  ngOnInit(): void {
    this.data.init();
    this.auth.option$
      .pipe(
        tap(res => this.setting.set(res as string))
      )
      .subscribe();
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
        tap(() => {
          this.setting.set(null);
          this.router.navigate(['/auth/sign-in']);
        })
      )
      .subscribe();
  }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
