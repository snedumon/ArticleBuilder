import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import styleTemplates from '../assets/styleTemplates.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    console.log(styleTemplates);
   }

  tags = ['H1-H6', 'p'];
  // tags = ['H1-H6', 'p', 'a', 'ul & li', 'ol & li'];

  textAlignOptions = ['left', 'right', 'center', 'justify'];
  fontWeightOptions = ['normal', 'bold', 'bolder', 'lighter'];
  fontStyleOptions = ['normal', 'italic', 'oblique'];

  private articleHtmlSource = new BehaviorSubject<string>('<h3>Click here to edit the content</h3>'
  + '<p>Here you can edit the content of your article with <a href="#" target="_blank">links</a>, different headings and lists.</p>');
  currentArticleHtml = this.articleHtmlSource.asObservable();

  private h1h6Styles = new BehaviorSubject<object>({
    textAlign: 'left',
    h1Size: 37,
    h2Size: 28,
    h3Size: 18,
    h4Size: 16,
    h5Size: 14,
    h6Size: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
  });
  currenth1h6Styles = this.h1h6Styles.asObservable();

  private pStyles = new BehaviorSubject<object>({
    textAlign: 'left',
    pSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
  });
  currentPStyles = this.pStyles.asObservable();

  setArticleHtml(newArticleHtml: string) {
    this.articleHtmlSource.next(newArticleHtml);
    // console.log(newArticleHtml);
  }

  seth1h6Styles(newH1h6Styles: any) {
    // console.log(newH1h6Styles);
    this.h1h6Styles.next(newH1h6Styles);
  }

  setPStyles(newPStyles: any) {
    this.pStyles.next(newPStyles);
    // console.log(newPStyles);
  }

  regenerateStyles() {
    if (styleTemplates != null) {
      const randStyleNum = Math.round(Math.random() * Math.floor(styleTemplates.length - 1));
      console.log(randStyleNum);
      this.seth1h6Styles(styleTemplates[randStyleNum].h1h6Styles);
      this.setPStyles(styleTemplates[randStyleNum].pStyles);
    }
  }
}
