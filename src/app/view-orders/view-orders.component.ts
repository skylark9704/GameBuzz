import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  keys;
  orderData;
  constructor(private orders : OrdersService) {
    var response = this.orders.getAllOrders()
    response.subscribe(res => {
      console.log(res)
      this.orderData = res
      this.keys = Object.keys(res)
    })

  }

  ngOnInit() {
  }

}
