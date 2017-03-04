import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

var L = window['L'];

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent implements AfterViewInit {
    ngAfterViewInit() {

        var markers = L.markerClusterGroup();

        var addressPoints = [
            [48.11, -1.68, 'Rennes'],
            [48.02, -1.85, 'Bruz'],
            [48.18, -1.69, 'Betton']
        ];

        var map = L.map('map').setView([47, 0], 6);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        for (var i = 0; i < addressPoints.length; i++) {
            var a = addressPoints[i];
            var title = a[2];
            var myIcon = L.icon({
                iconUrl: 'assets/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [22, 22],
                popupAnchor: [-9, -6],
                shadowUrl: 'assets/marker-shadow.png',
                shadowSize: [41, 41],
                shadowAnchor: [22, 22]
            });
            var marker = L.marker(new L.LatLng(a[0], a[1]), {
                title: title,
                icon: myIcon
            });
            marker.bindPopup(title);
            markers.addLayer(marker);
        }
        map.addLayer(markers);
    }
}
