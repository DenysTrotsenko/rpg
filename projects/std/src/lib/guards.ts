import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionId, UserService } from '@std';
import { map } from 'rxjs/operators';

export function permissionGuard(permission: PermissionId): CanActivateFn {
  return () => {
    const user: UserService = inject(UserService);

    return user.me$.pipe(
      map(i => (i?.permissions ?? []).includes(permission))
    );
  };
}
