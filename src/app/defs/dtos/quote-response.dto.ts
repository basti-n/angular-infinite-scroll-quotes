import { QuoteDto } from './quote.dto';

export interface QuoteResponseDto {
  statusCode?: string;
  quote?: QuoteDto;
}
