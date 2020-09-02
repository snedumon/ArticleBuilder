import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getArticleArchive() {
    this.httpService.getArticleArchive();
  }
}
