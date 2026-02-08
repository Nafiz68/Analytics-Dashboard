'use client';

import React, { memo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { OrderData } from '@/types';

interface OrdersChartProps {
  data: OrderData[];
}

export const OrdersChart: React.FC<OrdersChartProps> = memo(({ data }) => {
  // Take a subset for better display
  const displayData = data.length > 12 ? data.slice(0, 12) : data;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Orders Per Period
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={displayData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
          <XAxis
            dataKey="month"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            formatter={(value) => [value ?? 0, 'Orders']}
          />
          <Bar
            dataKey="orders"
            fill="#8B5CF6"
            radius={[8, 8, 0, 0]}
            animationDuration={1200}
            animationEasing="ease-in-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

OrdersChart.displayName = 'OrdersChart';
