export const DEFAULT_CATEGORY = 'Invalid date';
export const DEFAULT_SERIES_NAME = 'AAPL';

// dev mode and prod mode
export const API_ENDPOINT =
  import.meta.env.MODE === 'development'
    ? 'https://appl-stock-prices.vercel.app/api/stock-data'
    : '/api/stock-data';

export const CLIENT_ID = import.meta.env.VITE_WORKOS_CLIENT_ID || '';

export const DEFAULT_STATS_FILTER = 12;

export const STATS_FILTERS_OPTIONS = [
  { value: 3, label: 'Last 3 months' },
  { value: 6, label: 'Last 6 months' },
  { value: 12, label: 'Last 12 months' },
];
