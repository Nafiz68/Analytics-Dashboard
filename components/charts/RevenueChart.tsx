'use client';

import React, { memo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RevenueData } from '@/types';

interface RevenueChartProps {
  data: RevenueData[];
}

export const RevenueChart: React.FC<RevenueChartProps> = memo(({ data }) => {
  // Take a subset for better display on small screens
  const displayData = data.length > 12 ? data.slice(0, 12) : data;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
        Revenue Over Time
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={displayData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.2} />
          <XAxis
            dataKey="month"
            stroke="#64748b"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#64748b"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
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
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', r: 4 }}
            activeDot={{ r: 6 }}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

RevenueChart.displayName = 'RevenueChart';
