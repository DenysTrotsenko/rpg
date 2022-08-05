import { NgModule } from '@angular/core';
import { GetByIdPipe } from './pipes/get-by-id.pipe';

@NgModule({
  declarations: [
    GetByIdPipe
  ],
  exports: [
    GetByIdPipe
  ]
})
export class GameModule { }
