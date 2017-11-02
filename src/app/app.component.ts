import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // moduleId: module.id
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
    ) { }

    ngOnInit() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 640) deviceWidth = 640;
        document.documentElement.style.fontSize = deviceWidth / 7.5 / 16 * 100 + '%';
        this.router.events 
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe((event) => this.titleService.setTitle(event['title']));
    }
}