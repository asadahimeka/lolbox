import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderService {
    private navTitle: string = '';
    public change$: EventEmitter<string>;

    constructor() {
        this.change$ = new EventEmitter();
    }

    public getNavTitle(): string {
        return this.navTitle;
    }
    public setNavTitle(newTitle: string): void {
        this.navTitle = newTitle;
    }

}