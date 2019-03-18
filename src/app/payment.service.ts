import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url : string = 'http://192.168.0.3:7000/';
  constructor(private http : HttpClient,private cookie : CookieService) { }

  paymentInitiate(txnDetails){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })

    return this.http.post(this.url+'paymentInitiate',txnDetails)
  }
}
