import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <Card className="m-5 max-w-[50%] mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome to the App</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-4">
        <Button asChild variant="default">
          <Link href="/dashboard">Go to Dashboard (Private)</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Go to Login (Public)</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
