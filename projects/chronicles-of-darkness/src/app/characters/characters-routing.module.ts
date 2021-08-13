import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { ListComponent } from './list/list.component';
import { CreatePcComponent } from './create-pc/create-pc.component';
import { ViewPcComponent } from './view-pc/view-pc.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'pc/create', component: CreatePcComponent },
      { path: 'pc/view/:id', component: ViewPcComponent },
      { path: '**', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
