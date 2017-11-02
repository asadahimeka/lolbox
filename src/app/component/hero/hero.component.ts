import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../animation/animations';
import { NewsService } from '../../service/news.service';
import { Hero } from '../../class/hero.class';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  public heroList: Hero[];
  public isOver: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getHeroList()
      .then((res: Hero[]) => {
        this.heroList = res;
        this.isOver = true;
      });
  }

  public dealSrc(id: number): string {
    return `http://cdn.tgp.qq.com/pallas/images/champions_id/${id}.png`;
  }

}
