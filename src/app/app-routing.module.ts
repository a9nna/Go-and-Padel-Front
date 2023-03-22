import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginUserComponent },
  {
    path: '',
    component: HomePageComponent,
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'create-match',  loadChildren: async () => (await import('./components/pages/create-match-page/create.module')).CreateModule },
  { path: 'login', loadChildren: async() => (await import('./components/login-user/login-page.module')).LoginPageModule},
  { path: 'home', component: HomePageComponent },
  { path: '**', loadChildren: async () => (await import('./components/pages/not-found-page/not-found.module')).NotFoundModule },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
