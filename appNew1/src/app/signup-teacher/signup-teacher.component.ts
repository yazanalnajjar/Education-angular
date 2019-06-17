import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent implements OnInit {
  teacherForm : FormGroup;

  uri = 'http://localhost:3000';
  router: any;
  constructor(private fb:FormBuilder  , private http: HttpClient) { }

  ngOnInit() {


    this.teacherForm = this.fb.group({

      name : [''],
      username : [''],
      email  : [''],
      phonenumber : [''],
      location : [''],
      password : [''],
      degree : [''],
      exp : [''],
      hobbies : [''],
      faculty : ['']

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
  this.http.post(`${this.uri}/signupteacher`, this.teacherForm.value)
  .subscribe((res ) => {
    console.log(res);
    // console.log('Done')

  });


  // this.router.navigate(['./home'])





  // // this.http
  //   .post<boolean>('http://localhost:3000/signupstudent', this.studentForm,  httpOptions)
  //   .pipe(
  //     catchError("Is NOT Exiasdsad");

  // });


  // return  this.http.get(`${this.uri}/yzn`).
  // subscribe((res)  => { console.log(res)});


}


}
