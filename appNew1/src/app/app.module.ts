
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { SignupTeacherComponent } from './signup-teacher/signup-teacher.component';
import { TeachernameComponent } from './teachername/teachername.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatCheckboxModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LoginTeacherComponent,
    SignupTeacherComponent,
    TeachernameComponent,
    TeacherInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
