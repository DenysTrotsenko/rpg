import { NgModule } from '@angular/core';
// import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { SharedModule } from '@shared';
// import { CustomizeWeaponDialogComponent } from './components/customize-weapon-dialog/customize-weapon-dialog.component';
// import { KeyValueArrayComponent } from './components/key-value-array/key-value-array.component';
// import { SelectionListComponent } from './components/selection-list/selection-list.component';

const DECLARATIONS = [
  // GetByIdPipe,
  // CustomizeWeaponDialogComponent,
  // KeyValueArrayComponent,
  // SelectionListComponent
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
