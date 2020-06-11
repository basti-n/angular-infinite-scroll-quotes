import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { QuoteScrollerComponent } from './components/quote-scroller';

@NgModule({
  declarations: [AppComponent, QuoteScrollerComponent],
  imports: [BrowserModule, ScrollingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
