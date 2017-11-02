import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-battle-detail',
  templateUrl: './battle-detail.component.html',
  styleUrls: ['./battle-detail.component.css']
})
export class BattleDetailComponent implements OnInit {

  battles: any[] = [];
  win: Array<any>;
  fail: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.getBattle().then(res => {
      this.battles.push(res[0].battle);
      this.win = res[0].battle.gamer_records.slice(0, 5);
      this.fail = res[0].battle.gamer_records.slice(5, 10);
    })
  }

  dealItemImg(id: number) {
    return `http://ddragon.leagueoflegends.com/cdn/6.21.1/img/item/${id}.png`;
  }

}
