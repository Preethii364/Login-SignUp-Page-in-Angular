import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { Http,Response,Headers }    from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule }    from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'signin', component: LoginSignupComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: '**', component: LoginSignupComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SignUpComponent,
    DashboardComponent,
    LoginSignupComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
