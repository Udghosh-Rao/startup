import * as z from 'zod';

export const jobSchema = z.object({
  title: z.string().min(3, 'Job title is required.'),
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters.'),
  department: z.string().optional(),
  location: z.string().min(2, 'Location is required.'),
  type: z.enum([
    'FULL_TIME',
    'PART_TIME',
    'CONTRACT',
    'INTERNSHIP',
    'FREELANCE',
  ]),
  workMode: z.enum(['REMOTE', 'HYBRID', 'ONSITE']),
  experienceLevel: z.enum([
    'ENTRY',
    'JUNIOR',
    'MID',
    'SENIOR',
    'LEAD',
    'EXECUTIVE',
  ]),
  salaryMin: z.number().min(0).optional(),
  salaryMax: z.number().min(0).optional(),
  currency: z.string().default('USD'),
  requirements: z.string().optional(),
  responsibilities: z.string().optional(),
  skills: z
    .array(z.string())
    .min(1, 'At least one skill is required.')
    .optional(),
});

export type JobInput = z.infer<typeof jobSchema>;

export const jobApplicationSchema = z.object({
  coverLetter: z.string().max(2000).optional(),
  resumeId: z.string().min(1, 'Please select a resume to apply.'),
});

export type JobApplicationInput = z.infer<typeof jobApplicationSchema>;
