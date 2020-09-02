import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { DataService } from '../data.service';

declare var $: any;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  articleHtml: string;

  h1h6Styles: any;
  pStyles: any;

  constructor(private data: DataService, private elemRef: ElementRef, private renderer: Renderer) {
    this.data.currentArticleHtml.subscribe(message => this.articleHtml = message);
    this.data.currenth1h6Styles.subscribe(message => this.h1h6Styles = message);
    this.data.currentPStyles.subscribe(message => this.pStyles = message);

    // console.log(this.pStyles);

    this.renderer.setElementProperty(this.elemRef.nativeElement, 'innerHTML', this.articleHtml);
}

  ngOnInit() {
    $(document).ready(() => {
      $('app-view h1, app-view h2, app-view h3, app-view h4, app-view h5, app-view h6').css({'text-align': this.h1h6Styles.textAlign,
      'font-weight': this.h1h6Styles.fontWeight, 'font-style': this.h1h6Styles.fontStyle });
      $('app-view h1').css({'font-size': this.h1h6Styles.h1Size});
      $('app-view h2').css({'font-size': this.h1h6Styles.h2Size});
      $('app-view h3').css({'font-size': this.h1h6Styles.h3Size});
      $('app-view h4').css({'font-size': this.h1h6Styles.h4Size});
      $('app-view h5').css({'font-size': this.h1h6Styles.h5Size});
      $('app-view h6').css({'font-size': this.h1h6Styles.h6Size});

      $('app-view p').css({'text-align': this.pStyles.textAlign, 'font-size': this.pStyles.pSize,
      'font-weight': this.pStyles.fontWeight, 'font-style': this.pStyles.fontStyle});
    });
   }

}
