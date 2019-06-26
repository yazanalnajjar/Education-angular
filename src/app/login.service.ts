import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // if(user){
  //   localStorage.setItem('user' , JSON.stringify(user))
  // }else {
  //   localStorage.setItem('user' , null);
  // }


  get users() : any {
    return this.getUser();
  }
  constructor(private http : HttpClient) {}

  setUsers(user){
    localStorage.setItem("user" , JSON.stringify(user));
  }


  getUser() : any {
    let user = localStorage.getItem("user");

    return JSON.parse(user);
  }


}
