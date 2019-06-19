import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PrivilegesRoutingModule} from './privileges-routing.module';
import {PrivilegesListComponent} from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    PrivilegesRoutingModule,
    SharedModule
  ],
  declarations: [
    PrivilegesListComponent
  ],
  providers: []
})
export class PrivilegesModule {
}
