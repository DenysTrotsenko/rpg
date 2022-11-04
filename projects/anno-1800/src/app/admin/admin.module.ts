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
import { QuirksComponent } from './quirks/quirks.component';
import { TalentsComponent } from './talents/talents.component';
import { TraitsComponent } from './traits/traits.component';
import { QuirksEditComponent } from './quirks/quirks-edit.component';
import { TalentsEditComponent } from './talents/talents-edit.component';
import { TraitsEditComponent } from './traits/traits-edit.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsEditComponent } from './settings/settings-edit.component';


@NgModule({
  declarations: [
    AdminComponent,
    QualitiesComponent,
    QualitiesEditComponent,
    AilmentsComponent,
    AilmentsEditComponent,
    DrugsComponent,
    DrugsEditComponent,
    QuirksComponent,
    TalentsComponent,
    TraitsComponent,
    QuirksEditComponent,
    TalentsEditComponent,
    TraitsEditComponent,
    SettingsComponent,
    SettingsEditComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
