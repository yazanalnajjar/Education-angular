import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators, Form} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentForm : FormGroup;
  constructor(private fb:FormBuilder  , private http: HttpClient) { }
  uri = 'http://localhost:3000';

  ngOnInit() {
    this.studentForm = this.fb.group({

      username : [''],
      password : [''],
    })
    this.studentForm.valueChanges.subscribe((data)=>{
      console.log(this.studentForm.value);
    })
  }

  onSubmit() : void {
    // console.log(this.studentForm.value);

    // console.log(this.studentForm.value);
    this.http.post(`${this.uri}/signinstudent`, this.studentForm.value)
    .subscribe(res => console.log('Done'));
  }


}
