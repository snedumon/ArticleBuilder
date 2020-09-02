import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule } from '@angular/forms';

import { FloaraEditorComponent } from './floara-editor/floara-editor.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditorComponent } from './editor/editor.component';
import { FormatorComponent } from './formator/formator.component';
import { ResultComponent } from './result/result.component';
import { RedactorComponent } from './redactor/redactor.component';
import { DataService } from './data.service';
import { ViewComponent } from './view/view.component';
import { TinymceComponent } from './tinymce/tinymce.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FloaraEditorComponent,
    HeaderComponent,
    FooterComponent,
    EditorComponent,
    FormatorComponent,
    ResultComponent,
    RedactorComponent,
    ViewComponent,
    TinymceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EditorModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
