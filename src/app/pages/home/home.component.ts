import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyapiservService } from 'src/app/service/myapiserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService, private service2:MyapiservService) {}

  bannerResult: any = [];
  MostRatedMoviesResult: any = [];
  latestMovies:any=[];
  MostRatedNovelsResult: any = [];
  latestNovels:any=[];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  


  ngOnInit(): void {
    this.bannerData();
    this.MostRatedMoviesData();
    this.LatestMoviesData();
    this.MostRatedNovelsData();
    this.LatestNovelsData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }
  //hero section data
  bannerData() {
    this.service2.bannerApiData().subscribe((result) => {
      console.log("Banner",result);
      this.bannerResult = result;
    });
  }
  //most Rated Movies
  MostRatedMoviesData() {
    this.service2.MostRatedApiData().subscribe((result) => {
      console.log('Most rated m :>> ', result);
      this.MostRatedMoviesResult = result;
    });
  }
//Latest added Movies
  LatestMoviesData() {
    this.service2.LatestMoviesApiData().subscribe((result) => {
      console.log('Latest M  :>> ', result);
      this.latestMovies = result;
    });
  }

   //most Rated novels
   MostRatedNovelsData() {
    this.service2.MostRatedNovelsApiData().subscribe((result) => {
      console.log('Most rated m :>> ', result);
      this.MostRatedNovelsResult = result;
    });
  }
//Latest added Novels
  LatestNovelsData() {
    this.service2.LatestNovelsApiData().subscribe((result) => {
      console.log('Latest M  :>> ', result);
      this.latestNovels = result;
    });
  }

  // action
  actionMovie() {
    this.service2.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result;
    });
  }

  // adventure
  adventureMovie() {
    this.service2.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result;
    });
  }

  // animation
  animationMovie() {
    this.service2.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result;
    });
  }

  // comedy
  comedyMovie() {
    this.service2.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result;
    });
  }

  // documentary
  documentaryMovie() {
    this.service2.fetchDocsMovies().subscribe((result) => {
      this.documentaryMovieResult = result;
    });
  }

  // science-fiction
  sciencefictionMovie() {
    this.service2.fetchAScifiMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result;
    });
  }

  // thriller
  thrillerMovie() {
    this.service2.fetchthrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result;
    });
  }
}
