import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateMatchPageComponent } from './components/pages/create-match-page/create-match-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginUserComponent },
  {
    path: '',
    component: HomePageComponent,
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: "create-match", component: CreateMatchPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
