import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';

@NgModule({
  declarations: [
    ToolsComponent,
    NameGeneratorComponent
  ],
  imports: [
    SharedModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
