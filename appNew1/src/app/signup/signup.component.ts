import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  studentForm : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.studentForm = this.fb.group({

      firstname : [''],
      lastname : [''],
      email  : [''],
      phonenumber : [''],
      location : ['']

    })

    this.studentForm.valueChanges.subscribe((data)=>{
      console.log(this.studentForm.value);
    })
  }

  onSubmit() : void {
    console.log(this.studentForm.value);
  }

}
