import {Component, OnInit} from '@angular/core';
import {MainListComponent} from '../../../../core/components/main-list/main-list';

@Component({
  selector: 'app-privileges-list',
  templateUrl: '../../../../core/components/main-list/main-list.html'
})
export class PrivilegesListComponent extends MainListComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.listTitle = 'privileges';
  }
}
