import React, { useState, useEffect } from 'react';
import './App.css';

import { Transaction } from 'types/Transaction';
import API from 'services/api';

const defaultProgram = {
  id: '2314f371-39b1-4c80-8040-4144ff1bad09',
};

const App: React.FC = () => {
  const [program] = useState(defaultProgram);
  const [transactions, setTransactions] = useState<Transaction[] | null>();

  useEffect(() => {
    let mounted = true;
    API.getTransactions(program.id)
      .then((data) => mounted && setTransactions(data.items))
      .catch(() => mounted && setTransactions(null));
    return () => {
      mounted = false;
    };
  }, [program]);

  return (
    <div className="App">
      <h1>Fidel API Transactions</h1>

      {transactions == null ? (
        <div>Loading...</div>
      ) : (
        <>
          <ol>
            {(transactions || []).map((t: Transaction) => {
              return <li key={t.id}>{t.id}</li>;
            })}
          </ol>
        </>
      )}
    </div>
  );
};

export default App;
