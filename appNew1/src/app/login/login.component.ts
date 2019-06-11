import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators, Form} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentForm : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.fb.group({

      username : [''],
      password : [''],
    })

  }

  onSubmit() : void {
    console.log(this.studentForm.value);
  }


}
