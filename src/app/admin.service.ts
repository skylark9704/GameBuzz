import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  url : string = 'http://192.168.0.9:6900/';
  constructor( private http : HttpClient, private cookie : CookieService) {
  }

  message(message: { message: string; }){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.post(this.url+'api/welcome',message, { headers })
  }

  login(credentials: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })

    return this.http.post(this.url+'api/admin/login',credentials)
  }
}
