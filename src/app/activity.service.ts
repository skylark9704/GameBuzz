import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url;
  constructor(private db : DatabaseService , private http : HttpClient) {
    this.url = this.db.getDbURL()
  }

  getActivities(id:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.post(this.url+'api/activities',{id})
  }
}
