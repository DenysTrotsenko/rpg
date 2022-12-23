import { NgModule } from '@angular/core';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { SharedModule } from '@shared';
import { CustomizeWeaponDialogComponent } from './components/customize-weapon-dialog/customize-weapon-dialog.component';
import { CustomizeAdvancementSchemeComponent } from './components/customize-advancement-scheme/customize-advancement-scheme.component';
import { KeyValueArrayComponent } from './components/key-value-array/key-value-array.component';

@NgModule({
  declarations: [
    GetByIdPipe,
    CustomizeWeaponDialogComponent,
    CustomizeAdvancementSchemeComponent,
    KeyValueArrayComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GetByIdPipe,
    CustomizeWeaponDialogComponent,
    CustomizeAdvancementSchemeComponent,
    KeyValueArrayComponent
  ]
})
export class GameModule {}
