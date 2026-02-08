'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  FileText,
  HelpCircle,
  ChevronLeft,
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: ShoppingCart, label: 'Orders', href: '/orders' },
  { icon: FileText, label: 'Reports', href: '/reports' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUserStore();

  return (
    <>
      {/* Overlay for mobile */}
      {!sidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 shadow-sm
          transition-all duration-300 ease-in-out
          flex-shrink-0
          ${sidebarCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-20' : 'translate-x-0 w-64'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
            {!sidebarCollapsed && (
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                AdminPro
              </h1>
            )}
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ChevronLeft
                className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform ${
                  sidebarCollapsed ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-3 py-3 rounded-lg transition-all
                        ${
                          isActive
                            ? 'bg-slate-900 dark:bg-blue-900/20 text-white dark:text-blue-400 shadow-sm'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }
                        ${sidebarCollapsed ? 'justify-center' : ''}
                      `}
                      title={sidebarCollapsed ? item.label : ''}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!sidebarCollapsed && (
                        <span className="font-medium">{item.label}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User section at bottom */}
          {!sidebarCollapsed && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                © 2026 AdminPro
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
