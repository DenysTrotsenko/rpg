import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavListItemData, PermissionId, Setting, SettingService, UserService } from '@std';

const LOGGED_OPTIONS: NavListItemData[] = [
  { link: './admin', icon: 'admin_panel_settings', label: 'Admin', permission: PermissionId.ADMIN },
];

@Component({
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IndexComponent {
  private readonly router = inject(Router);
  private readonly user = inject(UserService);
  private readonly setting = inject(SettingService);

  readonly setting$: Observable<Setting> = this.setting.selected$;
  readonly options$: Observable<NavListItemData[]> = this.user.me$.pipe(
    map(user => user?.permissions ?? []),
    map(permissions => LOGGED_OPTIONS.filter(i => i.permission ? permissions.includes(i.permission) : true))
  );

  onLogout(): void {
    this.setting.set(null);
    this.router.navigate(['/auth/sign-in']);
  }
}
