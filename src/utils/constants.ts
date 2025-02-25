export const DEFAULT_CATEGORY = 'Invalid date';
export const DEFAULT_SERIES_NAME = 'AAPL';

// dev mode and prod mode
export const API_ENDPOINT =
  import.meta.env.MODE === 'development'
    ? 'https://appl-stock-prices.vercel.app/api/stock-data'
    : '/api/stock-data';

export const CLIENT_ID = import.meta.env.VITE_WORKOS_CLIENT_ID || '';
export const API_KEY = import.meta.env.VITE_WORKOS_API_KEY || '';