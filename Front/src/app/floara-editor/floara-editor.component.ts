import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-floara-editor',
  templateUrl: './floara-editor.component.html',
  styleUrls: ['./floara-editor.component.scss']
})
export class FloaraEditorComponent implements OnInit {
  constructor(private data: DataService) { }

  public editorContent: string;
  public tmpContent: string;

  public options: object = {
    // focus: true,
    toolbarInline: false,
    charCounterCount: false,
    toolbarButtons: [ 'paragraphFormat', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
     'formatOL', 'formatUL', '|',
     'insertLink', 'undo', 'redo'],
     toolbarVisibleWithoutSelection: true,
     events : {
      'editorContent.blur': (e, editor) => {
        console.log(editor.selection.get());
        this.data.setArticleHtml(this.editorContent);
      }
     }
};

  ngOnInit() {
    this.data.currentArticleHtml.subscribe(message => this.editorContent = message);
    this.data.currentArticleHtml.subscribe(message => this.tmpContent = message);
  }

  conlog($e) {

  }

}
