import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { DataResolver } from './data.resolver';

@NgModule({
  providers: [
    DataService,
    DataResolver
  ]
})
export class DataModule {}
