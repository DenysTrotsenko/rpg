import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './world.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path: '',
    component: WorldComponent,
    children: [
      { path: 'notes', component: NotesComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: '**', redirectTo: 'timeline', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }
