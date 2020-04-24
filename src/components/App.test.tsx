import React from 'react';
import { render } from '@testing-library/react';
import mockTransactions from 'services/api/__mocks__/mock-transactions';
import App from './App';
jest.mock('services/api');

test('renders as expected', async () => {
  const { getByText, findAllByTestId } = render(<App />);
  expect(getByText(/fidel/i)).toBeInTheDocument();
  expect(getByText(/loading/i)).toBeInTheDocument();
  const ts = await findAllByTestId('transaction');
  expect(ts.length).toBe(mockTransactions.length);
});
