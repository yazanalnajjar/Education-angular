import { TeachernameComponent } from './../teachername/teachername.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

   id : number;
   private sub : any;



  constructor(  private http : HttpClient ,  private router: Router  , private route : ActivatedRoute ) { }

  ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
      });


  }







}
