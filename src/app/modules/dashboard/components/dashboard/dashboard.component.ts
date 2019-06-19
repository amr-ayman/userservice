import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `<h3>{{'menu.dashboard' | translate}}</h3>`
})
export class DashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
