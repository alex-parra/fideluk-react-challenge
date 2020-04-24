import { useEffect, useReducer, Reducer } from 'react';
import { Program } from 'types/index';
import { State, Action } from './types';
import API from 'services/api';

const reducer: Reducer<State, Action> = (state, { type, payload }) => {
  switch (type) {
    case 'LOADING':
      return { ...state, status: 'loading' };

    case 'FAILED':
      return { ...state, status: 'failed', transactions: null, last: null };

    case 'LOAD_MORE':
      return { ...state, start: JSON.stringify(state.last) };

    case 'SET_LIMIT':
      return { ...state, limit: payload, transactions: null, last: null, start: null };

    case 'SUCCESS':
      const transactions = Object.values(state.transactions || {})
        .concat(payload.items)
        .reduce((acc, t) => ({ ...acc, [t.id]: t }), {});
      return { ...state, status: 'success', transactions, last: payload.last };
  }
};

const defaultState: State = {
  status: 'loading',
  limit: 50,
  start: null,
  transactions: null,
  last: null,
};

const useTransactions = (program: Program, limit = defaultState.limit) => {
  const [state, dispatch] = useReducer(reducer, { ...defaultState, limit });

  useEffect(() => {
    let mounted = true;
    dispatch({ type: 'LOADING' });
    API.getTransactions(program.id, { limit: state.limit, start: state.start })
      .then((data) => mounted && dispatch({ type: 'SUCCESS', payload: data }))
      .catch(() => mounted && dispatch({ type: 'FAILED' }));
    return () => {
      mounted = false;
    };
  }, [program, state.limit, state.start]);

  const loadMore = () => {
    dispatch({ type: 'LOAD_MORE' });
  };

  const setLimit = (limit: number) => {
    if (limit === state.limit) return;
    dispatch({ type: 'SET_LIMIT', payload: limit });
  };

  return {
    status: state.status,
    items: Object.values(state.transactions || {}),
    loadMore,
    setLimit,
  };
};

export { useTransactions };
