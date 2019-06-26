import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
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

  {path : 'teachername',component :TeachernameComponent,},

  {path : 'teachersInfo/:id' , component : TeacherInfoComponent},

  {path : 'about' , component : AboutComponent},


  {path : 'course' , component : CourseComponent},



  {path : 'home' , component : HomeComponent},

  {path : ' ' , redirectTo: '/home' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
