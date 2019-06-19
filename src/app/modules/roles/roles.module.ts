import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RolesRoutingModule} from './roles-routing.module';
import {RolesListComponent} from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    RolesRoutingModule,
    SharedModule
  ],
  declarations: [
    RolesListComponent
  ],
  providers: []
})
export class RolesModule {
}
