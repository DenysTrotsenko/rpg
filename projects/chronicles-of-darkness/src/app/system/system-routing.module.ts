import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: 'references', component: ReferencesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
