import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline.component';
import { TimelineRoutingModule } from './timeline-routing.module';

@NgModule({
    declarations: [
        TimelineComponent
    ],
    imports: [
        RouterModule,
        TimelineRoutingModule
    ],
    exports: [
        TimelineComponent
    ]
})
export class TimelineModule { }
