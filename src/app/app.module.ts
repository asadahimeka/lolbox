import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './router/app-routing.module';
import { KSSwiperModule } from "angular2-swiper";

import { NewsService } from './service/news.service';
import { HeaderService } from './service/header.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CoverComponent } from './component/cover/cover.component';
import { HomeComponent } from './component/home/home.component';
import { NewsComponent } from './component/news/news.component';
import { PageNotFoundComponent } from './component/PageNotFound/PageNotFound.component';
import { PlayerComponent } from './component/player/player.component';
import { HeroComponent } from './component/hero/hero.component';
import { VideoComponent } from './component/video/video.component';
import { DetailComponent } from './component/detail/detail.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { NewsDetailComponent } from './component/news-detail/news-detail.component';
import { PlayerDetailComponent } from './component/player-detail/player-detail.component';
import { VideoDetailComponent } from './component/video-detail/video-detail.component';
import { BattleDetailComponent } from './component/battle-detail/battle-detail.component';
import { LoadingComponent } from './component/loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    KSSwiperModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    HomeComponent,
    NewsComponent,
    PageNotFoundComponent,
    PlayerComponent,
    HeroComponent,
    VideoComponent,
    HeroDetailComponent,
    NewsDetailComponent,
    DetailComponent,
    PlayerDetailComponent,
    VideoDetailComponent,
    BattleDetailComponent,
    LoadingComponent
],
  providers: [NewsService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }