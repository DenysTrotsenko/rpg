import { NgModule } from '@angular/core';
import { WorldRoutingModule } from './world-routing.module';
import { SharedModule } from '@std';
import { WorldComponent } from './world.component';
import { NotesComponent } from './notes/notes.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    WorldComponent,
    NotesComponent,
    TimelineComponent
  ],
  imports: [
    SharedModule,
    WorldRoutingModule
  ]
})
export class WorldModule { }
