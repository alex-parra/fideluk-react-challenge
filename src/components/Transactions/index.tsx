import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Program } from 'types/index';
import { useTransactions } from 'hooks/useTransactions';
import TransactionsListItem from './Transaction';
import { TransactionsStyled, PerPage, Tools, Toggle, Status } from './styled';

interface TransactionsProps {
  program: Program;
  limit?: number;
}

const Transactions: React.FC<TransactionsProps> = ({ program, limit = 20 }) => {
  const [perPage, setPerPage] = useState(limit);
  const { status, items, loadMore, setLimit } = useTransactions(program, perPage);

  const [infinite, setInfinite] = useState<string | null>('1');

  const loadMoreEl = useRef<HTMLDivElement | null>(null);
  const intersectionCallback = useCallback(([entry]) => entry.intersectionRatio === 1 && loadMore(), [loadMore]);
  const io = useMemo(() => new IntersectionObserver(intersectionCallback, { threshold: 1.0 }), [intersectionCallback]);
  useEffect(() => {
    if (!infinite || status !== 'success' || !loadMoreEl.current) return;
    const el = loadMoreEl.current;
    io.observe(el as Element);
    return () => (el && io.unobserve(el), undefined); // eslint-disable-line
  }, [status, io, infinite]);

  const setLimitTimer = useRef<number>();
  useEffect(() => {
    clearTimeout(setLimitTimer.current);
    setLimitTimer.current = setTimeout(setLimit, 1000, perPage);
    return () => clearTimeout(setLimitTimer.current);
  }, [perPage, setLimit]);

  return (
    <>
      <Tools>
        <Toggle>
          <input
            type="checkbox"
            value="1"
            checked={infinite === '1'}
            onChange={() => setInfinite(infinite ? null : '1')}
          />
          <span>Auto load-more?</span>
        </Toggle>
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

      <Status>
        {status === 'failed' ? (
          <div className="error">
            <strong>Oops! Failed to load transactions</strong>
            <button onClick={loadMore}>Try again</button>
          </div>
        ) : (
          <div className="loadMore" ref={loadMoreEl}>
            <button onClick={loadMore} disabled={status === 'loading'}>
              {status === 'loading' ? 'Loading...' : 'Load more'}
            </button>
          </div>
        )}
      </Status>
    </>
  );
};

export default Transactions;
