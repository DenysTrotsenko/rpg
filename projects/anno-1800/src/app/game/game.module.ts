import { NgModule } from '@angular/core';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { CustomizeWeaponDialogComponent } from './components/customize-weapon-dialog/customize-weapon-dialog.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    GetByIdPipe,
    CustomizeWeaponDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GetByIdPipe,
    CustomizeWeaponDialogComponent
  ]
})
export class GameModule { }
