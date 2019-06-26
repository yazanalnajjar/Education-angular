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
  //  teacher : teachername ;
  uri = 'http://localhost:3000';
    id;
   teachers = [] ;
    teacher;


  constructor(  private http : HttpClient ,  private router: Router  , private route : ActivatedRoute) { }



  // this.http.get(this.uri + '/teacher')
  // .subscribe((res :any) =>{


  //    this.Teachername = res.teachername;

  //     console.log(this.Teachername);

  // });
  ngOnInit() {





      let that = this;
    this.getTeachers();
    setTimeout(function(){
      that.te();
    },1000);



    }

    getTeachers() {
      this.id= +this.route.snapshot.params['id'];

      this.http.get(this.uri + '/teachersInfo')
      .subscribe((data : any) =>{
       this.teachers = data
       console.log(this.teachers , "Inside")
      });

    }


    te(){
      console.log(this.teachers , "OUtside");

        for(var i =0 ; i<this.teachers.length ; i++){
          console.log(this.id , "id");
            if(this.teachers[i].id === this.id){
                this.teacher = this.teachers[i];
              console.log(this.teacher , "Outside");
            }
        }
          // console.log(id);


          console.log(this.teacher , "AA");
    }


  }












