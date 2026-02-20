import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SERVER_URL } from '@/lib/constants';
import Header from '@/app/components/header';
import PageTransition from './components/page-transition';
import StairEffect from './components/stair-effect';
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ahmed Haitham's Portfolio",
    default: "Ahmed Haitham's Portfolio",
  },
  description:
    'Full-Stack web developer portfolio. Explore my projects, skills, and experience building modern, responsive web applications.',
  openGraph: {
    title: "Ahmed Haitham's Portfolio",
    description:
      'Full-Stack web developer portfolio. Explore my projects, skills, and experience building modern, responsive web applications.',
    url: SERVER_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={jetBrains.variable}>
      <body>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <StairEffect />
          <PageTransition />
          <main className='flex-grow'>{children}</main>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
