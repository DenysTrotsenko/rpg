import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FifthEditionModule } from '@shadowrun/app/5e/5e.module';
import { UiModule } from '@shadowrun/app/ui/ui.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CloneDialogComponent } from './clone-dialog/clone-dialog.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CreateComponent,
    ListComponent,
    ViewComponent,
    CloneDialogComponent
  ],
  imports: [
    SharedModule,
    CharactersRoutingModule,
    FifthEditionModule,
    UiModule
  ]
})
export class CharactersModule { }
