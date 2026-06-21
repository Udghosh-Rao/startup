'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  candidateProfileSchema,
  CandidateProfileInput,
} from '@/lib/validations/profile';
import { Loader2, Save } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CandidateProfileInput>({
    resolver: zodResolver(candidateProfileSchema),
    defaultValues: {
      headline: 'Senior Software Engineer',
      bio: 'Passionate about building scalable web applications and intuitive user interfaces.',
      location: 'San Francisco, CA',
      websiteUrl: 'https://udghosh.com',
      githubUrl: 'https://github.com/udghosh',
      linkedinUrl: 'https://linkedin.com/in/udghosh',
      yearsOfExperience: 5,
    },
  });

  const onSubmit = async (data: CandidateProfileInput) => {
    setIsLoading(true);
    // TODO: Implement server action or tRPC mutation here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your public profile and online presence.
        </p>
      </div>

      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 p-6 md:p-8"
        >
          <div className="space-y-4">
            <h3 className="border-b pb-2 text-lg font-medium">
              Basic Information
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium">
                  Professional Headline
                </label>
                <input
                  type="text"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="e.g. Senior Frontend Engineer"
                  {...register('headline')}
                />
                {errors.headline && (
                  <p className="text-destructive text-xs">
                    {errors.headline.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <input
                  type="text"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="e.g. San Francisco, CA"
                  {...register('location')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Years of Experience
                </label>
                <input
                  type="number"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="e.g. 5"
                  {...register('yearsOfExperience', { valueAsNumber: true })}
                />
                {errors.yearsOfExperience && (
                  <p className="text-destructive text-xs">
                    {errors.yearsOfExperience.message}
                  </p>
                )}
              </div>

              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <textarea
                  className="focus:ring-accent min-h-[100px] w-full resize-y rounded-md border bg-transparent p-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="Tell us about yourself..."
                  {...register('bio')}
                />
                {errors.bio && (
                  <p className="text-destructive text-xs">
                    {errors.bio.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="border-b pb-2 text-lg font-medium">
              Links & Socials
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Personal Website</label>
                <input
                  type="url"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="https://"
                  {...register('websiteUrl')}
                />
                {errors.websiteUrl && (
                  <p className="text-destructive text-xs">
                    {errors.websiteUrl.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">GitHub Profile</label>
                <input
                  type="url"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="https://github.com/..."
                  {...register('githubUrl')}
                />
                {errors.githubUrl && (
                  <p className="text-destructive text-xs">
                    {errors.githubUrl.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">LinkedIn Profile</label>
                <input
                  type="url"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="https://linkedin.com/in/..."
                  {...register('linkedinUrl')}
                />
                {errors.linkedinUrl && (
                  <p className="text-destructive text-xs">
                    {errors.linkedinUrl.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Twitter Profile</label>
                <input
                  type="url"
                  className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm transition-all outline-none focus:ring-2"
                  placeholder="https://twitter.com/..."
                  {...register('twitterUrl')}
                />
                {errors.twitterUrl && (
                  <p className="text-destructive text-xs">
                    {errors.twitterUrl.message}
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
