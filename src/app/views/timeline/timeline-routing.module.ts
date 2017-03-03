import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline.component';

const TIMELINE_ROUTES: Routes = [
    { path: 'timeline', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(TIMELINE_ROUTES)],
  exports: [RouterModule]
})
export class TimelineRoutingModule {}
