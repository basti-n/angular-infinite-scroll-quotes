import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ObserverSpy } from '@hirez_io/observer-spy';
import { QuotesService } from './quotes.service';
import { quotesDtoMock, mockQuotes } from '../mocks';
import { of } from 'rxjs';

describe('QuotesService', () => {
  let quotesService: QuotesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    quotesService = TestBed.get(QuotesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: QuotesService = TestBed.get(QuotesService);
    expect(service).toBeTruthy();
  });

  describe('#getQuotes', () => {
    it('should make a GET request to https://quote-garden.herokuapp.com/api/v2/quotes/random', () => {
      spyOn(quotesService, 'getQuotes').and.callThrough();
      quotesService.getQuotes().subscribe();

      const request = httpTestingController.expectOne(
        'https://quote-garden.herokuapp.com/api/v2/quotes/random'
      );

      expect(quotesService.getQuotes).toHaveBeenCalled();
      expect(request.request.url).toBe(
        'https://quote-garden.herokuapp.com/api/v2/quotes/random'
      );
      expect(request.request.method).toBe('GET');

      request.flush(quotesDtoMock[0]);
    });

    it('should provide the returned quote', () => {
      const observerSpy = new ObserverSpy();

      spyOn(quotesService, 'getQuotes').and.returnValue(of(mockQuotes[0]));

      const sub = quotesService.getQuotes().subscribe(observerSpy);

      sub.unsubscribe();

      expect(observerSpy.getLastValue()).toEqual(mockQuotes[0]);
    });
  });
});
