import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  articleHtml: string;
  h1h6Styles: any;
  pStyles: any;

  constructor(private http: HttpClient, private data: DataService) {
    this.data.currentArticleHtml.subscribe(message => this.articleHtml = message);
    this.data.currenth1h6Styles.subscribe(message => this.h1h6Styles = message);
    this.data.currentPStyles.subscribe(message => this.pStyles = message);
  }

  articleDataObject: object;
  body: any;

  getArticleArchive() {
    this.articleDataObject = {
      articleHtml: this.articleHtml,
      h1h6Styles: this.h1h6Styles,
      pStyles: this.pStyles,
    };

    // console.log(this.articleDataObject);

    return this.http.post('http://articleBuilder.com/downloadResultArchive.php', this.articleDataObject,
    { headers: { 'Content-Type': 'text/html' }, responseType: 'text'})
    .subscribe(response => {
      console.log(response);

      window.open(response, '_blank');
    },    (error) => {
      console.log(error);
    });
  }
}
