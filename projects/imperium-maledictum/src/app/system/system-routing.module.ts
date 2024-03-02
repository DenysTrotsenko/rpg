import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: 'character-creation', component: CharacterCreationComponent },
      { path: '**', redirectTo: 'character-creation', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
