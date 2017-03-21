import { Component, OnInit, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConferencesService } from '../../services/conferences.service';

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit, AfterViewInit, OnDestroy {

    conference;
    instanciated: boolean = false;

    constructor(private route: ActivatedRoute,
        private conferencesService: ConferencesService,
        private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe((params: { id: number }) => {
            if (!this.instanciated) {
                this.instanciated = true;
            } else {
                this.destroyButtons();
                this.loadButtons();
            }
            this.conference = this.conferencesService.getConference(params.id);
        });
    }

    ngOnDestroy() {
        this.instanciated = false;
    }

    ngAfterViewInit() {
        this.loadButtons();
    }

    destroyButtons() {
        var element = document.getElementById('twitter-follow-' + this.conference.twitter);
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    loadButtons() {
        this.loadTwitterButton();
        this.loadYoutubeButton();
    }

    loadTwitterButton() {
        if (this.conference.twitter) {
            setTimeout(() => {
                window['twttr'].widgets.createFollowButton(
                    this.conference.twitter,
                    document.getElementById('twitter-follow-' + this.conference.twitter)
                );
            }, 750);
        }
    }

    loadYoutubeButton() {
        if (this.conference.youtube) {
            setTimeout(() => {
                let container = document.getElementById('yt-button-container-render-' + this.conference.youtube),
                    options = {
                        'layout': 'full'
                    };
                if (this.conference.youtubeMode && this.conference.youtubeMode === 'user') {
                    options['channel'] = this.conference.youtube;
                } else {
                    options['channelid'] = this.conference.youtube;
                }
                window['gapi'].ytsubscribe.render(container, options);
            }, 750);
        }
    }

    close() {
        this.router.navigate([{ outlets: { 'detail': null } }]);
    }
}
