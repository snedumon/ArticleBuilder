import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var $: any;

@Component({
  selector: 'app-formator',
  templateUrl: './formator.component.html',
  styleUrls: ['./formator.component.scss']
})
export class FormatorComponent implements OnInit {
  constructor(private data: DataService) { }

  atricleHtml: string;

  tags = this.data.tags;
  selectedTag = this.data.tags[0];

  textAlignOptions = this.data.textAlignOptions;
  fontWeightOptions = this.data.fontWeightOptions;
  fontStyleOptions = this.data.fontStyleOptions;

  h1h6Styles: any;
  pStyles: any;

  ngOnInit() {
    // this.selectedTag = ;
    this.data.currentArticleHtml.subscribe(message => this.atricleHtml = message);
    this.data.currenth1h6Styles.subscribe(message => this.h1h6Styles = message);
    this.data.currentPStyles.subscribe(message => this.pStyles = message);
  }

  tagOnChange(newValue) {
    // console.log(newValue);
    this.selectedTag = newValue;
  }

  hAlignOnChange($event) {
    $('app-view h1, app-view h2, app-view h3, app-view h4, app-view h5, app-view h6').css({'text-align': $event.target.value});
    this.h1h6Styles.textAlign = $event.target.value;
    this.data.seth1h6Styles(this.h1h6Styles);
  }

  hSizeChange($event) {
    $('app-view ' + $event.target.name).css({'font-size': $event.target.value + 'px'});

    switch ($event.target.name) {
      case 'h1':
        this.h1h6Styles.h1Size = +$event.target.value;
        break;
      case 'h2':
        this.h1h6Styles.h2Size = +$event.target.value;
        break;
      case 'h3':
        this.h1h6Styles.h3Size = +$event.target.value;
        break;
      case 'h4':
        this.h1h6Styles.h4Size = +$event.target.value;
        break;
      case 'h5':
        this.h1h6Styles.h5Size = +$event.target.value;
        break;
      case 'h6':
        this.h1h6Styles.h6Size = +$event.target.value;
        break;
      default:
        break;
    }
    this.data.seth1h6Styles(this.h1h6Styles);
  }

  hWeightOnChange($event) {
    $('app-view h1, app-view h2, app-view h3, app-view h4, app-view h5, app-view h6').css({'font-weight': $event.target.value});
    this.h1h6Styles.fontWeight = $event.target.value;
    this.data.seth1h6Styles(this.h1h6Styles);
  }

  hStyleOnChange($event) {
    $('app-view h1, app-view h2, app-view h3, app-view h4, app-view h5, app-view h6').css({'font-style': $event.target.value});
    this.h1h6Styles.fontStyle = $event.target.value;
    this.data.seth1h6Styles(this.h1h6Styles);
  }


  pAlignOnChange($event) {
    $('app-view p').css({'text-align': $event.target.value});
    this.pStyles.textAlign = $event.target.value;
    this.data.setPStyles(this.pStyles);
  }

  pSizeChange($event) {
    $('app-view p').css({'font-size': $event.target.value + 'px'});
    this.pStyles.pSize = $event.target.value;
    this.data.setPStyles(this.pStyles);
  }

  pWeightOnChange($event) {
    $('app-view p').css({'font-weight': $event.target.value});
    this.pStyles.fontWeight = $event.target.value;
    this.data.setPStyles(this.pStyles);
  }

  pStyleOnChange($event) {
    $('app-view p').css({'font-style': $event.target.value});
    this.pStyles.fontStyle = $event.target.value;
    this.data.setPStyles(this.pStyles);
  }

  regenerateStyles($event) {
    this.data.regenerateStyles();

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
  }
}
