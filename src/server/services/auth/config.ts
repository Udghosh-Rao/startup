import { betterAuth } from 'better-auth';
import { memoryAdapter } from './memory-adapter';

export const auth = betterAuth({
  database: memoryAdapter(),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    },
  },
  session: {
    expiresIn: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 1 day
  },
  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: false,
        defaultValue: 'CANDIDATE',
      },
    },
  },
});
