'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Your message has been sent successfully!');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-amber-50 to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/patterns/diamond-pattern.svg')] opacity-10"></div>
        </div>
        <div className="text-center relative z-20 px-4">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-700">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register('name')}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email')}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  {...register('subject')}
                  className={errors.subject ? 'border-red-500' : ''}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about how we can help..."
                  {...register('message')}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our jewelry or need assistance with an order? 
                Our team is here to help you with any inquiries you may have.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-700">
                    <p>123 Jewelry Street</p>
                    <p>Cairo, 11511</p>
                    <p>Egypt</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-700">
                    <a href="tel:+201234567890" className="hover:text-amber-600 transition-colors">
                      +20 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-700">
                    <a href="mailto:info@terra-jewelry.com" className="hover:text-amber-600 transition-colors">
                      info@terra-jewelry.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
              <dl className="space-y-2">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <dt className="text-gray-600">{item.day}</dt>
                    <dd className="text-gray-900 font-medium">{item.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64 mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389533586!2d31.34085867759107!3d30.05961837024964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
