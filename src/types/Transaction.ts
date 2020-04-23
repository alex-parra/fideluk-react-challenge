import { Brand } from './Brand';
import { Card } from './Card';
import { Place } from './Place';

export interface Transaction {
  id: string;
  programId: string;
  accountId: string;
  created: string;
  updated: string;
  datetime: string;
  brand: Brand;
  currency: string;
  amount: number;
  card: Card;
  location: Place;
  cleared: boolean;
  wallet: 'apple-pay' | 'google-pay' | 'samsung-pay';
}
