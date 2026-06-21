'use server';

export async function applyToJob(
  userId: string,
  jobId: string,
  coverLetter?: string,
  resumeUrl?: string,
) {
  return {
    success: true,
    application: { id: 'mock-app-id', userId, jobId, status: 'APPLIED' },
  };
}

export async function updateApplicationStatus(
  applicationId: string,
  newStatus: string,
  changedBy: string,
  note?: string,
) {
  return {
    success: true,
    application: { id: applicationId, status: newStatus },
  };
}

export async function withdrawApplication(
  userId: string,
  applicationId: string,
) {
  return {
    success: true,
    application: { id: applicationId, status: 'WITHDRAWN' },
  };
}

export async function saveJob(userId: string, jobId: string) {
  return { success: true, saved: { userId, jobId } };
}

export async function unsaveJob(userId: string, jobId: string) {
  return { success: true };
}
