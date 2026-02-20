'use client';
import 'swiper/css';
import { motion } from 'motion/react';
import { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import projects from '@/data/projects.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { FaGithub } from 'react-icons/fa';
import { Swiper as SwiperClass } from 'swiper/types';
import SwiperButtons from './swiper-btns';

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <section className='py-12'>
      <div className='container'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='mb-12 space-y-4 text-center max-md:px-4 sm:mb-16 lg:mb-24'
        >
          <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl'>
            Latest Projects
          </h2>
        </motion.div>
        <motion.div
          className='flex flex-col lg:flex-row lg:gap-[30px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: 'easeInOut' }}
        >
          {/* Left Col */}
          <div className='lg:flex-1 flex flex-col lg:justify-between order-2 lg:order-1 gap-6'>
            {/* Outline Number */}
            <div className='text-7xl md:text-8xl text-outline text-transparent font-extrabold'>
              {project.num}
            </div>
            {/* Project Title */}
            <h2 className='text-3xl lg:text-4xl font-bold'>
              {project.title} - {project.type}
            </h2>
            {/* Project Description */}
            <p className='text-base max-w-2xl text-secondary-text leading-relaxed'>
              {project.description}
            </p>
            {/* Project stack */}
            <div className='flex flex-wrap gap-6 text-primary'>
              {project.stack.join(', ')}
            </div>
            <Separator className='bg-white/50' />
            {/* Project Links */}
            <div className='flex flex-row gap-4'>
              <a href={project.live} target='_blank' rel='noopener noreferrer'>
                <TooltipProvider>
                  {/* External Link */}
                  <Tooltip>
                    <TooltipTrigger className='bg-[#27272c] cursor-pointer w-15 h-15 rounded-full flex items-center justify-center group'>
                      <BsArrowUpRight className='text-primary-text cursor-pointer size-6.5 group-hover:text-primary transition-colors duration-300' />
                    </TooltipTrigger>
                    <TooltipContent>View Project</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <TooltipProvider>
                  {/* Github Link */}
                  <Tooltip>
                    <TooltipTrigger className='bg-[#27272c] cursor-pointer w-15 h-15 rounded-full flex items-center justify-center group'>
                      <FaGithub className='text-primary-text cursor-pointer size-6.5 group-hover:text-primary transition-colors duration-300' />
                    </TooltipTrigger>
                    <TooltipContent>View on GitHub</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            </div>
          </div>
          {/* Right Col */}
          <div className='lg:w-[50%] lg:order-2 mb-6 lg:mb-0 lg:h-[580px]'>
            <Swiper
              onSlideChange={handleSlideChange}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[480px] bg-pink-50/20 relative flex items-center justify-center'>
                    {/* overlay */}
                    <div className='bg-black/10 absolute inset-0 z-20'></div>
                    {/* project image */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover object-center'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Swiper Buttons */}
              <SwiperButtons />
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
