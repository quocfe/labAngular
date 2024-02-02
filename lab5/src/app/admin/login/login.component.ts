import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData = {
    tenDN: '',
    matKhau: '',
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }

  suggest() {
    this.userData.tenDN = 'Fply@fe.edu.vn';
  }
}
