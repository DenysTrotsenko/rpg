import { NgModule } from '@angular/core';
import { WorldRoutingModule } from './world-routing.module';
import { SharedModule } from '@std';
import { WorldComponent } from './world.component';


@NgModule({
  declarations: [
    WorldComponent
  ],
  imports: [
    SharedModule,
    WorldRoutingModule
  ]
})
export class WorldModule { }
