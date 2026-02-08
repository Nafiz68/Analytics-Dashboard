import { DashboardData, DashboardFilters } from '@/types';

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock data generator
const generateMockData = (filters: DashboardFilters): DashboardData => {
  const { dateRange, userType } = filters;

  // Base multipliers based on filters
  const dateMultiplier = dateRange === '7days' ? 0.2 : dateRange === '30days' ? 1 : 12;
  const userMultiplier = userType === 'all' ? 1 : userType === 'premium' ? 1.5 : userType === 'enterprise' ? 2 : 0.5;

  const baseRevenue = 54230 * dateMultiplier * userMultiplier;
  const baseUsers = Math.floor(1245 * userMultiplier);
  const baseOrders = Math.floor(342 * dateMultiplier * userMultiplier);
  const baseConversion = 4.3 * userMultiplier;

  const kpis = [
    {
      title: 'Total Revenue',
      value: `$${baseRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
      change: Math.random() * 20 - 5,
      icon: 'DollarSign',
      color: 'text-green-600',
    },
    {
      title: 'Total Users',
      value: baseUsers.toLocaleString(),
      change: Math.random() * 15 - 3,
      icon: 'Users',
      color: 'text-blue-600',
    },
    {
      title: 'Orders',
      value: baseOrders.toLocaleString(),
      change: Math.random() * 25 - 8,
      icon: 'ShoppingCart',
      color: 'text-purple-600',
    },
    {
      title: 'Conversion Rate',
      value: `${baseConversion.toFixed(1)}%`,
      change: Math.random() * 10 - 2,
      icon: 'TrendingUp',
      color: 'text-orange-600',
    },
  ];

  // Revenue data based on date range
  const revenueData = dateRange === '7days'
    ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => ({
        month: day,
        revenue: Math.floor(Math.random() * 10000 + 5000) * userMultiplier,
      }))
    : dateRange === '30days'
    ? Array.from({ length: 30 }, (_, i) => ({
        month: `Day ${i + 1}`,
        revenue: Math.floor(Math.random() * 8000 + 3000) * userMultiplier,
      }))
    : [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ].map((month) => ({
        month,
        revenue: Math.floor(Math.random() * 50000 + 30000) * userMultiplier,
      }));

  // Order data
  const orderData = dateRange === '7days'
    ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => ({
        month: day,
        orders: Math.floor(Math.random() * 50 + 20) * userMultiplier,
      }))
    : dateRange === '30days'
    ? Array.from({ length: 30 }, (_, i) => ({
        month: `Day ${i + 1}`,
        orders: Math.floor(Math.random() * 40 + 15) * userMultiplier,
      }))
    : [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ].map((month) => ({
        month,
        orders: Math.floor(Math.random() * 400 + 200) * userMultiplier,
      }));

  // User distribution - always show all users with their actual percentages
  const totalUsers = 1245; // Total of all users: 650 + 450 + 145
  const userDistribution = [
    { name: 'Free Users', value: 650, color: '#3b82f6', percentage: ((650 / totalUsers) * 100).toFixed(1) },
    { name: 'Premium Users', value: 450, color: '#8b5cf6', percentage: ((450 / totalUsers) * 100).toFixed(1) },
    { name: 'Enterprise Users', value: 145, color: '#10b981', percentage: ((145 / totalUsers) * 100).toFixed(1) },
  ];

  // Filter based on user type
  const filteredUserDistribution =
    userType === 'all'
      ? userDistribution
      : userType === 'free'
      ? [userDistribution[0]]
      : userType === 'premium'
      ? [userDistribution[1]]
      : [userDistribution[2]];

  // Traffic sources
  const trafficSource = [
    { name: 'Organic', value: 42 },
    { name: 'Paid', value: 28 },
    { name: 'Social', value: 18 },
    { name: 'Referral', value: 12 },
  ];

  return {
    kpis,
    revenueData,
    orderData,
    userDistribution: filteredUserDistribution,
    trafficSource,
  };
};

// Simulate API call
export const fetchDashboardData = async (filters: DashboardFilters): Promise<DashboardData> => {
  // Simulate network delay
  await delay(1000 + Math.random() * 1000);

  // Simulate occasional errors (10% chance)
  if (Math.random() < 0.1) {
    throw new Error('Failed to fetch dashboard data. Please try again.');
  }

  return generateMockData(filters);
};

// Export data as CSV
export const exportToCSV = (data: DashboardData): void => {
  const csv: string[] = [];

  // KPIs
  csv.push('KPI Metrics');
  csv.push('Metric,Value,Change (%)');
  data.kpis.forEach((kpi) => {
    csv.push(`${kpi.title},${kpi.value},${kpi.change.toFixed(2)}`);
  });
  csv.push('');

  // Revenue Data
  csv.push('Revenue Over Time');
  csv.push('Period,Revenue');
  data.revenueData.forEach((item) => {
    csv.push(`${item.month},${item.revenue}`);
  });
  csv.push('');

  // Order Data
  csv.push('Orders Over Time');
  csv.push('Period,Orders');
  data.orderData.forEach((item) => {
    csv.push(`${item.month},${item.orders}`);
  });
  csv.push('');

  // User Distribution
  csv.push('User Distribution');
  csv.push('Type,Count');
  data.userDistribution.forEach((item) => {
    csv.push(`${item.name},${item.value}`);
  });
  csv.push('');

  // Traffic Sources
  csv.push('Traffic Sources');
  csv.push('Source,Percentage');
  data.trafficSource.forEach((item) => {
    csv.push(`${item.name},${item.value}%`);
  });

  const csvContent = csv.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `dashboard-export-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
