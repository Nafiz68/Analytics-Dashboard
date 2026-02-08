# Admin Analytics Dashboard

A modern, production-ready admin analytics dashboard built with Next.js, TypeScript, and Tailwind CSS. Features real-time data visualization, dark mode, and responsive design.

##  Features

### Core Features
- ** Interactive Charts**: Revenue trends, order analytics, user distribution, and traffic sources using Recharts
- ** KPI Dashboard**: Real-time metrics with percentage changes and trend indicators
- ** Modern UI/UX**: Clean, professional design with smooth animations and transitions
- ** Fully Responsive**: Mobile-first design with collapsible sidebar
- ** Dark/Light Theme**: Seamless theme switching with persistent storage
- ** Advanced Filtering**: Date range and user type filters that update all metrics
- ** CSV Export**: Export dashboard data for offline analysis
- ** Performance Optimized**: Memoized components, lazy loading, and optimized re-renders

### Technical Highlights
- **Component Architecture**: Modular, reusable components with clear separation of concerns
- **State Management**: Zustand for efficient, minimal state management
- **Type Safety**: Full TypeScript implementation for better code quality
- **Loading States**: Skeleton loaders for better perceived performance
- **Error Handling**: Comprehensive error states with retry functionality
- **Responsive Charts**: Adaptive chart rendering for all screen sizes

##  Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **State Management**: Zustand
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Date Utilities**: date-fns

##  Project Structure

```
analytics-dashboard/
 app/                      # Next.js app directory
    layout.tsx           # Root layout with theme provider
    page.tsx             # Main dashboard page
    globals.css          # Global styles
 components/
    layout/              # Layout components
       Sidebar.tsx      # Collapsible sidebar navigation
       Header.tsx       # Top header with notifications
       DashboardLayout.tsx
    cards/               # Card components
       KPICards.tsx     # KPI metric cards
    charts/              # Chart components
       RevenueChart.tsx
       OrdersChart.tsx
       UserDistributionChart.tsx
       TrafficSourceChart.tsx
    filters/             # Filter components
       DashboardFilters.tsx
    ui/                  # Reusable UI components
       Skeleton.tsx
       ErrorState.tsx
       EmptyState.tsx
    ThemeProvider.tsx    # Theme context provider
 store/                   # Zustand stores
    dashboardStore.ts    # Dashboard data state
    themeStore.ts        # Theme state
    userStore.ts         # User & UI state
 services/                # API services
    dashboardService.ts  # Data fetching & export
 hooks/                   # Custom React hooks
    useDashboardData.ts
 types/                   # TypeScript type definitions
    index.ts
 utils/                   # Utility functions

```

##  Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd analytics-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

##  Dashboard Features

### KPI Cards
- **Total Revenue**: Displays total revenue with trend indicator
- **Total Users**: Shows user count with growth percentage
- **Orders**: Total orders with change indicator
- **Conversion Rate**: Conversion metrics with trend

### Charts
1. **Revenue Over Time**: Line chart showing revenue trends
2. **Orders Per Period**: Bar chart for order analytics
3. **User Distribution**: Pie chart showing user segmentation
4. **Traffic Sources**: Horizontal bar chart for traffic analysis

### Filters
- **Date Range**: Last 7 days, Last 30 days, Last 12 months
- **User Type**: All Users, Free, Premium, Enterprise

##  Customization

### Theming
The theme system is built with Tailwind CSS dark mode. Modify colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    }
  }
}
```

### Adding New Charts
1. Create a new component in `components/charts/`
2. Import and use in `app/page.tsx`
3. Add data type to `types/index.ts`

##  Performance Optimizations

- **Memoization**: React.memo for chart components
- **Code Splitting**: Automatic route-based splitting
- **Optimized Imports**: Tree-shaking for smaller bundle size
- **Lazy Loading**: Dynamic imports for heavy components
- **State Optimization**: Zustand for minimal re-renders

##  Security Best Practices

- Type-safe API calls with TypeScript
- Input validation on filters
- Sanitized data rendering
- No sensitive data in localStorage

##  Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

##  License

MIT License - feel free to use this project for personal or commercial purposes.

##  Author

Built with  by Your Name

##  Acknowledgments

- Next.js team for the amazing framework
- Recharts for beautiful chart components
- Tailwind CSS for utility-first styling
- Zustand for simple state management
