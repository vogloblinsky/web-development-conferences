import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        RouterModule,
        MapRoutingModule
    ],
    exports: [
        MapComponent
    ]
})
export class MapModule { }
