'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }}
      className='order-1 xl:order-2 relative size-full max-w-lg mx-auto'
    >
      <div className='w-full h-full max-w-sm rounded-full overflow-hidden mix-blend-lighten absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Image
          src='/images/photo.png'
          alt='Ahmed Haitham'
          fill
          quality={100}
          className='object-contain'
        />
      </div>

      {/* Circle Affect */}
      <motion.svg
        className='w-full h-full'
        fill={'transparent'}
        viewBox={'0 0 506 506'}
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='253'
          cy='253'
          r='253'
          stroke='oklch(0.646 0.222 41.116)'
          strokeWidth='4'
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          initial={{ strokeDasharray: '24 10 0 0 ' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Photo;
