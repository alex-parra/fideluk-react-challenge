import { MetaData } from './MetaData';

export interface Place {
  id: string;
  address: string;
  city: string;
  countryCode: string;
  postcode: string;
  timezone: string;
  geolocation: Record<string, number>;
  metadata: MetaData;
}
