import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TeachernameComponent } from '../teachername/teachername.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
    teacher = [];
    uri = 'http://localhost:3000';


    pageNo=0;
    snapshotPageNo=0;
  constructor(  private http : HttpClient ,  private router: Router  , private route : ActivatedRoute) { }

  ngOnInit() {




    this.snapshotPageNo = this.route.snapshot.queryParams['pageNum'] || 0;

    this.route.queryParamMap
    .subscribe(params => {
      this.pageNo = +params.get('pageNum')||0;
      console.log( 'Query params ' , this.pageNo++)

  });
    // const id = +this._route.snapshot.params['id'];
    //  this.TeachernameComponent = this._teacher.onClick(id);
  }

}
