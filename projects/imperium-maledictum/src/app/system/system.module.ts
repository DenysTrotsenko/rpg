import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
