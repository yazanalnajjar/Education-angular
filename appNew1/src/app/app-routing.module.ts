import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginTeacherComponent} from './login-teacher/login-teacher.component';
import { SignupTeacherComponent } from './signup-teacher/signup-teacher.component';
import { TeachernameComponent } from './teachername/teachername.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';

const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'login-t' , component : LoginTeacherComponent},
  {path : 'signup-t' , component : SignupTeacherComponent},
  {
    path : 'teachername',
    component :TeachernameComponent,

    children : [
    {
      path : 'teachersInfo' ,
      component : TeacherInfoComponent
    }
    ]

  },



  {path : 'home' , component : HomeComponent},

  {path : ' ' , redirectTo: '/' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
