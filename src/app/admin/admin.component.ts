import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { MatchService } from '../matches.service';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private cookie : CookieService,
    private match : MatchService,
    private auth : AuthService,
    private games : GamesService,
    private router : Router
  ) {

     if(!this.cookie.get('token')){
       //this.router.navigate(['/home']);
     }

     else {

     }

  }

  ngOnInit() {
  }

}
