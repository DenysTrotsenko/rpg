import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleComponent } from './style.component';

const routes: Routes = [
  { path: '', component: StyleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleRoutingModule { }
