'use client';

import React, { memo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrafficSource } from '@/types';

interface TrafficSourceChartProps {
  data: TrafficSource[];
}

const COLORS = ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export const TrafficSourceChart: React.FC<TrafficSourceChartProps> = memo(({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Traffic Sources
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
          <XAxis type="number" stroke="#6B7280" style={{ fontSize: '12px' }} />
          <YAxis
            dataKey="name"
            type="category"
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
            formatter={(value: number) => [`${value}%`, 'Traffic']}
          />
          <Bar 
            dataKey="value" 
            radius={[0, 8, 8, 0]}
            animationDuration={1200}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

TrafficSourceChart.displayName = 'TrafficSourceChart';
