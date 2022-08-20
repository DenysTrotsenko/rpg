import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResolver} from '@shared';
import { CampaignsComponent } from '@ti/app/campaigns/campaigns.component';
import { ListComponent } from '@ti/app/campaigns/list/list.component';
import { CreateComponent } from '@ti/app/campaigns/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children: [
      { path: 'list', component: ListComponent, resolve: { user: AuthResolver } },
      { path: 'create', component: CreateComponent, resolve: { user: AuthResolver } },
      { path: '**', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
