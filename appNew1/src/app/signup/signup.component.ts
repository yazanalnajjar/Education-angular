import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {


  studentForm : FormGroup;
  constructor(private fb:FormBuilder  , private http: HttpClient ) { }

  ngOnInit() {

    this.studentForm = this.fb.group({

      firstname : [''],
      lastname : [''],
      email  : [''],
      phonenumber : [''],
      location : ['']

    })

    // this.studentForm.valueChanges.subscribe((data)=>{
    //   console.log(this.studentForm.value);
    // })
  }


  onSubmit()  {
    // this.http
    // .post<boolean>('http://localhost:3000/signupstudent',JSON.stringify( this.studentForm))
    // .subscribe(data => {
    //   console.log(data);
    //    })

    this.http
    .post<boolean>('http://localhost:3000/signupstudent', JSON.stringify(this.studentForm))
    .subscribe(data => {
      console.log(data);
  });

  // return this.http.get("http://jsonplaceholder.typicode.com/users").
  // subscribe((data)  => { console.log(data)});


}

  }

