import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { MatchService } from '../matches.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matchId;
  details;
  constructor(
    private cookie : CookieService,
    private route : Router,
    private router : ActivatedRoute,
    private match : MatchService
  ) {
    if (!this.cookie.get('token')) {
        this.route.navigate(['/home'])
    }

    else {
      this.matchId = this.router.snapshot.params['id']
      var response = this.match.getMatch(this.matchId);
      response.subscribe(res => {
        console.log(res)
        this.details = res;
      })
    }
  }

  generateOrderId(){
    console.log(uuid.v4())
  }

  ngOnInit() {
  }

}
