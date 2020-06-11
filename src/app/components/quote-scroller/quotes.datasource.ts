import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Quote } from '@angular/compiler';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes.service';

export class QuotesDatasource extends DataSource<Quote> {
  private cachedQuotes = Array.from<Quote>({ length: 0 });
  private dataStream = new BehaviorSubject<Quote[]>(this.cachedQuotes);
  private subscription = new Subscription();

  private lastPage = 0;
  private pageSize = 5;

  constructor(private quotesService: QuotesService) {
    super();
    this.getInitialData();
  }

  private getInitialData() {
    this.fetchQuotesPage();
  }

  connect(collectionViewer: CollectionViewer): Observable<Quote[]> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        const currentPage = this.getPageForIndex(range.end);

        console.log('rangeEnd', range.end);
        console.log({ currentPage });

        if (currentPage > this.lastPage) {
          this.lastPage = currentPage;
          this.fetchQuotesPage();
        }
      })
    );

    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private fetchQuotesPage() {
    for (let i = 0; i < this.pageSize; i++) {
      this.quotesService.getQuotes().subscribe((quote) => {
        this.cachedQuotes = [...this.cachedQuotes, quote] as Quote[];
        this.dataStream.next(this.cachedQuotes);
      });
    }
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }
}
