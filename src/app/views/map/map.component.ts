import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { ConferencesService } from '../../common/services/conferences.service';

var L = window['L'];

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent implements AfterViewInit {

    conferences: any[];

    constructor(private conferencesService: ConferencesService) {
        this.conferences = this.conferencesService.getConferences();
    }

    ngAfterViewInit() {

        var markers = L.markerClusterGroup();

        var map = L.map('map').setView([20, 0], 2);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        for (var i = 0; i < this.conferences.length; i++) {
            var a = this.conferences[i];
            var title = a.name;
            var myIcon = L.icon({
                iconUrl: 'assets/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [22, 22],
                popupAnchor: [-9, -6],
                shadowUrl: 'assets/marker-shadow.png',
                shadowSize: [41, 41],
                shadowAnchor: [22, 22]
            });
            var marker = L.marker(new L.LatLng(a.gps.lat, a.gps.lng), {
                title: title,
                icon: myIcon
            });
            marker.bindPopup(title);
            markers.addLayer(marker);
        }
        map.addLayer(markers);
    }
}
