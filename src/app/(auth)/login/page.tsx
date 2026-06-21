'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sparkles, Loader2, Mail } from 'lucide-react';

import { loginSchema, LoginInput } from '@/lib/validations/auth';
import { signIn } from '@/lib/auth-client';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);
    setError(null);

    try {
      const { error: signInError } = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (signInError) {
        setError(signInError.message || 'Invalid credentials');
        return;
      }

      // On success, router.push handles redirect or middleware does
      router.push('/dashboard'); // Assuming a generic redirect that routes based on role
      router.refresh();
    } catch {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await signIn.social({
      provider: 'google',
      callbackURL: '/dashboard',
    });
    // Loading state remains true as the redirect happens
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
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="text-muted-foreground mt-2">
            Sign in to your account to continue
          </p>
        </div>

        <div className="bg-card rounded-xl border p-6 shadow-sm">
          {error && (
            <div className="bg-destructive/10 text-destructive mb-6 rounded-md p-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
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

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-accent text-xs hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-destructive text-xs">
                  {errors.password.message}
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
                'Sign In'
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex h-10 w-full items-center justify-center gap-2 rounded-md font-medium transition-colors"
          >
            <Mail className="h-4 w-4" />
            Google
          </button>
        </div>

        <p className="text-muted-foreground mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            className="text-accent font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
