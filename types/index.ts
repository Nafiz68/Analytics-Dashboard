export interface KPIData {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface OrderData {
  month: string;
  orders: number;
}

export interface UserDistribution {
  name: string;
  value: number;
  color: string;
  percentage?: string;
  isOther?: boolean;
}

export interface TrafficSource {
  name: string;
  value: number;
}

export type DateRange = '7days' | '30days' | '12months';
export type UserType = 'all' | 'free' | 'premium' | 'enterprise';
export type Theme = 'light' | 'dark';
export type Role = 'admin' | 'manager';

export interface DashboardFilters {
  dateRange: DateRange;
  userType: UserType;
}

export interface DashboardData {
  kpis: KPIData[];
  revenueData: RevenueData[];
  orderData: OrderData[];
  userDistribution: UserDistribution[];
  trafficSource: TrafficSource[];
}

export interface User {
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Notification {
  id: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'success' | 'error';
}
