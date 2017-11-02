import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { HeaderService } from '../../service/header.service';
import { Hero } from '../../class/hero.class';
import { slideInDownAnimation } from '../../animation/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {

  public iTabAct: number = 0;

  constructor(
    private newsService: NewsService,
    public hs: HeaderService,
    private titleService: Title
  ) { }

  ngOnInit() {
    scrollTo(0, 0);
    this.titleService.setTitle('英雄详情');
    this.newsService.getHeroDetail().then(res => {
      console.log(res);
      this.hs.setNavTitle(res[0].name);
    });

   
    // this.hs.change$.emit('英雄详情');
  }

  public actTab(i: number): void {
    this.iTabAct = i;
  }

}
