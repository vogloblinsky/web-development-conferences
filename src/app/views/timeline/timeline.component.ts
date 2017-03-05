import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as vis from 'vis';

import { ConferencesService } from '../../common/services/conferences.service';

@Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements AfterViewInit {

    conferences: any[];

    constructor(private conferencesService: ConferencesService) {
        this.conferences = this.conferencesService.getConferencesForTimeline();
    }

    ngAfterViewInit() {
        let container = document.getElementById('visualization'),

            items = new vis.DataSet(this.conferences),
            groups = new vis.DataSet(this.conferencesService.getRegionsForTimeline()),

            options: any = {
                min: '2017-01-01',
                max: '2017-12-31',
                selectable: false,
                groupOrder: 'content'
            },

            timeline = new vis.Timeline(container, items, options);
        timeline.setGroups(groups);
    }
}
