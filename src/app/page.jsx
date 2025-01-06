'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth';
import { useIsClient } from '@/hooks/useIsClient';

export default function Home() {
  const isClient = useIsClient();
  const { isAuthenticated, login, logout } = useAuthStore();

  const handleAuthChange = (checked) => {
    if (checked) {
      login();
    } else {
      logout();
    }
  };

  return (
    <Card className="m-5 max-w-[50%] mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome to the App</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {isClient && (
          <div className="flex items-center space-x-2">
            <Switch
              id="auth-mode"
              checked={isAuthenticated}
              onCheckedChange={handleAuthChange}
            />
            <label htmlFor="auth-mode">
              {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
            </label>
          </div>
        )}
        <div className="flex flex-row gap-4">
          <Button asChild variant="default">
            <Link href="/dashboard">Go to Dashboard (Private)</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login">Go to Login (Public)</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
