import { Component, ElementRef, OnInit } from '@angular/core';

import { MyapiservService } from 'src/app/service/myapiserv.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(
    public service2: MyapiservService,

    private elementRef: ElementRef
  ) {}
  actionsmovies: any = [];
  adventuremovies: any = [];
  decomentrymovies: any = [];
  comedymovies: any = [];
  dramamovies: any = [];
  horrormovies: any = [];
  thrillermovies: any = [];
  ngOnInit(): void {
    this.actionMovies();
    this.showAdventureMovies();
    this.showDecomentryMovies();
    this.showDramaMovies();
    this.showHorrorMovies();
    this.showThrillerMovies();
    this.showcomedyMovies();
  }

  actionMovies() {
    this.service2.fetchActionMovies().subscribe((a) => {
      console.log(a);
      this.actionsmovies = a;
    });
  }
  showAdventureMovies() {
    this.service2.fetchAdventureMovies().subscribe((a) => {
      console.log(a);
      this.adventuremovies = a;
    });
  }
  showDecomentryMovies() {
    this.service2.fetchDocsMovies().subscribe((a) => {
      console.log(a);
      this.decomentrymovies = a;
    });
  }
  showDramaMovies() {
    this.service2.fetchDramaMovies().subscribe((a) => {
      console.log(a);
      this.dramamovies = a;
    });
  }
  showcomedyMovies() {
    this.service2.fetchComedyMovies().subscribe((a) => {
      console.log(a);
      this.comedymovies = a;
    });
  }
  showHorrorMovies() {
    this.service2.fetchHorrorMovies().subscribe((a) => {
      console.log(a);
      this.horrormovies = a;
    });
  }

  showThrillerMovies() {
    this.service2.fetchthrillerMovies().subscribe((a) => {
      console.log(a);
      this.thrillermovies = a;
    });
  }

  navigateToSection(sectionId: string) {
    const section = this.elementRef.nativeElement.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
