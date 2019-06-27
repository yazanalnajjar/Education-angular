import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators, Form} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentForm : FormGroup;
  constructor(private fb:FormBuilder  , private http: HttpClient , private router : Router) { }
  uri = 'http://localhost:3000';

  ngOnInit() {
    this.studentForm = this.fb.group({

      username : [''],
      password : [''],
    })
    this.studentForm.valueChanges.subscribe((res)=>{
      // console.log(res);
      console.log(this.studentForm.value);
    })
  }

  onSubmit()  {
    // console.log(this.studentForm.value);

    // console.log(this.studentForm.value);
    this.http.post(`${this.uri}/signinstudent`, this.studentForm.value)
    .subscribe((res )=> {
        console.log(this.studentForm.value , "awwww");
        if( Object.keys(res).length === 0){
        alert('Wrong');
        }else {

          this.router.navigate(['./teachername'])
        }

         console.log(res);
      // if(!this.studentForm.value){
      //   console.log("UNauthrized");

      // }

      // console.log(this.studentForm.value);
  });



}
}
