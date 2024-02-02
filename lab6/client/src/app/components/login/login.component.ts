import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entities/employee';
import { Token } from 'src/app/entities/token';

import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employee!: Employee;
  btnDisable = false;
  employeeId!: String;
  url = 'http://localhost:3000/v1/api/auth/login';
  constructor(
    private rest: RestApiService,
    private authService: AuthService,
    private data: DataService,
    private router: Router
  ) {
    this.employee = new Employee();
  }

  ngOnInit() {}

  validate() {
    return true;
  }
  async login() {
    this.btnDisable = true;

    if (this.validate()) {
      try {
        this.authService.login(this.employee);
        // await this.data.getProfile();
        // this.btnDisable = false;
        // this.router.navigate(['/dashboard']);
      } catch (error: any) {
        console.log(error);
        // this.data.error(error.error.message);
        // this.btnDisable = false;
      }
    }
  }
}
