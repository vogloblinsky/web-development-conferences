import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { TimelineModule } from './views/timeline/';
import { MapModule } from './views/map/';

import { ConferencesService } from './common/services/conferences.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),

        TimelineModule,
        MapModule,

        AppRoutingModule
    ],
    providers: [
        ConferencesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
