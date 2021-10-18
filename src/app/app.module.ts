import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';

import { AppComponent } from './app.component';
const routes = [
 { path:'',
  component:AppComponent
 }  
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	CKEditorModule
, RouterModule.forRoot(routes, {useHash: true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
