import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users/users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  formBuilderToken,
  LoginUserComponent,
} from './components/login-user/login-user.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducer } from './store/users/reducers/user.reducer';

@NgModule({
  declarations: [AppComponent, LoginUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ users: reducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UsersService,
    { provide: formBuilderToken, useClass: FormBuilder },
    { provide: String, useValue: 'stringValue' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
