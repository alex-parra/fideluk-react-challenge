import React from 'react';
import { Transaction } from 'types';

interface TransactionProps {
  transaction: Transaction;
}

const TransactionsListItem: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <li data-testid="transaction">
      <h3>{transaction.datetime}</h3>
      <small>{transaction.id}</small>
    </li>
  );
};

export default React.memo(TransactionsListItem, (prev, next) => prev.transaction.id === next.transaction.id);
