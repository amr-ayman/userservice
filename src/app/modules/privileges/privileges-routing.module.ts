import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivilegesListComponent} from './components';


export const privilegesRoutes: Routes = [
  {
    path: '',
    component: PrivilegesListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(privilegesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivilegesRoutingModule {
}
