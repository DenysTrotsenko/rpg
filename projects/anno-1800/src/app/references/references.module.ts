import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { GameModule } from '@ti/app/game/game.module';


@NgModule({
  declarations: [
    ReferencesComponent
  ],
  imports: [
    SharedModule,
    GameModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
