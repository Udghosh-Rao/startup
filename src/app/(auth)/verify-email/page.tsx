'use client';

import Link from 'next/link';
import { Sparkles, MailSearch } from 'lucide-react';

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link
            href="/"
            className="font-heading mb-6 inline-flex items-center gap-2 text-2xl font-bold"
          >
            <Sparkles className="text-accent h-6 w-6" />
            <span>Mextify</span>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">
            Check your email
          </h2>
          <p className="text-muted-foreground mt-2">
            We sent you a verification link
          </p>
        </div>

        <div className="bg-card rounded-xl border p-8 text-center shadow-sm">
          <div className="bg-accent/10 text-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
            <MailSearch className="h-8 w-8" />
          </div>

          <h3 className="mb-3 text-lg font-medium">
            Verify your email address
          </h3>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            To start using Mextify, you need to verify your email. Click the
            link in the email we just sent you.
          </p>

          <Link
            href="/login"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex h-10 w-full items-center justify-center rounded-md font-medium transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
