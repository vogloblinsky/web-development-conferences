import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const conferencesData = require('../../../assets/conferences.json'),
    regionsData = require('../../../assets/world-regions.json');

@Injectable()
export class ConferencesService {
    conferences: any[];
    regions: any[];

    constructor() {
        this.conferences = conferencesData;
        this.regions = regionsData;
    }

    getConferences() {
        return this.conferences;
    }
    getConference(id) {
        return this.conferences.filter(conference => conference.id === id)[0];
    }

    getRegionsForTimeline() {
        return this.regions.map((region) => {
            const _region = {
                id: region.id,
                content: region.name
            };
            return _region;
        });
    }
    getConferencesForTimeline() {
        return this.conferences.map((conference) => {
            const _conference = {
                start: conference.startDate,
                end: conference.endDate,
                content: conference.name,
                group: conference.region,
                type: 'box'
            };
            return _conference;
        });
    }
}
