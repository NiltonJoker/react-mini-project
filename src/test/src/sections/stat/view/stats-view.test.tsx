import type { Mock } from 'vitest';

import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { useStockData } from 'src/hooks/use-stock-data';

import { StatsView } from 'src/sections/stat/view/stats-view';

// Mock de `useStockData`
vi.mock('src/hooks/use-stock-data', () => ({
  useStockData: vi.fn(),
}));


describe('StatsView Test', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('debe mostrar el mensaje de error cuando hay un error', () => {
    (useStockData as Mock<typeof useStockData>).mockReturnValue({
      chartData: { categories: [], series: [] },
      error: new Error('Failed to load'),
      isLoading: false,
    });

    render(<StatsView />);
    expect(screen.getByText(/Failed to load/i)).toBeInTheDocument();
  });

});
