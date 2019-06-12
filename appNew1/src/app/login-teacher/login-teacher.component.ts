import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators, Form} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {
  teacherForm : FormGroup;

  constructor(private fb:FormBuilder  , private http: HttpClient) { }


  uri = 'http://localhost:3000';

  ngOnInit() {

    this.teacherForm = this.fb.group({

      username : [''],
      password : [''],
    })
    this.teacherForm.valueChanges.subscribe((data)=>{
      console.log(this.teacherForm.value);
    })
  }

    onSubmit()  {
      // const obj = {
      //   person_name: 'yazan',
      //   business_name: 'It Company',
      //   business_gst_number: '4'
      // };

        console.log(this.teacherForm.value);
    this.http.post(`${this.uri}/signinteacher`, this.teacherForm.value)
    .subscribe(res => console.log('Done'));

    // // this.http
    //   .post<boolean>('http://localhost:3000/signupstudent', this.studentForm,  httpOptions)
    //   .pipe(
    //     catchError("Is NOT Exiasdsad");

    // });


    // return  this.http.get(`${this.uri}/yzn`).
    // subscribe((res)  => { console.log(res)});


   }
  }




