import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResolver} from '@std';
import { CampaignsComponent } from './campaigns.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children: [
      { path: 'list', component: ListComponent, resolve: { user: AuthResolver } },
      { path: 'create', component: CreateComponent, resolve: { user: AuthResolver } },
      { path: 'create/:id', component: CreateComponent, resolve: { user: AuthResolver } },
      { path: 'view/:id', component: ViewComponent, resolve: { user: AuthResolver } },
      { path: '**', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
