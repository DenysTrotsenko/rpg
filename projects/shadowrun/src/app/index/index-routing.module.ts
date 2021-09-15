import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard } from '@shared';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'characters',
        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'campaigns',
        loadChildren: () => import('../campaigns/campaigns.module').then(m => m.CampaignsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'rules',
        loadChildren: () => import('../rules/rules.module').then(m => m.RulesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'tools',
        loadChildren: () => import('../tools/tools.module').then(m => m.ToolsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'world',
        loadChildren: () => import('../world/world.module').then(m => m.WorldModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
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
