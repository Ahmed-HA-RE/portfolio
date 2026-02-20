import { contactSchema } from '@/schema';
import z from 'zod';

export type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

export type ContactFormData = z.infer<typeof contactSchema>;
