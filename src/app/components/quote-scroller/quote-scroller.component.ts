import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { QuotesService } from 'src/app/services/quotes.service';
import { QuotesDatasource } from './quotes.datasource';

@Component({
  selector: 'app-quote-scroller',
  templateUrl: './quote-scroller.component.html',
  styleUrls: ['./quote-scroller.component.scss'],
})
export class QuoteScrollerComponent implements OnInit {
  dataSource: QuotesDatasource;

  constructor(private quotesService: QuotesService) {
    this.dataSource = new QuotesDatasource(quotesService);
  }

  ngOnInit() {}
}
