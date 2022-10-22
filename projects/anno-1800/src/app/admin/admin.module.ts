import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { QualitiesEditComponent } from './qualities/qualities-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    QualitiesComponent,
    QualitiesEditComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
