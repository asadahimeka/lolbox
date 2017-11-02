import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoverComponent } from '../component/cover/cover.component';
import { HomeComponent } from '../component/home/home.component';
import { NewsComponent } from '../component/news/news.component';
import { PlayerComponent } from '../component/player/player.component';
import { HeroComponent } from '../component/hero/hero.component';
import { VideoComponent } from '../component/video/video.component';
import { DetailComponent } from '../component/detail/detail.component';
import { HeroDetailComponent } from '../component/hero-detail/hero-detail.component';
import { NewsDetailComponent } from '../component/news-detail/news-detail.component';
import { VideoDetailComponent } from '../component/video-detail/video-detail.component';
import { PlayerDetailComponent } from '../component/player-detail/player-detail.component';
import { BattleDetailComponent } from '../component/battle-detail/battle-detail.component';
import { PageNotFoundComponent } from '../component/PageNotFound/PageNotFound.component';

const routes: Routes = [
    { path: '', component: CoverComponent, pathMatch: 'full', data: { title: 'Cover' } },
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', redirectTo: 'news', pathMatch: 'full', data: { title: '资讯' } },
            { path: 'news', component: NewsComponent, data: { title: '资讯' } },
            { path: 'player', component: PlayerComponent, data: { title: '玩家' } },
            { path: 'hero', component: HeroComponent, data: { title: '英雄' } },
            { path: 'video', component: VideoComponent, data: { title: '视频' } },
        ]
    },
    {
        path: 'detail', component: DetailComponent, children: [
            { path: '', redirectTo: '/home/news', pathMatch: 'full', data: { title: '' } },
            { path: 'hero', component: HeroDetailComponent, data: { title: '' } },
            { path: 'news', component: NewsDetailComponent, data: { title: '' } },
            { path: 'player/:vaid/:qquin', component: PlayerDetailComponent, data: { title: '' } },
            { path: 'battle', component: BattleDetailComponent, data: { title: '对战详情' } },
            { path: 'video', component: VideoDetailComponent, data: { title: '' } },
        ]
    },
    { path: '**', component: PageNotFoundComponent, data: { title: '404' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }