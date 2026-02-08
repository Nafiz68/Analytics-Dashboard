'use client';

import React, { memo } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart } from 'lucide-react';
import { KPIData } from '@/types';

interface KPICardProps {
  data: KPIData;
}

const iconMap = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
};

export const KPICard: React.FC<KPICardProps> = memo(({ data }) => {
  const Icon = iconMap[data.icon as keyof typeof iconMap] || TrendingUp;
  const isPositive = data.change >= 0;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            {data.title}
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {data.value}
          </h3>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-rose-600 dark:text-rose-500" />
            )}
            <span
              className={`text-sm font-medium ${
                isPositive ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'
              }`}
            >
              {isPositive ? '+' : ''}
              {data.change.toFixed(1)}%
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400 ml-1">vs last period</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${data.color.replace('text-', 'bg-').replace('-600', '-100')} dark:bg-opacity-20`}>
          <Icon className={`w-6 h-6 ${data.color}`} />
        </div>
      </div>
    </div>
  );
});

KPICard.displayName = 'KPICard';

interface KPICardsProps {
  data: KPIData[];
}

export const KPICards: React.FC<KPICardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((kpi, index) => (
        <KPICard key={index} data={kpi} />
      ))}
    </div>
  );
};
