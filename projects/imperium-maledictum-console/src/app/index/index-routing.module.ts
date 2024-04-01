import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard, PermissionId } from '@shared';
import { permissionGuard } from '../common/guards';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../../../../std/src/lib/auth/auth.module').then(m => m.AuthModule)
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
