import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersRoutingModule} from './users-routing.module';
import {UsersListComponent} from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersListComponent
  ],
  providers: []
})
export class UsersModule {
}
