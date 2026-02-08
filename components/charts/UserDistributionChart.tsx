'use client';

import React, { memo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { UserDistribution } from '@/types';

interface UserDistributionChartProps {
  data: UserDistribution[];
}

export const UserDistributionChart: React.FC<UserDistributionChartProps> = memo(({ data }) => {
  // Calculate total percentage to determine if we need to add "other" slice
  const totalPercentage = data.reduce((sum, item) => sum + parseFloat(item.percentage || '0'), 0);
  
  // If total is less than 100, add a gray "other" slice to show context
  const chartData = totalPercentage < 100 
    ? [
        ...data,
        { 
          name: 'Other Users', 
          value: 0, 
          color: '#9ca3af', 
          percentage: (100 - totalPercentage).toFixed(1),
          isOther: true 
        }
      ]
    : data;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        User Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percentage, isOther }) => 
              isOther ? '' : `${name}: ${percentage}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey={(entry) => parseFloat(entry.percentage || '0')}
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                opacity={entry.isOther ? 0.2 : 1}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            formatter={(value: number, name: string, props: any) => 
              props.payload.isOther ? null : [`${props.payload.percentage}%`, name]
            }
          />
          <Legend 
            formatter={(value, entry: any) => 
              entry.payload.isOther ? null : value
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
});

UserDistributionChart.displayName = 'UserDistributionChart';
