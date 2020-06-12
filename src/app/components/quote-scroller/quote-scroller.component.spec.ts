import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteScrollerComponent } from './quote-scroller.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { of, Observable } from 'rxjs';
import { mockQuotes } from 'src/app/mocks';
import { Quote } from 'src/app/defs';
import { QuotesService } from 'src/app/services/quotes.service';

describe('QuoteScrollerComponent', () => {
  let component: QuoteScrollerComponent;
  let fixture: ComponentFixture<QuoteScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScrollingModule],
      providers: [{ provide: QuotesService, useClass: MockQuotesService }],
      declarations: [QuoteScrollerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

export class MockQuotesService {
  getQuotes(): Observable<Quote> {
    return of(mockQuotes[0]);
  }
}
