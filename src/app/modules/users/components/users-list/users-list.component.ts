import {Component, OnInit} from '@angular/core';
import {MainListComponent} from '../../../../core/components/main-list/main-list';

@Component({
  selector: 'app-users-list',
  templateUrl: '../../../../core/components/main-list/main-list.html'
})
export class UsersListComponent extends MainListComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.listTitle = 'users';
  }
}
