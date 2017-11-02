import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Newsitem } from '../class/newsitem.class';
import { Banner } from '../class/banner.class';
import { Videoitem } from '../class/videoitem.class';
import { Hero } from '../class/hero.class';
import { User } from '../class/user.class';

import { bannerNews } from '../../assets/data/banner';
import { newsList } from '../../assets/data/newslist';
import { videoList } from '../../assets/data/videolist';

@Injectable()
export class NewsService {
    private headers = new Headers({ 'DAIWAN-API-TOKEN': '434A9-27B9A-2F5AA-9D94F' });

    constructor(private http: Http) { }

    getBanner(): Array<Banner> {
        return bannerNews;
    }
    getNews(): Array<Newsitem> {
        return newsList;
    }
    getVideo(): Array<Videoitem> {
        return videoList;
    }

    getHeroList(): Promise<Hero[]> {
        return this.http.get(`/lol-api/champion`, { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getUserInfo(vaid: number, qquin: string): Promise<User[]> {
        // return this.http.get(`/lol-api/UserHotInfo?qquin=${qquin}&vaid=${vaid}`, { headers: this.headers })
        return this.http.get('assets/data/user-info.json')
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUserDetail(vaid: number, qquin: string): Promise<any[]> {
        // return this.http.get(`/lol-api/UserHotInfo?qquin=${qquin}&vaid=${vaid}`, { headers: this.headers })
        return this.http.get('assets/data/user-detail.json')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getBattleList(): Promise<any[]> {
        return this.http.get('assets/data/match.json')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getBattle(): Promise<any[]> {
        return this.http.get('assets/data/match-detail.json')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getArea(id: number): Promise<any> {
        return this.http.get(`/lol-api/Area`, { headers: this.headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getTierQueue(tier: number, queue: number): Promise<any> {
        return this.http.get(`/lol-api/GetTierQueue?tier=${tier}&queue=${queue}`, { headers: this.headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getHeroDetail(id?: number): Promise<any> {
        return this.http.get('assets/data/hero-detail.json')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}