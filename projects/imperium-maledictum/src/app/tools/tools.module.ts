import { NgModule } from '@angular/core';
import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools.component';
import { SharedModule } from '@std';


@NgModule({
  declarations: [
    ToolsComponent
  ],
  imports: [
    SharedModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
