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
      console.log('TOKEN '+this.cookie.get('TOKEN'))
     if(!this.cookie.get('TOKEN')){
       this.router.navigate(['/admin']);
     }

     else {

     }

  }

  ngOnInit() {
  }

  logout(){
    this.cookie.delete('TOKEN')
    this.router.navigate(['/admin'])
  }

}
