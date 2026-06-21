'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sparkles, Loader2, ArrowLeft, MailCheck } from 'lucide-react';

import {
  forgotPasswordSchema,
  ForgotPasswordInput,
} from '@/lib/validations/auth';
import { authClient } from '@/lib/auth-client';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    setIsLoading(true);
    setError(null);

    try {
      // @ts-expect-error better-auth types may not expose forgetPassword directly
      const { error: resetError } = await authClient.forgetPassword({
        email: data.email,
        redirectTo: '/reset-password',
      });

      if (resetError) {
        setError(resetError.message || 'Failed to send reset email');
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

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
          <h2 className="text-3xl font-bold tracking-tight">Reset password</h2>
          <p className="text-muted-foreground mt-2">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>
        </div>

        <div className="bg-card rounded-xl border p-6 shadow-sm">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="bg-accent/10 text-accent mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <MailCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Check your email</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                We&apos;ve sent a password reset link to your email address.
                Please check your inbox.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-accent text-sm font-medium hover:underline"
              >
                Try another email
              </button>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-destructive/10 text-destructive mb-6 rounded-md p-3 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                    placeholder="name@example.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-foreground text-background hover:bg-foreground/90 mt-6 flex h-10 w-full items-center justify-center gap-2 rounded-md font-medium transition-colors"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Send reset link'
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="text-muted-foreground mt-4 text-center text-sm">
          <Link
            href="/login"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
