'use server';

import { candidateProfileSchema } from '@/lib/validations/profile';
import { employerProfileSchema } from '@/lib/validations/profile';

export async function updateCandidateProfile(userId: string, data: unknown) {
  const parsed = candidateProfileSchema.parse(data);
  return { success: true, profile: { userId, ...parsed } };
}

export async function updateEmployerProfile(userId: string, data: unknown) {
  const parsed = employerProfileSchema.parse(data);
  return { success: true, profile: { userId, ...parsed } };
}
