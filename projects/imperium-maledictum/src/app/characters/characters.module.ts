import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { DialogModule, SharedModule } from '@std';
import { CharactersComponent } from './characters.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CreateComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    SharedModule,
    DialogModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
