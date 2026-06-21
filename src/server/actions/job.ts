'use server';

import { jobSchema } from '@/lib/validations/job';

export async function createJob(companyId: string, data: unknown) {
  const parsed = jobSchema.parse(data);
  const slug = parsed.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    success: true,
    job: { id: 'mock-job-id', companyId, slug, ...parsed, status: 'DRAFT' },
  };
}

export async function updateJob(jobId: string, data: unknown) {
  const parsed = jobSchema.parse(data);
  return { success: true, job: { id: jobId, ...parsed } };
}

export async function publishJob(jobId: string) {
  return { success: true, job: { id: jobId, status: 'PUBLISHED' } };
}

export async function closeJob(jobId: string) {
  return { success: true, job: { id: jobId, status: 'CLOSED' } };
}

export async function deleteJob(jobId: string) {
  return { success: true };
}
