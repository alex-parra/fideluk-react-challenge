import React from 'react';
import { Transaction } from 'types';
import { TransactionStyled } from './styled';

interface TransactionProps {
  transaction: Transaction;
}

const TransactionsListItem: React.FC<TransactionProps> = ({ transaction }) => {
  const date = new Date(transaction.datetime).toLocaleDateString();
  const value = new Intl.NumberFormat('en', { style: 'currency', currency: transaction.currency }).format(
    transaction.amount,
  );

  return (
    <TransactionStyled data-testid="transaction">
      <div className="primary">
        <span className="transId">{transaction.id}</span>
        <div className="amount">
          <span className="card">
            {transaction.card.scheme} <small>{transaction.card.lastNumbers}</small>
          </span>
          <span className="value">{value}</span>
        </div>
      </div>
      <div className="other">
        <span className="date">{date}</span>
        <span className="location">
          {transaction.location.address} {transaction.location.city}
        </span>
      </div>
    </TransactionStyled>
  );
};

export default React.memo(TransactionsListItem, (prev, next) => prev.transaction.id === next.transaction.id);
