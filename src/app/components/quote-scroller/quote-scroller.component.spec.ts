import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteScrollerComponent } from './quote-scroller.component';

describe('QuoteScrollerComponent', () => {
  let component: QuoteScrollerComponent;
  let fixture: ComponentFixture<QuoteScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
