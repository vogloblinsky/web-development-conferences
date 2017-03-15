import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';

const LIST_ROUTES: Routes = [
    { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(LIST_ROUTES)],
  exports: [RouterModule]
})
export class ListRoutingModule {}
