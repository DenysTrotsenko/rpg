import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    children: [
      { path: 'name-generator', component: NameGeneratorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
