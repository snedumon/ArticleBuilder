import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedactorComponent } from './redactor/redactor.component';
import { FloaraEditorComponent } from './floara-editor/floara-editor.component';
import { FormatorComponent } from './formator/formator.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: '', component: RedactorComponent},
  {path: 'redactor', component: RedactorComponent},
  {path: 'formator', component: FormatorComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
