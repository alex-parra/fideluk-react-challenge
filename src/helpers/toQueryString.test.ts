import { toQueryString } from './toQueryString';

describe('toQueryString', () => {
  it('should return empty string if no valid params exist', () => {
    expect(toQueryString({})).toBe('');
  });

  it('should return proper query-string for single param', () => {
    expect(toQueryString({ limit: 50 })).toBe('?limit=50');
    expect(toQueryString({ page: 10 })).toBe('?page=10');
    expect(toQueryString({ type: 'users' })).toBe('?type=users');
  });

  it('should return proper query-string when mulitple valid params exist', () => {
    const params = { limit: 50, page: 10, type: 'users' };
    const actual = toQueryString(params);
    const expected = '?limit=50&page=10&type=users';
    expect(actual).toBe(expected);
  });

  it('should return proper query-string when mixed params exist', () => {
    const params = { limit: 50, page: null, type: 'users', sort: undefined };
    const actual = toQueryString(params);
    const expected = '?limit=50&type=users';
    expect(actual).toBe(expected);
  });
});
