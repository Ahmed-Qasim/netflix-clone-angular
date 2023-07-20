import { Component, ElementRef, OnInit } from '@angular/core';

import { MyapiservService } from 'src/app/service/myapiserv.service';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css'],
})
export class NovelsComponent implements OnInit {
  constructor(
    public service2: MyapiservService,
    private elementRef: ElementRef
  ) {}
  novels: any = [];
  adventurenovels: any = [];
  decomentrynovels: any = [];
  fantsaynovels: any = [];
  historynovels: any = [];
  horrornovels: any = [];
  romancynovels: any = [];
  thrillernovels: any = [];
  westernnovels: any = [];
  ngOnInit(): void {
    this.showAdventureNovels();
    this.showDecomentryNovels();
    this.showFantasyNovels();
    this.showHistoryNovels();
    this.showHorrorNovels();
    this.showRomanticNovels();
    this.showThrillerNovels();
    this.showWestrenNovels();
  }

  showAdventureNovels() {
    this.service2.fetchAdventureNovels().subscribe((a) => {
      console.log(a);
      this.adventurenovels = a;
    });
  }
  showDecomentryNovels() {
    this.service2.fetchDecomentryNovels().subscribe((a) => {
      console.log(a);
      this.decomentrynovels = a;
    });
  }
  showFantasyNovels() {
    this.service2.fetchFantsayNovels().subscribe((a) => {
      console.log(a);
      this.fantsaynovels = a;
    });
  }
  showHistoryNovels() {
    this.service2.fetchHistoryNovels().subscribe((a) => {
      console.log(a);
      this.historynovels = a;
    });
  }
  showHorrorNovels() {
    this.service2.fetchHorrorNovels().subscribe((a) => {
      console.log(a);
      this.horrornovels = a;
    });
  }
  showRomanticNovels() {
    this.service2.fetchRomanticNovels().subscribe((a) => {
      console.log(a);
      this.romancynovels = a;
    });
  }
  showThrillerNovels() {
    this.service2.fetchThrillerNovels().subscribe((a) => {
      console.log(a);
      this.thrillernovels = a;
    });
  }
  showWestrenNovels() {
    this.service2.fetchWesternNovels().subscribe((a) => {
      console.log(a);
      this.westernnovels = a;
    });
  }
  // showNovels(){
  //   this.service2.getAllNovels().subscribe(a=>{
  //     console.log(a);
  //     this.novels=a;
  //   })

  // }

  navigateToSection(sectionId: string) {
    const section = this.elementRef.nativeElement.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
