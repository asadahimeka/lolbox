import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { User } from '../../class/user.class';
import { HeaderService } from '../../service/header.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent implements OnInit {

  public users: User[];
  public area: string;
  public tq: string;
  public kills: any[] = [];
  public battles: any[];
  public mvp: number;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private titleService: Title,
    public hs: HeaderService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('召唤师详情');
    let vaid = +this.route.snapshot.paramMap.get('vaid');
    let qquin = this.route.snapshot.paramMap.get('qquin');
    this.newsService.getUserInfo(vaid, qquin).then(res => {
      this.users = res;
      this.hs.setNavTitle(res[0].name);
      this.dealTQ(res[0].tier, res[0].queue);
    });
    this.dealArea(vaid);
    this.newsService.getUserDetail(vaid, qquin).then(res => {
      this.kills.push(res[1]);
      this.mvp = res[2].total_match_mvps;
    });
    this.newsService.getBattleList().then(res => {
      this.battles = res;
    });
  }

  dealWin(flag: number): string {
    if (flag == 0) {
      return '失败';
    } else if (flag == 1) {
      return '成功';
    }
  }

  dealArea(id: number): void {
    this.newsService.getArea(id).then(res => {
      res.forEach(e => {
        e.id == id ? this.area = e.name : 0;
      })
    });
  }

  dealTQ(t: number, q: number): void {
    this.newsService.getTierQueue(t, q).then(res => this.tq = res[0].return)
  }

}
