import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyapiservService } from 'src/app/service/myapiserv.service';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.css']
})
export class MoviepageComponent implements OnInit {
  movieDetails: any;
  constructor(public service:MyapiservService, public router: ActivatedRoute) {}

  ngOnInit(): void {
    let id:any = this.router.snapshot.params["id"];
    this.ShowMovieDetails(id);
  }
  ShowMovieDetails(id:any){
    this.service.getMovieDetails(id).subscribe(result =>this.movieDetails = result);
  }
}
