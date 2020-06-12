import { QuoteDto } from '../defs/dtos';
import { Quote } from '../defs';

export const quotesDtoMock: QuoteDto[] = [
  {
    _id: '5eb17ab1b69dc744b4e7adc8',
    quoteText:
      'Men judge us by the success of our efforts. God looks at the efforts themselves.',
    quoteAuthor: 'Hope Davis',
    quoteGenre: 'learning',
    __v: 0,
  },
  {
    _id: '5eb17aadb69dc744b4e71390',
    quoteText:
      'The power of a book lies in its power to turn a solitary act into a shared vision. As long as we have books, we are not alone.',
    quoteAuthor: 'Laura Bush',
    quoteGenre: 'alone',
    __v: 0,
  },
];

export const mockQuotes: Quote[] = [
  {
    id: '5eb17aadb69dc744b4e71390',
    author: 'Laura Bush',
    text:
      'The power of a book lies in its power to turn a solitary act into a shared vision. As long as we have books, we are not alone.',
  },
];
