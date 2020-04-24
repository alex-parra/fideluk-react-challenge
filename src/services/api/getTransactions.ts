import { apiUrls } from './_constants';
import { toQueryString } from 'helpers/toQueryString';

interface Params {
  limit?: number;
  start?: string | null;
}

const defaultParams: Params = {
  limit: 20,
  start: undefined,
};

export default async (programId: string, params: Params = {}) => {
  const url = apiUrls.programTransactions(programId);
  const q = toQueryString({
    ...defaultParams,
    ...params,
  });

  try {
    const resp = await fetch(url + q);
    const data = await resp.json();
    if (!resp.ok) throw new Error(data?.error?.message ?? 'Request failed.');
    return data;
  } catch (error) {
    throw error;
  }
};
