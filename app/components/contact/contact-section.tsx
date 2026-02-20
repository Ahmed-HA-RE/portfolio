'use client';

import { PhoneIcon, MailIcon } from 'lucide-react';
import ContactForm from '@/app/components/contact/contact-form';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { email, phoneNumber } from '@/lib/constants';
import { motion } from 'motion/react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='py-12'>
      <div className='container'>
        <div className='grid gap-9 lg:grid-cols-2'>
          {/* Left Side - Form and cards */}
          <div className='flex flex-col gap-6'>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className='order-2 lg:order-1'
            >
              <Card className='bg-[#27272c] border-0 rounded-sm py-8'>
                <CardHeader>
                  <CardTitle className='text-4xl text-primary'>
                    Contact Me
                  </CardTitle>
                </CardHeader>
                <CardContent className='px-6'>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5, ease: 'easeInOut' }}
              className='grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2'
            >
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                target='_blank'
                className='bg-[#27272c] flex flex-col items-center gap-4 rounded-xl p-6 transition-all duration-300 border border-transparent hover:border-primary/20 group'
              >
                <Avatar className='size-12 shrink-0'>
                  <AvatarFallback className='bg-primary/10 [&>svg]:size-6 group-hover:bg-primary/20 transition-colors'>
                    <PhoneIcon className='text-primary' />
                  </AvatarFallback>
                </Avatar>
                <div className='text-center'>
                  <h3 className='text-base font-semibold text-primary mb-1'>
                    Phone
                  </h3>
                  <p className='text-secondary-text text-sm'>{phoneNumber}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                target='_blank'
                className='bg-[#27272c] flex flex-col items-center gap-4 rounded-xl p-6 transition-all duration-300 border border-transparent hover:border-primary/20 group'
              >
                <Avatar className='size-12 shrink-0'>
                  <AvatarFallback className='bg-primary/10 [&>svg]:size-6 group-hover:bg-primary/20 transition-colors'>
                    <MailIcon className='text-primary' />
                  </AvatarFallback>
                </Avatar>
                <div className='text-center'>
                  <h3 className='text-base font-semibold text-primary mb-1'>
                    Email
                  </h3>
                  <p className='text-secondary-text text-sm break-all'>
                    {email}
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Side - Image and Contact Info */}
          <div className='flex flex-col gap-6'>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2, ease: 'easeInOut' }}
              className='relative w-full h-[500px] md:h-[550px] lg:h-[600px] rounded-xl overflow-hidden'
            >
              <Image
                src={'/contact.svg'}
                alt='Contact-me illustration'
                fill
                className='object-contain'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
