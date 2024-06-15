import { NgModule } from '@angular/core';
import { SharedModule } from '@std';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }