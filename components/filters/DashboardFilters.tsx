'use client';

import React from 'react';
import { Calendar, Filter } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';
import { DateRange, UserType } from '@/types';

export const DashboardFilters: React.FC = () => {
  const { filters, updateDateRange, updateUserType } = useDashboardStore();

  const dateRangeOptions: { value: DateRange; label: string }[] = [
    { value: '7days', label: 'Last 7 days' },
    { value: '30days', label: 'Last 30 days' },
    { value: '12months', label: 'Last 12 months' },
  ];

  const userTypeOptions: { value: UserType; label: string }[] = [
    { value: 'all', label: 'All Users' },
    { value: 'free', label: 'Free Users' },
    { value: 'premium', label: 'Premium Users' },
    { value: 'enterprise', label: 'Enterprise Users' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Date Range Filter */}
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            <Calendar className="w-4 h-4" />
            Date Range
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => updateDateRange(e.target.value as DateRange)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
          >
            {dateRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* User Type Filter */}
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            <Filter className="w-4 h-4" />
            User Type
          </label>
          <select
            value={filters.userType}
            onChange={(e) => updateUserType(e.target.value as UserType)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
          >
            {userTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
