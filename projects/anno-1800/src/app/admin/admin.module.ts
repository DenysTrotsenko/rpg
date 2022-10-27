import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { QualitiesEditComponent } from './qualities/qualities-edit.component';
import { AilmentsComponent } from './ailments/ailments.component';
import { AilmentsEditComponent } from './ailments/ailments-edit.component';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugsEditComponent } from './drugs/drugs-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    QualitiesComponent,
    QualitiesEditComponent,
    AilmentsComponent,
    AilmentsEditComponent,
    DrugsComponent,
    DrugsEditComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
