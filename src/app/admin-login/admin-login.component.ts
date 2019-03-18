import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminloginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
  })
  errorMessageLogin: any;
  token: string
  role: any
  constructor(private admin : AdminService, private cookie : CookieService, private route : Router) {
    console.log(this.cookie.get('TOKEN'))
    if(this.cookie.get('TOKEN')){
      this.route.navigate(['/admin/manage'])
    }
  }

  ngOnInit() {
  }

  login(){
    var response = this.admin.login(this.adminloginForm.value)
    response.subscribe( res => {
      if (res["a_token"] && res["role"]) {
        this.cookie.delete('token')
        this.cookie.set( 'TOKEN', res["a_token"] );
        this.token = this.cookie.get('TOKEN')
        console.log(this.token)
        this.route.navigate(['/admin/manage'])

      }

      else{
        console.log(res["error"].message)
        this.errorMessageLogin = res['error'].message
      }
    })
  }

}
