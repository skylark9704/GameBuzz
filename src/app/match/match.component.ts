import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { MatchService } from '../matches.service';
import * as uuid from 'uuid';
import { UserService } from '../user.service';
import { PaymentService } from '../payment.service';
import * as jwt_decode from "jwt-decode";

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
    private user : UserService,
    private payment : PaymentService
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

  getDecodedAccessToken(token: string): any {
  try{
      return jwt_decode(token);
  }
  catch(Error){
      return null;
  }
}

  generateOrderId(){

    var data = this.getDecodedAccessToken(this.cookie.get('token'))
    console.log(data)
    console.log(data.user.email)
    var name = data.user.name.split(' ')


    var paymentData = {
      productinfo: this.matchId,
      txnid: uuid.v4()+"|"+data.user._id,
      amount: this.details['match'].entryfee,
      email: data.user.email,
      phone: data.user.phone,
      lastname: name[1],
      firstname:name[0],
      surl: "http://192.168.0.3:6900/api/transaction", //"http://localhost:3000/payu/success"
      furl: "http://192.168.0.3:6900/api/transaction", //"http://localhost:3000/payu/fail"
    };

    var response = this.payment.paymentInitiate(paymentData)
    response.subscribe(res => {
      console.log(res)
      console.log(res['success'])
      window.location.href=res['success']

    })

  }

  serialize(index){
    return index+1
  }

  ngOnInit() {
  }

}
