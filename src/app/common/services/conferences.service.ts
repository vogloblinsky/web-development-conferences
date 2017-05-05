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
    getConferencesForRegion(regionId) {
        return this.conferences.filter(function(c) { return c.region === regionId; });
    }
    getConference(id) {
        return this.conferences.filter(conference => conference.id === parseInt(id))[0];
    }

    getRegionsForTimeline() {
        var filledRegions = this.regions.filter((region) => {
            const conferences = this.conferences.filter(function(c) { return c.region === region.id; });
            if (conferences.length > 0) {
                const _region = {
                    id: region.id,
                    content: region.name
                };
                return _region;
            }
        });

        return filledRegions.map((region) => {
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
                idApp: conference.id,
                type: 'box'
            };
            return _conference;
        });
    }
    getConferencesForList() {
        return this.regions.map((region) => {
            let _region = Object.assign({}, region);
            _region.conferences = this.getConferencesForRegion(region.id).sort(function(a, b){
                return a.name.localeCompare(b.name);
            });
            if (_region.conferences.length > 0) {
                return _region;
            }
        }).filter(function(x) {
            return typeof x !== 'undefined';
        });
    }
}
