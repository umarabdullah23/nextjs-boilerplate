export const ROUTES = {
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  LOGOUT: '/logged-out',
};

export const PRIVATE_ROUTES = [ROUTES.DASHBOARD];

export const PUBLIC_ROUTES = [ROUTES.LOGIN, ROUTES.LOGOUT];

export const HIDDEN_ROUTES = [ROUTES.LOGOUT];
