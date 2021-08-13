import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { StyleRoutingModule } from './style-routing.module';
import { StyleComponent } from './style.component';


@NgModule({
  declarations: [StyleComponent],
  imports: [
    SharedModule,
    StyleRoutingModule
  ]
})
export class StyleModule {}
