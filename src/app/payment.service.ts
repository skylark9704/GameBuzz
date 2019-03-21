import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url;
  constructor(private http : HttpClient,private cookie : CookieService, private db : DatabaseService) {
  this.url = this.db.getDbURL()
}

  paymentInitiate(txnDetails){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })

    return this.http.post(this.url+'paymentInitiate',txnDetails)
  }
}
