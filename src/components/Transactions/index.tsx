import React, { useState, useEffect, useRef } from 'react';
import { Program } from 'types/index';
import { useTransactions } from 'hooks/useTransactions';
import TransactionsListItem from './Transaction';
import { TransactionsStyled, PerPage, Tools } from './styled';

interface TransactionsProps {
  program: Program;
  limit?: number;
}

const Transactions: React.FC<TransactionsProps> = ({ program, limit = 10 }) => {
  const [perPage, setPerPage] = useState(limit);
  const { status, items, loadMore, setLimit } = useTransactions(program, perPage);

  const setLimitTimer = useRef<number>();
  useEffect(() => {
    clearTimeout(setLimitTimer.current);
    setLimitTimer.current = setTimeout(setLimit, 1000, perPage);
    return () => clearTimeout(setLimitTimer.current);
  }, [perPage, setLimit]);

  return (
    <>
      <Tools>
        <PerPage>
          <span>Per page: </span>
          <input value={perPage} onChange={(ev) => setPerPage(Number(ev.currentTarget.value))} />
        </PerPage>
      </Tools>
      <TransactionsStyled>
        {items.length > 0 && (
          <ol>
            {items.map((t) => (
              <TransactionsListItem key={t.id} transaction={t} />
            ))}
          </ol>
        )}
      </TransactionsStyled>

      {status === 'failed' && <div>Oops! Failed to load transactions</div>}

      <div className="loadMore">
        {status === 'loading' ? <button disabled>Loading...</button> : <button onClick={loadMore}>Load more...</button>}
      </div>
    </>
  );
};

export default Transactions;
