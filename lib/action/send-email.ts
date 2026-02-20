'use server';
import { contactSchema } from '@/schema';
import { ContactFormData } from '@/types';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.RESEND_DOMAIN;

const sendEmail = async (data: ContactFormData) => {
  try {
    const validatedData = contactSchema.safeParse(data);

    if (!validatedData.success) throw new Error('Invalid Data entered.');

    const { name, email, message, services } = validatedData.data;

    await resend.emails.send({
      from: `Portfolio <contact@${domain}>`,
      to: 'ah607k@gmail.com',
      replyTo: email,
      subject: 'New Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nServices: ${services.join(', ')}`,
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    return {
      success: false,
      message:
        (error as Error).message ||
        'Failed to send email. Please try again later.',
    };
  }
};

export default sendEmail;
