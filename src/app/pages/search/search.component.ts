import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { MyapiservService } from 'src/app/service/myapiserv.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: any = [];
  searchWord: string = '';

  constructor(
    private service: MovieApiServiceService,
    private service2: MyapiservService
  ) {}
  ngOnInit(): void {
    this.searchMovie();
  }

  searchMovie() {
    this.service2.search(this.searchWord).subscribe((result) => {
      this.searchResult = result;
      console.log(this.searchResult);
    });
    if (!this.searchWord) {
      this.searchResult = [];
    }
  }
}
