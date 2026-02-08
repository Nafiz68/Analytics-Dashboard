import { useEffect } from 'react';
import { useDashboardStore } from '@/store/dashboardStore';
import { fetchDashboardData } from '@/services/dashboardService';

export const useDashboardData = () => {
  const { data, filters, isLoading, error, setData, setLoading, setError } = useDashboardStore();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const dashboardData = await fetchDashboardData(filters);
        setData(dashboardData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [filters, setData, setLoading, setError]);

  return { data, isLoading, error };
};
