import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const userRouter = router({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    return {
      id: ctx.session.user.id,
      name: ctx.session.user.name,
      email: ctx.session.user.email,
      role: 'CANDIDATE',
      candidateProfile: {
        headline: 'Frontend Engineer',
        bio: 'Mock user profile',
      },
      employerProfile: null,
    };
  }),
});
