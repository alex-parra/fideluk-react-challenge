import { apiUrls } from './_constants';

export default async (programId: string, params = {}) => {
  const url = apiUrls.programTransactions(programId);
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    if (!resp.ok) throw new Error(data?.error?.message ?? 'Request failed.');
    return data;
  } catch (error) {
    throw error;
  }
};
