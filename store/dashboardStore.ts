import { create } from 'zustand';
import { DashboardData, DashboardFilters, DateRange, UserType } from '@/types';

interface DashboardState {
  data: DashboardData | null;
  filters: DashboardFilters;
  isLoading: boolean;
  error: string | null;
  setData: (data: DashboardData) => void;
  setFilters: (filters: Partial<DashboardFilters>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  updateDateRange: (dateRange: DateRange) => void;
  updateUserType: (userType: UserType) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  data: null,
  filters: {
    dateRange: '30days',
    userType: 'all',
  },
  isLoading: false,
  error: null,
  setData: (data) => set({ data }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  updateDateRange: (dateRange) => set((state) => ({ filters: { ...state.filters, dateRange } })),
  updateUserType: (userType) => set((state) => ({ filters: { ...state.filters, userType } })),
}));
