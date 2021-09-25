import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthResolver } from '@shared';
import { CharactersComponent } from './characters.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      { path: 'list', component: ListComponent, resolve: { user: AuthResolver } },
      { path: 'pc/create', component: CreateComponent, resolve: { user: AuthResolver } },
      { path: 'pc/update/:id', component: CreateComponent, resolve: { user: AuthResolver } },
      { path: 'pc/view/:id', component: ViewComponent },
      { path: '**', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
