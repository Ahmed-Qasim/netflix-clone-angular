import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyapiservService } from 'src/app/service/myapiserv.service';

@Component({
  selector: 'app-novelpage',
  templateUrl: './novelpage.component.html',
  styleUrls: ['./novelpage.component.css']
})
export class NovelpageComponent implements OnInit {

  novelDetailsResult: any;
  constructor(public service: MyapiservService, public router: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {

    let id = this.router.snapshot.paramMap.get('id');
    this.ShowNovelDetails(id);
    this.downloadFile();

  }
  ShowNovelDetails(id: any) {
    this.service.getNovelDetails(id).subscribe((result) => {
      console.log('this novel', result);
      this.novelDetailsResult = result;
    });
  }
  downloadFile() {
    this.http.get(`https://localhost:7253/NovelsPDF/${this.novelDetailsResult.novelFile}`, { responseType: 'arraybuffer' }).subscribe((response) => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = this.novelDetailsResult.novelName+'.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }
}