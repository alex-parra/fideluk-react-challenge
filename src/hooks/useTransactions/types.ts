import { Transaction } from 'types/index';

export interface State {
  status: 'loading' | 'success' | 'failed';
  limit: number;
  start: null | string;
  transactions: null | Record<string, Transaction>;
  last: null | Object;
}

export interface Action {
  type: 'LOADING' | 'SUCCESS' | 'FAILED' | 'LOAD_MORE' | 'SET_LIMIT';
  payload?: any;
}
