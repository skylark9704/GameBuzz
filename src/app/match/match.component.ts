import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { MatchService } from '../matches.service';
import * as uuid from 'uuid';
import { UserService } from '../user.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matchId;
  details;
  player;
  playerLen;
  playerdetails = []
  constructor(
    private cookie : CookieService,
    private route : Router,
    private router : ActivatedRoute,
    private match : MatchService,
    private user : UserService
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
        if(res['match'].players !== ""){
          console.log(res['match'].players)
          this.player = res['match'].players.split(',')
          console.log(this.player)

          for(var i= 0; i<this.player.length;i++){
            var result = this.user.getUser(this.player[i]);
            result.subscribe(res => {
              console.log(res)
              this.playerdetails.push(res)
            })
          }
          this.playerLen = this.player.length
          console.log(this.playerdetails)
        }

        else{
          this.playerLen = 0;
        }
      })
    }
  }

  generateOrderId(){
    console.log(uuid.v4())
  }

  serialize(index){
    return index+1
  }

  ngOnInit() {
  }

}
