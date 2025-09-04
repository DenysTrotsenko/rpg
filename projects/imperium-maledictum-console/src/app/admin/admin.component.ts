import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { hasDuplicates, NavListItemData, PermissionId, UserService } from '@std';
import { routes } from './admin-routing.module';

const SETTING_OPTIONS: NavListItemData[] = [
  { link: './dictionary', label: 'Dictionary', permission: PermissionId.ADMIN_SETTING },
  { link: './actions', label: 'Actions', permission: PermissionId.ADMIN_SETTING },
  { link: './availability', label: 'Availability', permission: PermissionId.ADMIN_SETTING },
  { link: './bestiary-factions', label: 'Bestiary Factions', permission: PermissionId.ADMIN_SETTING },
  { link: './bestiary-roles', label: 'Bestiary Roles', permission: PermissionId.ADMIN_SETTING },
  { link: './bestiary-traits', label: 'Bestiary Traits', permission: PermissionId.ADMIN_SETTING },
  { link: './bestiary-types', label: 'Bestiary Types', permission: PermissionId.ADMIN_SETTING },
  { link: './bestiary', label: 'Bestiary', permission: PermissionId.ADMIN_SETTING },
  { link: './characteristics', label: 'Characteristics', permission: PermissionId.ADMIN_SETTING },
  { link: './conditions', label: 'Conditions', permission: PermissionId.ADMIN_SETTING },
  { link: './difficulties', label: 'Difficulties', permission: PermissionId.ADMIN_SETTING },
  { link: './durations', label: 'Durations', permission: PermissionId.ADMIN_SETTING },
  { link: './endeavours', label: 'Endeavours', permission: PermissionId.ADMIN_SETTING },
  { link: './environmental-traits', label: 'Env. Traits', permission: PermissionId.ADMIN_SETTING },
  { link: './events', label: 'Events', permission: PermissionId.ADMIN_SETTING },
  { link: './factions', label: 'Factions', permission: PermissionId.ADMIN_SETTING },
  { link: './items', label: 'Items', permission: PermissionId.ADMIN_SETTING },
  { link: './item-flaws', label: 'Item Flaws', permission: PermissionId.ADMIN_SETTING },
  { link: './item-qualities', label: 'Item Qualities', permission: PermissionId.ADMIN_SETTING },
  { link: './item-traits', label: 'Item Traits', permission: PermissionId.ADMIN_SETTING },
  { link: './item-modifications', label: 'Item Modifications', permission: PermissionId.ADMIN_SETTING },
  { link: './item-types', label: 'Item Types', permission: PermissionId.ADMIN_SETTING },
  { link: './malignancies', label: 'Malignancies', permission: PermissionId.ADMIN_SETTING },
  { link: './mutations', label: 'Mutations', permission: PermissionId.ADMIN_SETTING },
  { link: './origins', label: 'Origins', permission: PermissionId.ADMIN_SETTING },
  { link: './perils-of-the-warp', label: 'Perils of the Warp', permission: PermissionId.ADMIN_SETTING },
  { link: './psychic-disciplines', label: 'Psychic Disciplines', permission: PermissionId.ADMIN_SETTING },
  { link: './psychic-phenomenas', label: 'Psychic Phenomenas', permission: PermissionId.ADMIN_SETTING },
  { link: './psychic-powers', label: 'Psychic Powers', permission: PermissionId.ADMIN_SETTING },
  { link: './ranges', label: 'Ranges', permission: PermissionId.ADMIN_SETTING },
  { link: './roles', label: 'Roles', permission: PermissionId.ADMIN_SETTING },
  { link: './sizes', label: 'Sizes', permission: PermissionId.ADMIN_SETTING },
  { link: './skills', label: 'Skills', permission: PermissionId.ADMIN_SETTING },
  { link: './speed', label: 'Speed', permission: PermissionId.ADMIN_SETTING },
  { link: './specialisations', label: 'Specialisations', permission: PermissionId.ADMIN_SETTING },
  { link: './talents', label: 'Talents', permission: PermissionId.ADMIN_SETTING },
  { link: './targets', label: 'Targets', permission: PermissionId.ADMIN_SETTING },
];

const OTHER_OPTIONS: NavListItemData[] = [
  { link: './settings', label: 'Settings', permission: PermissionId.ADMIN_SETTING },
  { link: './users', label: 'Users', permission: PermissionId.ADMIN_USERS }
];

@Component({
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AdminComponent {
  private readonly user = inject(UserService);
  readonly valid: boolean = !hasDuplicates(routes[0].children.map(i => i.data?.path).filter(i => !!i));
  readonly settingOptions$: Observable<NavListItemData[]> = this.user.me$.pipe(
    map(user => user?.permissions ?? []),
    map(permissions => SETTING_OPTIONS.filter(i => i.permission ? permissions.includes(i.permission) : true))
  );
  readonly otherOptions$: Observable<NavListItemData[]> = this.user.me$.pipe(
    map(user => user?.permissions ?? []),
    map(permissions => OTHER_OPTIONS.filter(i => i.permission ? permissions.includes(i.permission) : true))
  );

  trackById(_, i): string { return i.id; }
}
