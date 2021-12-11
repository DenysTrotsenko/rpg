import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '@dm/app/characters/characters.component';
// import {ListComponent} from '@dm/app/characters/list/list.component';
import {AuthResolver} from '@shared';
// import {CreateComponent} from '@dm/app/characters/create/create.component';
// import {ViewComponent} from '@dm/app/characters/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    // children: [
      // { path: 'list', component: ListComponent, resolve: { user: AuthResolver } },
      // { path: 'pc/create', component: CreateComponent, resolve: { user: AuthResolver } },
      // { path: 'pc/update/:id', component: CreateComponent, resolve: { user: AuthResolver } },
      // { path: 'pc/view/:id', component: ViewComponent },
      // { path: '**', redirectTo: 'list', pathMatch: 'full' }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
