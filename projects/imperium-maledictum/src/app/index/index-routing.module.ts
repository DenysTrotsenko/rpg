import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard, PermissionId } from '@std';
import { permissionGuard } from '@std';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'campaigns',
        loadChildren: () => import('../campaigns/campaigns.module').then(m => m.CampaignsModule),
        canActivate: [AuthGuard, permissionGuard(PermissionId.CAMPAIGNS)]
      },
      {
        path: 'characters',
        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersModule),
        canActivate: [AuthGuard, permissionGuard(PermissionId.CHARACTERS)]
      },
      {
        path: 'system',
        loadChildren: () => import('../system/system.module').then(m => m.SystemModule)
      },
      {
        path: 'references',
        loadChildren: () => import('../references/references.module').then(m => m.ReferencesModule)
      },
      {
        path: 'tools',
        loadChildren: () => import('../tools/tools.module').then(m => m.ToolsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../../../std/src/lib/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
