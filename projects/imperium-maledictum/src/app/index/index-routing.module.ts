import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard } from '@std';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'campaigns',
        loadChildren: () => import('../campaigns/campaigns.module').then(m => m.CampaignsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'characters',
        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'world',
        loadChildren: () => import('../world/world.module').then(m => m.WorldModule)
      },
      {
        path: 'rules',
        loadChildren: () => import('../rules/rules.module').then(m => m.RulesModule)
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
