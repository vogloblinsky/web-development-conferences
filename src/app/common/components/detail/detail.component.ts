import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConferencesService } from '../../services/conferences.service';

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

    conference;

    constructor(private route: ActivatedRoute,
                private conferencesService: ConferencesService,
                private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params: { id: number }) => {
            this.conference = this.conferencesService.getConference(params.id);
        });
    }

    close() {
        this.router.navigate([{outlets: {'detail': null}}]);
    }
}
