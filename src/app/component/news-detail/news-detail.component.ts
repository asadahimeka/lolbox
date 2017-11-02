import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderService } from '../../service/header.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  public iUrl: any;

  constructor(
    public hs: HeaderService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.hs.setNavTitle('資訊詳情');
    this.titleService.setTitle(this.activatedRoute.snapshot.paramMap.get('t'));
    this.iUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.activatedRoute.snapshot.paramMap.get('u'));
    // this.activatedRoute.paramMap.subscribe(p => console.log(p.get('u')))
  }

}
