import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: 'app-teachername',
  templateUrl: './teachername.component.html',
  styleUrls: ['./teachername.component.css']
})
export class TeachernameComponent implements OnInit {
teachers;
  Teachername  = [];
  uri = 'http://localhost:3000';

   teacherid =0;
   id ;

  constructor(private http : HttpClient , private router: Router , private route:ActivatedRoute ) { }

  ngOnInit() {

          this.http.get(this.uri + '/teacher')
          .subscribe((res :any) =>{


             this.Teachername = res.teachername;

              console.log(this.Teachername);

          });


          //   this.route.snapshot.queryParamMap.get('pageNum')||0;

          //   this.route.queryParamMap
          //   .subscribe(params => {
          //     this.teacherid = +params.get('pageNum')||0;
          //     console.log( 'Query params ' , this.teacherid++)

          // });


    }








      onClick(teacherId : number) {

        // this.http.get(this.uri + '/teachersInfo')
        // .subscribe(data =>{
        //   console.log(data);
        //       for(var i=0 ; i < data ; i++){
        //       return data[i].find(e => e.id === this.id);
        //       }

        // });



      this.id= +this.route.snapshot.params['id'];




          this.router.navigate(['/teachersInfo', teacherId ]  ,  { queryParams: { id: teacherId },  relativeTo: this.route});
      }

}
