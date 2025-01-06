import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      preferences: {
        theme: 'light',
        language: 'en',
      },
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
      updatePreferences: (newPreferences) =>
        set((state) => ({
          preferences: { ...state.preferences, ...newPreferences },
        })),
    }),
    {
      name: 'user-storage',
    },
  ),
);
