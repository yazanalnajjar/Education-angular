import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-teachername',
  templateUrl: './teachername.component.html',
  styleUrls: ['./teachername.component.css']
})
export class TeachernameComponent implements OnInit {
     Teachername  = [];
  uri = 'http://localhost:3000';

  constructor(private http : HttpClient , private router: Router ) { }

  ngOnInit() {

  }

  // handleClick() {



  //       this.http.get(this.uri + '/teacher')
  //       .subscribe((res :any) =>{

  //          this.Teachername = res.teachername;

  //          console.log(res);

  //       });

  // }

  // teacherlist() {
  //   this.http.get(this.uri + '/teacher')
  //       .subscribe((res :any) =>{

  //          this.Teachername = res.teachername;
  //         //  console.log(res);
  //       });
  // }


  onClick(teacherId : number){



    this.http.get(this.uri + '/teachersInfo')
    .subscribe((res :any) =>{

       this.Teachername = res.teachername;

       console.log(res);

    });

    this.router.navigate(['/teachersInfo' , teacherId ]);
  }
}
