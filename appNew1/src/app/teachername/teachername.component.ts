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

  constructor(private http : HttpClient , private router: Router , private Activatedroute:ActivatedRoute ) { }

  ngOnInit() {

          this.http.get(this.uri + '/teacher')
          .subscribe((res :any) =>{


             this.Teachername = res.teachername;

             console.log(res.teachername);

          });


             this._id= +this.Activatedroute.snapshot.queryParamMap.get('pageNum')||0;




    }








      onClick(teacherId : number) {

          this.router.navigate(['/teachersInfo', teacherId ]  ,  { queryParams: { id: teacherId },  relativeTo: this.Activatedroute});
      }

}
