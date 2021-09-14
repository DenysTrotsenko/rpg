import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'pc/create', component: CreateComponent },
      { path: 'pc/update/:id', component: CreateComponent },
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
