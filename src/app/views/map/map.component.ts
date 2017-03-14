import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ConferencesService } from '../../common/services/conferences.service';

const L = window['L'];

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent implements AfterViewInit {

    conferences: any[];

    constructor(private conferencesService: ConferencesService,
                private router: Router) {
        this.conferences = this.conferencesService.getConferences();
    }

    ngAfterViewInit() {

        const markers = L.markerClusterGroup({
            showCoverageOnHover: false
        }),
            map = L.map('map').setView([20, 0], 2);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        for (let i = 0; i < this.conferences.length; i++) {
            const a = this.conferences[i],
                title = a.name,
                confIcon = L.icon({
                    iconUrl: 'assets/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [22, 22],
                    popupAnchor: [-9, -6],
                    shadowUrl: 'assets/marker-shadow.png',
                    shadowSize: [41, 41],
                    shadowAnchor: [22, 22]
                }),
                marker = L.marker(new L.LatLng(a.gps.lat, a.gps.lng), {
                    title: title,
                    icon: confIcon,
                    data: a
                });
            marker.on('click', (e) => {
                let clickedConference = e.target.options.data,
                    selectedConference = this.conferencesService.getConference(clickedConference.id);
                this.router.navigate(['/', {outlets: {'detail': [selectedConference.id]}}]);
            });
            markers.addLayer(marker);
        }
        map.addLayer(markers);
    }
}
