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
  // pageNum = 0;

  constructor(private http : HttpClient , private router: Router ) { }

  ngOnInit() {

          this.http.get(this.uri + '/teacher')
          .subscribe((res :any) =>{


             this.Teachername = res.teachername;

             console.log(res.teachername);

          });

    }








      onClick(teacherId : number) {

          this.router.navigate(['/teachersInfo' , teacherId++ ] );
      }
}
