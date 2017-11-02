import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../animation/animations';
@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  animations: [slideInDownAnimation]
})
export class CoverComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
  }

}
