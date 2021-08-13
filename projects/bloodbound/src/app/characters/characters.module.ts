import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CharactersComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
