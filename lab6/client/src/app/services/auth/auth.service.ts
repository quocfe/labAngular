import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { RestApiService } from '../rest-api/rest-api.service';
import { Api } from 'src/app/constant/api';
import { Employee } from 'src/app/entities/employee';
import { Token } from 'src/app/entities/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken!: string | null;
  public isAuthorized = false;
  public isAdmin!: boolean;
  url = 'http://localhost:3000/v1/api/auth/refreshToken';

  constructor(
    private rest: RestApiService,
    private router: Router,
    private location: Location
  ) {
    this.getAccessToken();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.accessToken && event.url === '/login') {
          console.log('logined');
          this.location.back();
        }
      }
    });
  }

  async login(user: any) {
    try {
      const response = await this.rest.post(`${Api.AUTH}/login`, user);
      let value = response as { token: Token; employee: Employee };
      console.log(value);
      localStorage.setItem('token', value.token.accessToken);
      // localStorage.setItem('refreshToken', value.token.refreshToken);
      localStorage.setItem('employeeId', value.employee._id.toString());
      this.router.navigate(['/']);
    } catch (error: any) {
      console.log(error.error.message);
    }
  }

  async register(user: any) {
    try {
      await this.rest.post(`${Api.AUTH}/register`, user);
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.log(error.error.message);
    }
  }

  getAccessToken() {
    const token = localStorage.getItem('token');
    this.accessToken = token;
    return this.accessToken;
  }

  async refreshToken() {
    const refreshTokenDB: string | null = localStorage.getItem('refreshToken');
    const refreshToken = await this.rest.post(this.url, {
      refreshToken: refreshTokenDB,
    });
    return refreshToken;
  }

  logout() {
    this.isAuthorized = false;
  }
}
