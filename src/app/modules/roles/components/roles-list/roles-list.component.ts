import {Component, OnInit} from '@angular/core';
import {MainListComponent} from '../../../../core/components/main-list/main-list';

@Component({
  selector: 'app-roles-list',
  templateUrl: '../../../../core/components/main-list/main-list.html'
})
export class RolesListComponent extends MainListComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.listTitle = 'roles';
  }
}
