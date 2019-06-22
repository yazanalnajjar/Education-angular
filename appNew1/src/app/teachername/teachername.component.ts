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

  Teachername  = [];
  uri = 'http://localhost:3000';

   teacherid =0;
   id = 0;

  constructor(private http : HttpClient , private router: Router , private Activatedroute:ActivatedRoute ) { }

  ngOnInit() {

          this.http.get(this.uri + '/teacher')
          .subscribe((res :any) =>{


             this.Teachername = res.teachername;

            //  console.log(res.teachername);

          });


            this.Activatedroute.snapshot.queryParamMap.get('pageNum')||0;

            this.Activatedroute.queryParamMap
            .subscribe(params => {
              this.teacherid = +params.get('pageNum')||0;
              console.log( 'Query params ' , this.teacherid++)

          });


    }








      onClick(teacherId : number) {

        this.http.get(this.uri + '/teachersInfo')
        .subscribe(data =>{


          //  data.find(e =>e.id === data.id);

        });



          this.router.navigate(['/teachersInfo', teacherId ]  ,  { queryParams: { id: teacherId },  relativeTo: this.Activatedroute});
      }

}
