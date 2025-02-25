import { useMemo, useState } from 'react';

import { Box, Grid, Typography, LinearProgress } from '@mui/material';

import { useStockData } from 'src/hooks/use-stock-data';

import { fRelative } from 'src/utils/format-time';
import { DEFAULT_STATS_FILTER, STATS_FILTERS_OPTIONS } from 'src/utils/constants';

import { DashboardContent } from 'src/layouts/dashboard';

import { StatsFilter } from '../stats-filter';
import { AnalyticsStockPrices } from '../analytics-stock-prices';

export function StatsView() {
  const { chartData, error, isLoading } = useStockData();

  const [months, setMonths] = useState<number>(DEFAULT_STATS_FILTER);

  const filteredChartData = useMemo(() => {
    const filterCategories = chartData.categories.slice(-months);
    const filterSeries = chartData.series.map((series) => ({
      name: series.name,
      data: series.data.slice(-months),
    }));

    return { categories: filterCategories, series: filterSeries };
  }, [chartData, months]);

  if (error) return <div>Failed to load</div>;

  return (
    <DashboardContent>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Stats
      </Typography>

      <Box
        display="flex"
        flexDirection="row-reverse"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 5 }}
      >
        <StatsFilter
          filterBy={months}
          onFilter={(newSort: number) => {
            setMonths(newSort);
          }}
          options={STATS_FILTERS_OPTIONS}
        />
      </Box>

      <Grid container>
        <Grid item xs={12}>
          {isLoading ? (
            <LinearProgress />
          ) : (
            <AnalyticsStockPrices
              title="APPL Stock Prices"
              subheader={`last updated ${fRelative(new Date())}`}
              chart={filteredChartData}
            />
          )}
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
