import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderService } from '../../service/header.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  public fUrl: any;
  public title: string;
  public cDate: string;

  constructor(
    public hs: HeaderService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.hs.setNavTitle('视频详情');
    this.cDate = this.activatedRoute.snapshot.queryParamMap.get('date').replace('T',' ');
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title');
    this.titleService.setTitle(this.title);
    this.fUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.activatedRoute.snapshot.queryParamMap.get('url'));
  }

}
