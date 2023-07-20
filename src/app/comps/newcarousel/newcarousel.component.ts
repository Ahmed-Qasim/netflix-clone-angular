import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-newcarousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule,NgIf],
  templateUrl: './newcarousel.component.html',
  styleUrls: ['./newcarousel.component.css'],
})
export class NewcarouselComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}
  banner2Result: any = [];
  ngOnInit(): void {
    this.bannerData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result);
      this.banner2Result = result.results;
    });
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
