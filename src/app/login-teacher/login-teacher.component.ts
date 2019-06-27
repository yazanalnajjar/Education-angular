import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators, Form} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {
  teacherForm : FormGroup;

  constructor(private fb:FormBuilder  , private http: HttpClient , private router: Router) { }


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

       console.log(this.teacherForm.value);

      this.http.post(`${this.uri}/signinteacher`, this.teacherForm.value)

      .subscribe((res )=> {
        console.log(this.teacherForm.value , "Check if the  teacherr if work or not");
        if( Object.keys(res).length === 0){
        alert('Wrong');
        }else {

          this.router.navigate(['./teachername'])
        }

         console.log(res);
    });


    console.log("HEELO")
   }
  }




