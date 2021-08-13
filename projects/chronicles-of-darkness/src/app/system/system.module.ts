import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    SystemComponent,
    ReferencesComponent
  ],
  imports: [
    SharedModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
