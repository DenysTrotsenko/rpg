import { NgModule } from '@angular/core';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { CustomizeWeaponDialogComponent } from './components/customize-weapon-dialog/customize-weapon-dialog.component';

@NgModule({
  declarations: [
    GetByIdPipe,
    CustomizeWeaponDialogComponent
  ],
  exports: [
    GetByIdPipe,
    CustomizeWeaponDialogComponent
  ]
})
export class GameModule { }
