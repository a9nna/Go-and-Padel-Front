import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users/users.service';
import { reducer } from './store/users/reducers/user.reducer';
import { AuthService } from './services/auth/auth.service';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { UserModule } from './store/users/user.module';
import { TokenService } from './services/token/token.service';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MatchesModule } from './store/matches/matches.module';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { UiModule } from './store/ui/ui.module';
import { LoaderComponent } from './components/loader/loader.component';
import { CreateMatchComponent } from './components/create-match/create-match.component';
import { CreateMatchPageComponent } from './components/pages/create-match-page/create-match-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { MatchModule } from './store/match/match.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    HomePageComponent,
    MatchesComponent,
    MatchComponent,
    LoaderComponent,
    CreateMatchComponent,
    CreateMatchPageComponent,
    HeaderComponent,
    NavBarComponent,
    ModalComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ users: reducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    MatchesModule,
    UiModule,
    MatchModule,
  ],
  providers: [
    UsersService,
    FormBuilder,
    Store,
    { provide: String, useValue: 'stringValue' },
    AuthService,
    TokenService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
