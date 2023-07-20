import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navBg: any;
  userName: string | null = '';
  constructor(private authService: AuthserviceService, private router: Router) {
    this.getUserName();
  }

  @HostListener('document:scroll') scrollOver() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBg = {
        'background-color': '#000000',
      };
    } else {
      this.navBg = {};
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

  getUserName() {
    const storedName = localStorage.getItem('user');
    if (storedName) {
      this.userName = storedName.charAt(0).toUpperCase() + storedName.slice(1);
    }
  }
}
