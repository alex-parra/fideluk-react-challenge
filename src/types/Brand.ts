import { MetaData } from './MetaData';

export interface Brand {
  id: string;
  name: string;
  logoURL: string;
  metadata: MetaData;
}
