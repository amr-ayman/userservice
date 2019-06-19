import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RolesListComponent} from './components';


export const rolesRoutes: Routes = [
  {
    path: '',
    component: RolesListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rolesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RolesRoutingModule {
}
