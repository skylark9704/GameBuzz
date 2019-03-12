import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { FormControl,FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
  })

  registerForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
  })

  token;

  modal: any;
  constructor(private modalService: NgbModal, private auth : AuthService, private cookie : CookieService) {
    console.log(this.token)
    this.token = this.cookie.get('token');
    console.log(this.token)



  }

  open(content) {
    this.modal = this.modalService.open(content)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

  tester(){
    var response = this.auth.message({message:'Gamebuzz'});
    response.subscribe(res =>{
      console.log(res)
    })
  }

  login(){
    var credentials = this.loginForm.value;

    var response = this.auth.login(credentials); //sends cURL HTTP request
    response.subscribe(res => {
      if (res["token"]) {
        this.cookie.set( 'token', res["token"] );
        this.token = this.cookie.get('token')
        console.log(this.token)
        this.modal.close();
      }

      else{
        console.log(res["error"].message)
      }
    })

  }

  register(){
    var credentials = this.registerForm.value;
    console.log('From Header Component '+credentials.email)
    var response = this.auth.register(credentials); //sends cURL HTTP request
    response.subscribe(res => {
      console.log(res)
    })
    this.modal.close();
  }

  logout(){
    this.cookie.delete('token')
    this.token = ''
  }

  getinfo(){
    var response = this.auth.getinfo(this.token);
    console.log(this.token)
    response.subscribe(res => {
      console.log(res)
    })
  }

}
