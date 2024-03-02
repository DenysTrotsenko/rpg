import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AuthService, CampaignService, DialogService, NavListItemData, PermissionId, UserService } from '@shared';
import { DataService } from '../common/data.service';

const LOGGED_OPTIONS: NavListItemData[] = [
  { link: './admin', icon: 'admin_panel_settings', label: 'Admin', permission: PermissionId.ADMIN },
  { link: './campaigns', icon: 'grade', label: 'Campaigns', permission: PermissionId.CAMPAIGNS },
  { link: './characters', icon: 'group', label: 'Characters', permission: PermissionId.CHARACTERS },
  { link: './system', icon: 'book_2', label: 'Rulebook' },
  { link: './references', icon: 'format_list_bulleted', label: 'References' },
  { link: './profile', icon: 'account_circle', label: 'Profile' },
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

  trackById(_: number, item): unknown {
    return item.id;
  }
}
