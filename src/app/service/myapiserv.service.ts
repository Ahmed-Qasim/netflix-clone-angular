import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyapiservService {
  apiUrl = 'https://localhost:7253/api';
  constructor(public http: HttpClient) {}

  //Search
  search(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/byName?name=${data}`);
  }

  //Banner
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies`);
  }

  // most rated Movies
  MostRatedApiData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/highRated`);
  }
  //Latest Movies
  LatestMoviesApiData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/ModernMovies`);
  }

  //most rated novels

  MostRatedNovelsApiData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/highRated`);
  }

  //Latest Novels
  LatestNovelsApiData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/ModernNovels`);
  }

  //Action
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=1`);
  }
  //Drama
  fetchDramaMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=7`);
  }
  //adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=2`);
  }
  //Docmentary
  fetchDocsMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=6`);
  }
  //thriller
  fetchthrillerMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=15`);
  }
  //comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=4`);
  }
  //horror
  fetchHorrorMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=10`);
  }
  //animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=3`);
  }
  //sci-fi
  fetchAScifiMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Movies/genre?genreId=14`);
  }

  fetchAdventureNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=2`);
  }
  fetchDecomentryNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=6`);
  }
  fetchFantsayNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=8`);
  }
  fetchHistoryNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=9`);
  }
  fetchHorrorNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=10`);
  }
  fetchRomanticNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=13`);
  }
  fetchThrillerNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=15`);
  }
  fetchWesternNovels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/genre?genreId=17`);
  }
  getMovieDetails(data: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Movies/${data}`);
  }
  getNovelDetails(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/Novels/${data}`);
  }
  
  
 
}
