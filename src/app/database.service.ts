import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url;
  constructor() {
    this.url = 'http://192.168.0.6:6900/'
   }

  getDbURL(){
    return this.url
  }
}
