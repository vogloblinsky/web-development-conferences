import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map.component';

const MAP_ROUTES: Routes = [
    { path: 'map', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(MAP_ROUTES)],
  exports: [RouterModule]
})
export class MapRoutingModule {}
