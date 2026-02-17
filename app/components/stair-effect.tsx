'use client';

import { AnimatePresence, motion, Variants } from 'motion/react';
import { usePathname } from 'next/navigation';

const animationVariants: Variants = {
  initial: { top: '0%' },
  animate: { top: '100%' },
  exit: { top: '0%' },
};

// Calculate the stairs delay based on the index
const calculateStairsDelay = (index: number) => {
  const totalStairs = 6;
  return totalStairs - index - 1;
};

const StairEffect = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <div className='flex fixed inset-0 pointer-events-none  z-40'>
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className='h-full w-full relative bg-primary'
              variants={animationVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: calculateStairsDelay(index) * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairEffect;
