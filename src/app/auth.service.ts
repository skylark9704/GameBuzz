import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url : string = 'http://localhost:8000/';
  constructor( private http : HttpClient, private cookie : CookieService) {
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

  getinfo(token:String){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    })
    return this.http.get(this.url+'api/profile', { headers: headers })

  }
}
