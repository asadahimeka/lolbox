import { Injectable } from '@angular/core';
import { Headers, URLSearchParams, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

import { User } from '../class/user.class';

@Injectable()
export class SearchService {

    constructor(private http: Http) { }

    private headers = new Headers({ 'DAIWAN-API-TOKEN': '434A9-27B9A-2F5AA-9D94F' });
    private params = new URLSearchParams();

    search(term: string): Observable<User[]> {
        this.params.set('keyword', term);
        return this.http.get(`/lol-api/UserArea`,
            { headers: this.headers, params: this.params })
            .map(res => res.json().data as User[]);
    }

    getSearch(kw: string): Promise<User[]> {
        // return this.http.get(`/lol-api/UserArea?keyword=${kw}`, { headers: this.headers })
        return this.http.get('assets/data/user-search-res.json')
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}