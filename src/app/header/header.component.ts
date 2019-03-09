import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { FormControl,FormGroup } from '@angular/forms';


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
    password: new FormControl(''),
    cpassword: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
  })

  constructor(private modalService: NgbModal, private auth : AuthService) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    }, (reason) => {

    });
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

  login(){
    var credentials = this.loginForm.value;

    var response = this.auth.login(credentials.email,credentials.password); //sends cURL HTTP request
    response.subscribe(res => {
      console.log(res)
    })
  }

  register(){
    var credentials = this.registerForm.value;
    console.log('From Header Component '+credentials.email)
    var response = this.auth.create(credentials.email,credentials.password, credentials.cpassword,credentials.username); //sends cURL HTTP request
    response.subscribe(res => {
      console.log(res)
    })
  }

}
