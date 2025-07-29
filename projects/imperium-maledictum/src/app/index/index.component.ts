import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campaign, CampaignService, NavListItemData, PermissionId, UserService } from '@std';

const LOGGED_OPTIONS: NavListItemData[] = [
  { link: './campaigns', icon: 'grade', label: 'Campaigns' },
  { link: './characters', icon: 'group', label: 'Characters' },
  { link: './world', icon: 'language', label: 'World', permission: PermissionId.WORLD_18XX },
  { link: './rules', icon: 'book_2', label: 'Rules' },
  { link: './references', icon: 'format_list_bulleted', label: 'References' },
  { link: './tools', icon: 'handyman', label: 'Tools' },
  { link: './profile', icon: 'account_circle', label: 'Profile' },
];

@Component({
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IndexComponent {
  private readonly campaign = inject(CampaignService);
  private readonly router = inject(Router);
  private readonly user = inject(UserService);

  readonly campaign$: Observable<Campaign> = this.campaign.selected$;
  readonly options$: Observable<NavListItemData[]> = this.user.me$.pipe(
    map(user => user?.permissions ?? []),
    map(permissions => LOGGED_OPTIONS.filter(i => i.permission ? permissions.includes(i.permission) : true))
  );

  onLogout(): void {
    this.campaign.set(null);
    this.router.navigate(['/auth/sign-in']);
  }
}
