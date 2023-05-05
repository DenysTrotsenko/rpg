import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

const DECLARATIONS = [];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class GameModule {}
