export const APP_CONFIG = {
  name: 'Next.js Boilerplate',
  description: 'A production-ready Next.js boilerplate',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
};

export const META = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  keywords: ['nextjs', 'react', 'javascript', 'typescript', 'tailwindcss'],
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
  user: {
    profile: '/user/profile',
    settings: '/user/settings',
  },
};

export const STORAGE_KEYS = {
  theme: 'theme',
  token: 'token',
  user: 'user',
};

export * from './routes';
