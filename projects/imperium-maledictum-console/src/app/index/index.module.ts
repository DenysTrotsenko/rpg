import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SidenavComponent } from '@im-common';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    IndexRoutingModule,
    SidenavComponent,
    AsyncPipe
  ]
})
export class IndexModule { }
