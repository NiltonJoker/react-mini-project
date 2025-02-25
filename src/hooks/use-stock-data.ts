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

  const sortedData = data?.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const chartData = sortedData
    ? {
        categories: sortedData.map((item) => fRelative(item.date) || DEFAULT_CATEGORY),
        series: [{ name: DEFAULT_SERIES_NAME, data: sortedData.map((item) => item.close) }],
      }
    : { categories: [], series: [{ name: DEFAULT_SERIES_NAME, data: [] }] };

  return { chartData, error, isLoading };
}
