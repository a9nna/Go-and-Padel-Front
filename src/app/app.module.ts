import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users/users.service';
import { reducer } from './store/users/reducers/user.reducer';
import { AuthService } from './services/auth/auth.service';
import { UserModule } from './store/users/user.module';
import { TokenService } from './services/token/token.service';
import { MatchesModule } from './store/matches/matches.module';
import { UiModule } from './store/ui/ui.module';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatchModule } from './store/match/match.module';
import { environment } from '../environments/environment';
import { type Environment } from 'src/types';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';

const {
  images
} = environment as Environment

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    NavBarComponent,
    ModalComponent,
    HomePageComponent,
    MatchesComponent,
    MatchComponent,
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
    NgOptimizedImage,
  ],
  providers: [
    UsersService,
    FormBuilder,
    Store,
    { provide: String, useValue: 'stringValue' },
    AuthService,
    TokenService,
    provideCloudinaryLoader(`${images}`),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
