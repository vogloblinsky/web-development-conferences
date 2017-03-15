import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        RouterModule,
        ListRoutingModule
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule { }
