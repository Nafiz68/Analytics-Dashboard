'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardFilters } from '@/components/filters/DashboardFilters';
import { KPICards } from '@/components/cards/KPICards';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { OrdersChart } from '@/components/charts/OrdersChart';
import { UserDistributionChart } from '@/components/charts/UserDistributionChart';
import { TrafficSourceChart } from '@/components/charts/TrafficSourceChart';
import { KPISkeleton, ChartSkeleton } from '@/components/ui/Skeleton';
import { ErrorState } from '@/components/ui/ErrorState';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useDashboardStore } from '@/store/dashboardStore';

export default function DashboardPage() {
  const { data, isLoading, error } = useDashboardData();
  const { setFilters } = useDashboardStore();

  const handleRetry = () => {
    setFilters({ dateRange: '30days', userType: 'all' });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Filters */}
        <DashboardFilters />

        {error ? (
          <ErrorState message={error} onRetry={handleRetry} />
        ) : (
          <>
            {/* KPI Cards */}
            {isLoading ? (
              <KPISkeleton />
            ) : (
              data && <KPICards data={data.kpis} />
            )}

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {isLoading ? (
                <>
                  <ChartSkeleton />
                  <ChartSkeleton />
                  <ChartSkeleton />
                  <ChartSkeleton />
                </>
              ) : (
                data && (
                  <>
                    <RevenueChart data={data.revenueData} />
                    <OrdersChart data={data.orderData} />
                    <UserDistributionChart data={data.userDistribution} />
                    <TrafficSourceChart data={data.trafficSource} />
                  </>
                )
              )}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
