import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-teachername',
  templateUrl: './teachername.component.html',
  styleUrls: ['./teachername.component.css']
})
export class TeachernameComponent implements OnInit {

  uri = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  ngOnInit() {

  }

  handleClick() {


    // console.log("YZZZZZN");

        this.http.get(`${this.uri}/teacher`)
        .subscribe(res => console.log(res.teachername[0].username));


  }

}
