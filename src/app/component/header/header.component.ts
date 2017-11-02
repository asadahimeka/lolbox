import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../service/header.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public navTitle: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    public hs: HeaderService,
  ) { }

  ngOnInit() {
    let actr = this.activatedRoute;
    while (actr.firstChild) {
      actr = actr.firstChild;
    }
    actr.data.subscribe(v => this.navTitle = v['title']);

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => this.navTitle = event['title']);

    // this.navTitle ? 0 : this.hs.change$.subscribe((v: string) => this.navTitle = v);
  }

  goBack(): void {
    this.router.url.indexOf('home') > -1
      ? this.router.navigate(['/'])
      : this.location.back();
  }

}
