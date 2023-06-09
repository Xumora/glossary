import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EnterPageComponent } from './enter-page/enter-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WordBoxComponent } from './word-box/word-box.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterPageComponent,
    MainPageComponent,
    WordBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
