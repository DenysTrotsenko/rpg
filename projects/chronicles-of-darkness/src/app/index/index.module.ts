import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { DataModule } from '@cod/app/data/data.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    IndexRoutingModule,
    SharedModule,
    DataModule
  ]
})
export class IndexModule {}
