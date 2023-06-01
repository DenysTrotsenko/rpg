import { PermissionId } from '@shared';

export const FIREBASE_ERROR_MESSAGES = new Map()
  .set('auth/configuration-not-found', 'Not found');

export const PERMISSIONS: PermissionId[] = [
  'admin' as PermissionId,
  'admin::setting' as PermissionId,
  'admin::users' as PermissionId,
];
