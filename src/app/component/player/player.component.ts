import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../animation/animations';
import { SearchService } from '../../service/search.service';
import { User } from '../../class/user.class';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [SearchService],
  animations: [slideInDownAnimation]
})

export class PlayerComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  keyword: string = '';
  players: Array<User> = [];
  // players: Observable<User[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  dealSrc(id: number): string {
    return `http://static.lolbox.duowan.com/images/profile_icons/${id}.jpg`;
  }

  searchNow(kw: string): void {
    this.searchService.getSearch(kw).then(res => {
      this.players = res;
    })
  }

  ngOnInit() {
    // this.players = this.searchTerms
    //   .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => term   // switch to new observable each time the term changes
    //     // return the http search observable
    //     ? this.searchService.search(term)
    //     // or the observable of empty heroes if there was no search term
    //     : Observable.of<User[]>([]))
    //   .catch(error => {
    //     // TODO: add real error handling
    //     console.log(error);
    //     return Observable.of<User[]>([]);
    //   });
  }

}
