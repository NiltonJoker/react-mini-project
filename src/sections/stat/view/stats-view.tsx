import useSWR from 'swr';

import { Grid, Typography, LinearProgress } from '@mui/material';

import { fRelative } from 'src/utils/format-time';

import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsStockPrices } from '../analytics-stock-prices';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener los datos');
  return response.json();
};

export function StatsView() {
  const { data, error, isLoading } = useSWR<{ date: string; close: number }[]>(
    '/api/stock-data',
    fetcher
  );

  const chartData = data
    ? {
        categories: data.map((item: { date: string }) => fRelative(item.date) || 'Invalid date'),
        series: [{ name: 'AAPL', data: data.map((item: { close: number }) => item.close) }],
      }
    : { categories: [], series: [{ name: 'AAPL', data: [] }] };

  if (error) return <div>Failed to load</div>;

  return (
    <DashboardContent>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Stats
      </Typography>

      <Grid container>
        <Grid item xs={12}>

          {isLoading ? (
            <LinearProgress />
          ) : (
            <AnalyticsStockPrices
              title="APPL Stock Prices"
              subheader={`last updated ${fRelative(new Date())}`}
              chart={chartData}
            />
          )}
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
