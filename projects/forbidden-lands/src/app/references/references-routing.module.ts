import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencesComponent } from './references.component';

const routes: Routes = [
  {
    path: '',
    component: ReferencesComponent,
    children: [
      // { path: 'careers', component: CareersComponent },
      { path: '**', redirectTo: 'characteristics', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
