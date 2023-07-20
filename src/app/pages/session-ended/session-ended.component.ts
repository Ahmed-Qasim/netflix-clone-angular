import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-ended',
  templateUrl: './session-ended.component.html',
  styleUrls: ['./session-ended.component.css']
})
export class SessionEndedComponent {
  isLoggedIn!: boolean;
  sessionExpired!: boolean;
  constructor(private router: Router) {
    this.isLoggedIn = false;
    this.sessionExpired = false;
    this.checkSession();
  }

  checkSession(): void {
    const sessionToken = localStorage.getItem('jwt');
    if (sessionToken !== null) {
      this.isLoggedIn = true;
      
    } else {
      this.isLoggedIn = false;
      this.sessionExpired = true;
    }
  }

  login(): void {
    this.router.navigateByUrl('/sign-in');
  }
}
