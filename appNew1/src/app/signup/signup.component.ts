import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {


  studentForm : FormGroup;

  uri = 'http://localhost:3000';

  constructor(private fb:FormBuilder  , private http: HttpClient ) { }

  ngOnInit() {

    this.studentForm = this.fb.group({


      username : [''],
      email  : [''],
      phonenumber : [''],
      location : [''],
      password : ['']

    })

    this.studentForm.valueChanges.subscribe((data)=>{
      console.log(this.studentForm.value);
    })
  }


  onSubmit()  {
    // const obj = {
    //   person_name: 'yazan',
    //   business_name: 'It Company',
    //   business_gst_number: '4'
    // };

      console.log(this.studentForm.value);
  this.http.post(`${this.uri}/signupstudent`, this.studentForm.value)
  .subscribe((res :any) =>{

   console.log('Done')
  });

  // // this.http
  //   .post<boolean>('http://localhost:3000/signupstudent', this.studentForm,  httpOptions)
  //   .pipe(
  //     catchError("Is NOT Exiasdsad");

  // });


  // return  this.http.get(`${this.uri}/yzn`).
  // subscribe((res)  => { console.log(res)});


}

  }

