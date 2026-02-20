'use client';

import { SendIcon } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Checkbox } from '@/app/components/ui/checkbox';
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldError,
} from '@/app/components/ui/field';
import { services } from '@/lib/constants';
import { Spinner } from '../ui/spinner';
import sendEmail from '@/lib/action/send-email';
import toast from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/schema';
import { ContactFormData } from '@/types';

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      services: [],
    },
    mode: 'onSubmit',
  });

  const isPending = form.formState.isSubmitting;

  const onSuccess = async (data: ContactFormData) => {
    const res = await sendEmail(data);

    if (!res.success) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message, { duration: 4000 });
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSuccess)}>
      <FieldGroup>
        {/* Name + Email */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Controller
            name='name'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  id={field.name}
                  placeholder='Enter your name'
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name='email'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  id={field.name}
                  placeholder='Enter your email'
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
        {/* Message */}
        <Controller
          name='message'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>
              <Textarea
                id={field.name}
                placeholder='Enter your message'
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Services */}
        <Controller
          name='services'
          control={form.control}
          render={({ field, fieldState }) => (
            <FieldSet>
              <FieldLegend className='text-sm font-medium text-primary-text'>
                Select Services
              </FieldLegend>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {services.map((service, index) => (
                  <Field
                    key={index}
                    orientation='horizontal'
                    data-invalid={fieldState.invalid}
                  >
                    <Checkbox
                      id={`form-rhf-checkbox-${service}`}
                      name={field.name}
                      aria-invalid={fieldState.invalid}
                      checked={field.value.includes(service)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, service]
                          : field.value.filter((value) => value !== service);
                        field.onChange(newValue);
                      }}
                    />
                    <FieldLabel
                      htmlFor={`form-rhf-checkbox-${service}`}
                      className='font-normal'
                    >
                      {service}
                    </FieldLabel>
                  </Field>
                ))}
              </div>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </FieldSet>
          )}
        />
        <Button
          size={'default'}
          className='self-start text-sm min-'
          type='submit'
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Spinner className='size-5 text-primary-text' />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <SendIcon className='size-4' />
            </>
          )}
        </Button>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
