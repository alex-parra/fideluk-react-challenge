export const toQueryString = (params: Object) => {
  if (params == null) return '';

  const qs = Object.entries(params)
    .map(([key, value]) => (value != null ? `${key}=${encodeURIComponent(value)}` : ''))
    .filter(Boolean)
    .join('&');

  return qs ? `?${qs}` : '';
};
