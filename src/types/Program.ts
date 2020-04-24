import { MetaData } from 'types/MetaData';

export interface Program {
  id: string;
  name: string;
  created?: string;
  updated?: string;
  accountId?: string;
  active?: boolean;
  activeDate?: string;
  metadata?: MetaData;
}
