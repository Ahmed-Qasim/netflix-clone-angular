import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GradPrjV1';
  navBg: any;

 

  @HostListener('document:scroll') scrollOver() {
    // console.log('document.body.scrollTop :>> ', document.body.scrollTop);
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBg = {
        'background-color': '#000000',
      };
    } else {
      this.navBg = {};
    }
  }

  
}
