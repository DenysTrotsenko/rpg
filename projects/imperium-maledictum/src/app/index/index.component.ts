import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import {
  AuthService, Campaign, CampaignId,
  CampaignService,
  DialogService,
  NavListItemData,
  PermissionId,
  UserService
} from '@shared';
import { DataService } from '../common/data.service';

const LOGGED_OPTIONS: NavListItemData[] = [
  { link: './campaigns', icon: 'grade', label: 'Campaigns', permission: PermissionId.CAMPAIGNS },
  { link: './characters', icon: 'group', label: 'Characters', permission: PermissionId.CHARACTERS },
  { link: './system', icon: 'book_2', label: 'Rulebook' },
  { link: './references', icon: 'format_list_bulleted', label: 'References' },
  { link: './tools', icon: 'handyman', label: 'Tools' },
  { link: './profile', icon: 'account_circle', label: 'Profile' },
];

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly campaign = inject(CampaignService);
  private readonly data = inject(DataService);
  private readonly dialog = inject(DialogService);
  private readonly router = inject(Router);
  private readonly user = inject(UserService);

  expanded = true;
  readonly logged$: Observable<boolean> = this.auth.logged$;
  readonly campaign$: Observable<Campaign> = this.campaign.selected$;
  readonly options$: Observable<NavListItemData[]> = this.user.me$.pipe(
    map(user => user?.permissions ?? []),
    map(permissions => LOGGED_OPTIONS.filter(i => i.permission ? permissions.includes(i.permission) : true))
  );

  ngOnInit(): void {
    this.data.init();
    this.auth.option$
      .pipe(
        tap(res => this.campaign.set(res as CampaignId))
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
          this.campaign.set(null);
          this.router.navigate(['/auth/sign-in']);
        })
      )
      .subscribe();
  }

  trackById(_: number, item): unknown {
    return item.id;
  }
}
