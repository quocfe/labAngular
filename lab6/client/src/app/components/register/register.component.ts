import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entities/employee';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  employee!: Employee;
  constructor(private authService: AuthService) {
    this.employee = new Employee();
  }

  ngOnInit() {}

  register() {
    console.log(this.employee);
    this.authService.register(this.employee);
  }
}
