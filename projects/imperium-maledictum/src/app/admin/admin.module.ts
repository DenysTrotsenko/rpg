import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CraftsmanshipComponent } from './craftsmanship/craftsmanship.component';
import { CraftsmanshipEditComponent } from './craftsmanship/craftsmanship-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    CraftsmanshipComponent,
    CraftsmanshipEditComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
