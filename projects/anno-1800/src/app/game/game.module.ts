import { NgModule } from '@angular/core';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { SharedModule } from '@shared';
import { CustomizeWeaponDialogComponent } from './components/customize-weapon-dialog/customize-weapon-dialog.component';
import { CustomizeAdvancementSchemeComponent } from './components/customize-advancement-scheme/customize-advancement-scheme.component';

const DECLARATIONS = [
  GetByIdPipe,
  CustomizeWeaponDialogComponent,
  CustomizeAdvancementSchemeComponent
];

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
