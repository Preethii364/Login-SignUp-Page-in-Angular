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
import { UserBlogComponent } from './user-blog/user-blog.component';
import { DisplayComponent } from './display/display.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import {APIServiceService} from './apiservice.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
// import { url } from 'inspector';

const appRoutes: Routes = [
  { path: 'signin', component: LoginSignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login' ,      component:UserLoginComponent  },
  { path: '**', component: LoginSignupComponent }  
  
  //if we specify any other string pattern except the above 2 mentioned paths-signin & dashboard so it will go to this path **
];


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SignUpComponent,
    DashboardComponent,
    LoginSignupComponent,
    UserBlogComponent,
    DisplayComponent,
    ListDisplayComponent,
    FileUploadComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ APIServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
