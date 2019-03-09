import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url : string = 'http://localhost:8000/';
  constructor( private http : HttpClient) {
  }

  login(email,password){
    const body = {
      email : email,
      password: password
    }
    return this.http.post(this.url+'login',body);
  }

  create(email,password,cpassword,username){
    console.log('From service : '+email+" "+password+" "+username);
    const body = {
      email : email,
      password: password,
      cpassword : cpassword,
      username : username
    }
    return this.http.post(this.url+'create/user',body);
  }

  log(){
    return this.http.get(this.url+'log');
  }
}
