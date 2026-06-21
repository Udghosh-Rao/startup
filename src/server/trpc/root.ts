import { router } from './trpc';
import { userRouter } from './routers/user';

export const appRouter = router({
  user: userRouter,
  // Add more routers here as they are created
});

export type AppRouter = typeof appRouter;
