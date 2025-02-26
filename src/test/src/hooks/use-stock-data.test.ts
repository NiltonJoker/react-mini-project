import useSWR from 'swr';
import { waitFor, renderHook } from '@testing-library/react';
import { it, vi, expect, describe, afterEach } from 'vitest';

import { useStockData } from 'src/hooks/use-stock-data';

import { API_ENDPOINT } from 'src/utils/constants';


vi.mock('swr');

describe('useStockData', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should handle unsorted data', async () => {
    const mockData = [
      { date: '2024-03-01', close: 170 },
      { date: '2024-01-01', close: 150 },
      { date: '2024-02-01', close: 160 },
    ];

    vi.mocked(useSWR).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      mutate: vi.fn(),
      isValidating: false,
    });

    const { result } = renderHook(() => useStockData());

    await waitFor(() => {
      expect(result.current.chartData.categories.length).toBe(3);
    });

    expect(result.current.chartData.series[0].data).toEqual([150, 160, 170]);
  });

  it('should handle empty data', async () => {
    vi.mocked(useSWR).mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
      mutate: vi.fn(),
      isValidating: false,
    });

    const { result } = renderHook(() => useStockData());

    await waitFor(() => {
      expect(result.current.chartData.categories).toEqual([]);
    });

    expect(result.current.chartData.series[0].data).toEqual([]);
  });

  it('should handle dates in different formats', async () => {
    const mockData = [
      { date: '2024-02-01T00:00:00Z', close: 160 },
      { date: '2024-01-01T00:00:00Z', close: 150 },
    ];

    vi.mocked(useSWR).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      mutate: vi.fn(),
      isValidating: false,
    });

    const { result } = renderHook(() => useStockData());

    await waitFor(() => {
      expect(result.current.chartData.categories.length).toBe(2);
    });

    expect(result.current.chartData.series[0].data).toEqual([150, 160]);
  });

  it('should call useSWR with the correct URL', () => {
    vi.mocked(useSWR).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
      mutate: vi.fn(),
      isValidating: false,
    });

    renderHook(() => useStockData());

    expect(useSWR).toHaveBeenCalledWith(API_ENDPOINT, expect.any(Function));
  });
});
