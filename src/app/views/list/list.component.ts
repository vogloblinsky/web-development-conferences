import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';

import { ConferencesService } from '../../common/services/conferences.service';

const L = window['L'];

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListComponent implements AfterViewInit {

    conferences: any[];
    conference;
    map;

    constructor(private conferencesService: ConferencesService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.conferences = this.conferencesService.getConferences();
    }

    ngAfterViewInit() {        
    }
}
