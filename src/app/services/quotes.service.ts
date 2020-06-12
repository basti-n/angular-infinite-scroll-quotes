import { Injectable } from '@angular/core';
import { Quote } from '../defs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { QuoteDto } from '../defs/dtos/quote.dto';
import { QuoteResponseDto } from '../defs/dtos';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private url = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote> {
    return this.http
      .get<QuoteResponseDto>(this.url)
      .pipe(map((response) => this.mapToQuote(response.quote)));
  }

  private mapToQuote(response: QuoteDto): Quote {
    return {
      id: response._id,
      author: response.quoteAuthor,
      text: response.quoteText,
    };
  }
}
