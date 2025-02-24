import useSWR from 'swr';

import { fetcher } from 'src/utils/fetcher';
import { fRelative } from 'src/utils/format-time';
import { API_ENDPOINT, DEFAULT_CATEGORY, DEFAULT_SERIES_NAME } from 'src/utils/constants';

type StockPrice = {
  date: string;
  close: number;
};

export function useStockData() {
  const { data, error, isLoading } = useSWR<StockPrice[]>(
    API_ENDPOINT,
    fetcher
  );

  const chartData = data
    ? {
        categories: data.map((item) => fRelative(item.date) || DEFAULT_CATEGORY),
        series: [{ name: DEFAULT_SERIES_NAME, data: data.map((item) => item.close) }],
      }
    : { categories: [], series: [{ name: DEFAULT_SERIES_NAME, data: [] }] };

  return { chartData, error, isLoading };
}
