import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetailsResult: any;
  movieVideoResult: any;
  movieCastResult: any;
  getParamId:any;
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.GetMovie(getParamId);
    this.GetCast(getParamId);
    this.getVideo(getParamId);
  }

  GetMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.movieDetailsResult = result;
      console.log('this movie', result);  
    });
  }
  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe(result => {
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.movieVideoResult = element.key;
        }
      });
    });
  }

  GetCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result);
      this.movieCastResult = result.cast;
    });
  }
}
