import { API } from 'config';

const base = (path: string) => API.BASE_URL + path;

export const apiUrls = {
  programTransactions: (programId: string) => base(`/programs/${programId}/transactions`),
};
