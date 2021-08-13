import { NgModule } from '@angular/core';
import { CoreModule as Core } from '@shared';
import { UserService } from './user.service';

@NgModule({
  exports: [
    Core
  ],
  providers: [
    UserService
  ]
})
export class CoreModule {}
