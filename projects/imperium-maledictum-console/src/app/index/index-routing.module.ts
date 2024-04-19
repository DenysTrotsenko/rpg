import { inject, NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard, PermissionId, Setting, SettingService } from '@shared';
import { permissionGuard } from '../common/guards';

const authResolver: ResolveFn<Setting[]> = () => inject(SettingService).all$;

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../../../../std/src/lib/auth/auth.module').then(m => m.AuthModule),
        data: { label: 'Setting' },
        resolve: { options: authResolver }
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard, permissionGuard(PermissionId.ADMIN)]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
