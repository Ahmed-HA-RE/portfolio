'use client';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import Link from 'next/link';
import { useState } from 'react';
import { mobileNavigationData } from '@/lib/constants';

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className='cursor-pointer'>
          <HiMiniBars3BottomRight className='size-8 text-primary-text' />
        </SheetTrigger>
        <SheetContent
          side='right'
          className='bg-background data-[side=right]:border-0 data-[side=right]:sm:max-w-md'
        >
          <SheetHeader className='text-center mt-32 mb-25 flex items-center justify-center'>
            <Link onClick={() => setOpen(!open)} href='/'>
              <SheetTitle className='text-4xl pt-1.5 text-primary-text'>
                Ahmed<span className='text-primary'>.</span>
              </SheetTitle>
            </Link>
          </SheetHeader>

          <div className='flex flex-col items-center text-center text-xl gap-6 p-6 h-1'>
            {mobileNavigationData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 px-4 rounded-md transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-primary-text hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
