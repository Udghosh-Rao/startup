'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  employerProfileSchema,
  EmployerProfileInput,
} from '@/lib/validations/profile';
import { Loader2, Save } from 'lucide-react';
import { useState } from 'react';

export default function CompanyProfilePage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployerProfileInput>({
    resolver: zodResolver(employerProfileSchema),
    defaultValues: {
      companyName: 'Acme Corp',
      companyWebsite: 'https://acme.inc',
      industry: 'Technology',
      companySize: '50-200',
      location: 'San Francisco, CA',
      description:
        'We build innovative software solutions for the modern enterprise.',
    },
  });

  const onSubmit = async (data: EmployerProfileInput) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Company Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your public company profile shown to candidates.
        </p>
      </div>

      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 p-6 md:p-8"
        >
          <div className="space-y-4">
            <h3 className="border-b pb-2 text-lg font-medium">
              Company Information
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Name</label>
                <input
                  type="text"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  {...register('companyName')}
                />
                {errors.companyName && (
                  <p className="text-destructive text-xs">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Website</label>
                <input
                  type="url"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  {...register('companyWebsite')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Industry</label>
                <select
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  {...register('industry')}
                >
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Company Size</label>
                <select
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  {...register('companySize')}
                >
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="50-200">50-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium">About the Company</label>
                <textarea
                  className="focus:ring-accent min-h-[120px] w-full resize-y rounded-md border bg-transparent p-3 text-sm outline-none focus:ring-2"
                  {...register('description')}
                />
                {errors.description && (
                  <p className="text-destructive text-xs">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end border-t pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-foreground text-background hover:bg-foreground/90 flex h-10 items-center justify-center gap-2 rounded-md px-6 font-medium transition-colors"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
