import { Component, OnInit } from '@angular/core';
import { MyapiservService } from 'src/app/service/myapiserv.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css'],
})
export class TestpageComponent implements OnInit {
  constructor(
    private service: MyapiservService,
    private sanitizer: DomSanitizer
  ) {}

  novels: any = [];
  movies: any = [];
  ngOnInit(): void {
    // this.getall();
   
    console.log(this.movies);
  }
  // getall() {
  //   this.service.getMovies().subscribe((result) => {
  //     console.log('the result is', result);
  //     this.movies = result;
  //   });
  // }
}
