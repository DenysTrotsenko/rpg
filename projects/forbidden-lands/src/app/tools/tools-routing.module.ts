import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { HexMapComponent } from './hex-map/hex-map.component';
import { WorldMapComponent } from './world-map/world-map.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    children: [
      { path: 'hex', component: HexMapComponent },
      { path: 'eu4map', component: WorldMapComponent },
      { path: '**', redirectTo: 'hex', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
