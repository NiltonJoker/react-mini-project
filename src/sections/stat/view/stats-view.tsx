import { Grid, Typography, LinearProgress } from '@mui/material';

import { useStockData } from 'src/hooks/use-stock-data';

import { fRelative } from 'src/utils/format-time';

import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsStockPrices } from '../analytics-stock-prices';


export function StatsView() {
  const { chartData, error, isLoading } = useStockData();

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
