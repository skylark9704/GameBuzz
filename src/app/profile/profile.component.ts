import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router"
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name;
  username;

  constructor(private cookie: CookieService, private router: Router, private auth : AuthService) {

    if (!this.cookie.get('token')) {
        this.router.navigate(['/home'])
    }

    else {
      var response = this.auth.getinfo(this.cookie.get('token'));
      response.subscribe(res =>{
        this.name = res['name']
        this.username = res['username']
        console.log(res['name'])
      })
    }
  }

  ngOnInit() {
  }

}
