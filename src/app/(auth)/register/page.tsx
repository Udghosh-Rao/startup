'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sparkles, Loader2, Mail, Briefcase, User } from 'lucide-react';
import { cn } from '@/lib/utils';

import { registerSchema, RegisterInput } from '@/lib/validations/auth';
import { signUp, signIn } from '@/lib/auth-client';

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'CANDIDATE',
    },
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);
    setError(null);

    try {
      const { error: signUpError } = await signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        // @ts-expect-error better-auth additionalFields role is set at signup
        role: data.role,
      });

      if (signUpError) {
        setError(signUpError.message || 'Failed to create account');
        return;
      }

      router.push(data.role === 'CANDIDATE' ? '/candidate' : '/employer');
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
      callbackURL: selectedRole === 'CANDIDATE' ? '/candidate' : '/employer',
    });
  };

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
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
            Create an account
          </h2>
          <p className="text-muted-foreground mt-2">
            Join the next generation career operating system
          </p>
        </div>

        <div className="bg-card rounded-xl border p-6 shadow-sm">
          {error && (
            <div className="bg-destructive/10 text-destructive mb-6 rounded-md p-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setValue('role', 'CANDIDATE')}
                className={cn(
                  'flex flex-col items-center justify-center rounded-lg border p-4 transition-all',
                  selectedRole === 'CANDIDATE'
                    ? 'border-accent bg-accent/5 text-accent'
                    : 'border-border hover:border-accent/50 text-muted-foreground',
                )}
              >
                <User className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">
                  I&apos;m a Candidate
                </span>
              </button>
              <button
                type="button"
                onClick={() => setValue('role', 'EMPLOYER')}
                className={cn(
                  'flex flex-col items-center justify-center rounded-lg border p-4 transition-all',
                  selectedRole === 'EMPLOYER'
                    ? 'border-accent bg-accent/5 text-accent'
                    : 'border-border hover:border-accent/50 text-muted-foreground',
                )}
              >
                <Briefcase className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">I&apos;m Hiring</span>
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                placeholder="John Doe"
                {...register('name')}
              />
              {errors.name && (
                <p className="text-destructive text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

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
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
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
                'Create Account'
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
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-accent font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
