'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Logo } from '@/components/logo';

export default function MotivationPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <Card className="mx-auto w-full max-w-lg">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">
              One Last Step!
            </CardTitle>
            <CardDescription className="text-base">
              What is your primary reason for wanting to be more productive?
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Textarea
            placeholder="e.g., To finish my projects, learn a new skill, have more free time..."
            className="min-h-[120px] resize-none"
          />
          <Button asChild className="w-full">
            <Link href="/dashboard">Continue to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
