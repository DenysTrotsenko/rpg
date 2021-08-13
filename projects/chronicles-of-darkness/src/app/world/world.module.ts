import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { WorldRoutingModule } from './world-routing.module';
import { WorldComponent } from './world.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    WorldComponent,
    OverviewComponent
  ],
  imports: [
    SharedModule,
    WorldRoutingModule
  ]
})
export class WorldModule { }
