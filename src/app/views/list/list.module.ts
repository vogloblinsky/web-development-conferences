import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'angular2-moment';

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        RouterModule,
        ListRoutingModule,
        BrowserModule,
        MomentModule
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule { }
