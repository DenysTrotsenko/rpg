import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    IndexRoutingModule,
    SharedModule
  ]
})
export class IndexModule { }
