import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Notification } from '@/types';

interface UserState {
  user: User | null;
  notifications: Notification[];
  sidebarCollapsed: boolean;
  setUser: (user: User) => void;
  setNotifications: (notifications: Notification[]) => void;
  markNotificationAsRead: (id: string) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'admin',
      },
      notifications: [
        {
          id: '1',
          message: 'New user registered',
          time: '5 min ago',
          read: false,
          type: 'info',
        },
        {
          id: '2',
          message: 'Payment received',
          time: '1 hour ago',
          read: false,
          type: 'success',
        },
        {
          id: '3',
          message: 'Server load high',
          time: '2 hours ago',
          read: true,
          type: 'warning',
        },
      ],
      sidebarCollapsed: false,
      setUser: (user) => set({ user }),
      setNotifications: (notifications) => set({ notifications }),
      markNotificationAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((notif) =>
            notif.id === id ? { ...notif, read: true } : notif
          ),
        })),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
    }),
    {
      name: 'user-storage',
    }
  )
);
