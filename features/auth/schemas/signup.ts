import { z } from 'zod';

// TODO: confirm password
// TODO: restrict username to alphanumeric

export const signUpSchema = z.object({
  username: z.string().min(3),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;