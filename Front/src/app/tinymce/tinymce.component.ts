import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {

  constructor(private data: DataService) { }

  public editorContent: string;
  public tmpContent: string;

  ngOnInit() {
    this.data.currentArticleHtml.subscribe(message => this.editorContent = message);
    this.data.currentArticleHtml.subscribe(message => this.tmpContent = message);
  }

  contentChange($event) {
    this.data.setArticleHtml(this.editorContent);
  }
}
