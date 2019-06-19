import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Error403Component, Error404Component, Error500Component, LayoutComponent} from './core/components';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
      {path: 'privileges', loadChildren: './modules/privileges/privileges.module#PrivilegesModule'},
      {path: 'roles', loadChildren: './modules/roles/roles.module#RolesModule'},
      {path: 'users', loadChildren: './modules/users/users.module#UsersModule'},
      {path: '', redirectTo: '/privileges', pathMatch: 'full'}
    ]
  },
  {path: '403', component: Error403Component},
  {path: '404', component: Error404Component},
  {path: '500', component: Error500Component},
  {path: '**', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
