import { EntityContainer } from './entity-container.model';

export interface Quote extends EntityContainer {
  author?: string;
  title?: string;
}
