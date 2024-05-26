import { NgModule } from '@angular/core';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SharedModule } from '@shared';
import { CharacterCreationComponent } from './character-creation/character-creation.component';


@NgModule({
  declarations: [
    SystemComponent,
    CharacterCreationComponent
  ],
  imports: [
    SharedModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
