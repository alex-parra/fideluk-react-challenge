import React, { useState } from 'react';
import { Global } from 'design/index';
import { Program } from 'types/index';
import Transactions from './Transactions';

const defaultProgram: Program = {
  id: '2314f371-39b1-4c80-8040-4144ff1bad09',
  name: 'Test Program',
};

const App: React.FC = () => {
  const [program] = useState(defaultProgram);

  return (
    <>
      <Global />
      <header>
        <h1>Fidel API Transactions</h1>
      </header>
      <main>
        <Transactions program={program} />
      </main>
    </>
  );
};

export default App;
