'use client';

import { usePathname, useRouter } from 'next/navigation';
import { PRIVATE_ROUTES, PUBLIC_ROUTES, ROUTES } from '@/constants/routes';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/auth';

export default function RoutesAuth() {
  const router = useRouter();
  const path = usePathname();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated && PRIVATE_ROUTES.includes(path))
      router.push(ROUTES.LOGOUT);

    if (isAuthenticated && PUBLIC_ROUTES.includes(path))
      router.push(ROUTES.DASHBOARD);
  }, [isAuthenticated, path, router]);

  return null;
}
