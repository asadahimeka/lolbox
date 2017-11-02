import { Component, OnInit, HostBinding } from '@angular/core';
import { Videoitem } from '../../class/videoitem.class';
import { NewsService } from '../../service/news.service';
import { slideInDownAnimation } from '../../animation/animations';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  animations: [slideInDownAnimation]
})
export class VideoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  videoList: Array<Videoitem>;
  constructor(private newsService: NewsService) { }
  ngOnInit() {
    this.videoList = this.newsService.getVideo();
  }
}
