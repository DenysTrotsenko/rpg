import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ToolsRoutingModule } from './tools-routing.module';
import { GameModule } from '@ti/app/game/game.module';
import { ToolsComponent } from './tools.component';
import { CombatTrackerComponent } from './combat-tracker/combat-tracker.component';
import { CombatTrackerUnitComponent } from './combat-tracker/combat-tracker-unit/combat-tracker-unit.component';


@NgModule({
  declarations: [
    ToolsComponent,
    CombatTrackerComponent,
    CombatTrackerUnitComponent
  ],
  imports: [
    SharedModule,
    ToolsRoutingModule,
    GameModule
  ]
})
export class ToolsModule {}
