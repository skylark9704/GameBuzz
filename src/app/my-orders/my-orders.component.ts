import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { UserService } from '../user.service';
import * as jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderData = []
  constructor(
    private user : UserService,
    private order : OrdersService,
    private cookie : CookieService
  ) {

    var response = this.user.getUser(this.getDecodedAccessToken(this.cookie.get('token')).user._id)
    response.subscribe( res => {
      var orders = res['user'].orders.split(',')
      console.log(orders)
      for (var i = 0;i<orders.length-1;i++){
        var response = this.order.getOrdersById(orders[i])
        response.subscribe(res => {
          this.orderData.push(res)
        })
      }

      console.log(this.orderData)
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
