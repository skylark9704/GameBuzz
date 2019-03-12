import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url : string = 'http://localhost:8000/';
  constructor( private http : HttpClient) {
  }

  message(message){
    return this.http.post(this.url+'api/welcome',message)
  }

  login(credentials){
    return this.http.post(this.url+'api/login',credentials)
  }

  register(credentials){
    return this.http.post(this.url+'api/register',credentials)
  }
}
