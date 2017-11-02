import { Component, OnInit, HostBinding } from "@angular/core";
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';
import { NewsService } from '../../service/news.service';
import { Newsitem } from '../../class/newsitem.class';
import { Banner } from '../../class/banner.class';
import { slideInDownAnimation } from '../../animation/animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [slideInDownAnimation],
})
export class NewsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  newsList: Array<Newsitem>;
  bannerList: Array<Banner>;

  iloading: boolean = true;
  swiperContainer: KSSwiperContainer;
  swipeOptions: any;

  constructor(private newsService: NewsService) {
    this.swipeOptions = {
      autoplay: 3000,
      speed: 1000,
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      lazyLoading: true,
    }
  }

  ngOnInit() {
    this.bannerList = this.newsService.getBanner();
    this.newsList = this.newsService.getNews();
  }

  dealPv(pv: string): string {
    return pv.length > 4 ? (parseInt(pv) / 10000).toFixed(0) + '万' : pv;
  }
}
