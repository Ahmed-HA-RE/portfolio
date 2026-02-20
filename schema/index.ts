import z from 'zod';

export const contactSchema = z.object({
  name: z
    .string({ error: 'Please enter a valid name' })
    .min(4, 'Name must be at least 4 characters long')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z.email({ error: 'Please enter a valid email address' }),
  message: z
    .string({ error: 'Please enter a message' })
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message is too long'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
});
