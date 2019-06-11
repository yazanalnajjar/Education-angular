import { SignupComponent } from './signup/signup.component';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }
  // url = 'http://localhost:4000';
  // getConfig() {
  //   this.http
  //          .post<boolean>('http://localhost:3000/signup', this.SignupComponent)
  //          .subscribe(data => {
  //            console.log(data);
  //             }
  //     }

}
