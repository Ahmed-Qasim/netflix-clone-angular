import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay, tap } from 'rxjs';

import * as moment from 'moment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {}
  apiUrl = 'https://localhost:7253/api';

  private jwtHelper: JwtHelperService = new JwtHelperService();


  sessionExpired!:boolean;


  // Login
  Login(email: string, password: string): Observable<any> {
    const data = {
      userEmail: email,
      userPassword: password,
    };
    return this.http
      .post<any>(`${this.apiUrl}/Users/Login`, data, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap((response) => {
          this.setSession(response);
          console.log('response :>> ', response);
          localStorage.setItem('user', response.userName);

          const decodedToken = this.jwtHelper.decodeToken(response.token);
          const expirationTime = decodedToken?.exp;

          if (expirationTime) {
            // Set a timeout to automatically log out the user
            const timeLeft = expirationTime - Date.now() / 1000;
            setTimeout(() => this.logoutAutomatic(), timeLeft * 1000); // Convert to milliseconds
            console.log(timeLeft);
          }
        })
      );
  }

  private setSession(authResult: any) {
    // const expiresAt = moment().add(authResult.expires, 'hour');

    const expiresAt = this.jwtHelper.getTokenExpirationDate(authResult.token);
    console.log(expiresAt);
    if (expiresAt) {
      localStorage.setItem('jwt', authResult.token);
      localStorage.setItem('expires_at', expiresAt.toString());
    }
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedInpre(): boolean {
    return !!localStorage.getItem('jwt');
  }

  //check if is logged or not
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  //log out
  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
   this.router.navigateByUrl("/sign-in")
  }
  logoutAutomatic() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
   this.router.navigateByUrl("/SessEnded")
  }
}
