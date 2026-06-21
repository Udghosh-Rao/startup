import * as z from 'zod';

export const candidateProfileSchema = z.object({
  headline: z
    .string()
    .max(100, 'Headline must be 100 characters or less.')
    .optional(),
  bio: z.string().max(500, 'Bio must be 500 characters or less.').optional(),
  location: z.string().optional(),
  websiteUrl: z
    .string()
    .url('Must be a valid URL.')
    .optional()
    .or(z.literal('')),
  githubUrl: z
    .string()
    .url('Must be a valid URL.')
    .optional()
    .or(z.literal('')),
  linkedinUrl: z
    .string()
    .url('Must be a valid URL.')
    .optional()
    .or(z.literal('')),
  portfolioUrl: z
    .string()
    .url('Must be a valid URL.')
    .optional()
    .or(z.literal('')),
  twitterUrl: z
    .string()
    .url('Must be a valid URL.')
    .optional()
    .or(z.literal('')),
  yearsOfExperience: z.number().min(0).optional(),
});

export type CandidateProfileInput = z.infer<typeof candidateProfileSchema>;

export const employerProfileSchema = z.object({
  companyName: z.string().min(2, 'Company name is required.'),
  companyWebsite: z
    .string()
    .url('Must be a valid URL.')
    .optional()
    .or(z.literal('')),
  industry: z.string().optional(),
  companySize: z.string().optional(),
  location: z.string().optional(),
  description: z.string().max(1000, 'Description is too long.').optional(),
});

export type EmployerProfileInput = z.infer<typeof employerProfileSchema>;
