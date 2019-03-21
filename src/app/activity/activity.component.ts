import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from "jwt-decode";


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activities;
  keys;
  player
  constructor(private cookie : CookieService, private activity:ActivityService ) {
    this.player = this.getDecodedAccessToken(this.cookie.get('token'))
    console.log(this.player)
    var response = this.activity.getActivities(this.getDecodedAccessToken(this.cookie.get('token')).user._id)
    response.subscribe( res =>{
      console.log(res)
      this.keys = Object.keys(res)
      console.log(this.keys)
      this.activities = res
    })
  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  ngOnInit() {
  }

}
