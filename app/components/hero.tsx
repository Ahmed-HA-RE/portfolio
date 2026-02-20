import { DownloadIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import Photo from './photo';
import { TypingAnimation } from './ui/typing-animation';

const socailLinks = [
  {
    name: 'GitHub',
    url: process.env.NEXT_PUBLIC_GITHUB_URL,
    icon: <FaGithub className='size-4.5 text-primary' />,
  },
  {
    name: 'LinkedIn',
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: <FaLinkedinIn className='size-4.5 text-primary' />,
  },
  {
    name: 'Instagram',
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    icon: <FaInstagram className='size-4.5 text-primary' />,
  },
  {
    name: 'WhatsApp',
    url: process.env.NEXT_PUBLIC_WHATSAPP_URL,
    icon: <FaWhatsapp className='size-4.5 text-primary' />,
  },
];

const HeroSection = () => {
  return (
    <section className='py-12'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row items-center justify-between gap-y-14'>
          {/* My Info */}
          <div className='flex flex-col items-center justify-center xl:items-start xl:justify-start xl:flex-1/2 order-2 xl:order-1'>
            <span className='text-secondary-text text-xl mb-1.5'>
              Software Developer
            </span>
            <h1 className='text-5xl xl:text-[80px] leading-16 xl:leading-22 font-semibold text-center xl:text-left'>
              Hello I&apos;m <br />
              <span className='!bg-clip-text text-transparent !bg-cover !bg-center bg-gradient-to-tl from-[#f12711] to-[#f5af19]'>
                Ahmed Haitham
              </span>
            </h1>
            <TypingAnimation
              words={[
                'Full Stack Developer',
                'Frontend Developer',
                'Backend Developer',
              ]}
              blinkCursor={true}
              pauseDelay={2000}
              loop
              className='text-4xl font-bold my-6 text-primary xl:text-left text-center'
            />
            <h3 className='text-lg xl:text-xl text-secondary-text text-center xl:text-left max-w-xl mb-9'>
              I specialize in building scalable, high-performance web
              applications, creating smooth Frontend experiences, and designing
              solid Backend systems. I focus on clean architecture, intuitive
              interfaces, and solutions that are ready for real-world use and
              growth.
            </h3>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
              <Button
                size={'lg'}
                variant={'outline'}
                className='rounded-full'
                asChild
              >
                <a href='/CV-Ahmed.pdf' download>
                  Download CV
                  <DownloadIcon className='size-5' />
                </a>
              </Button>
              {/* Social Links */}
              <div className='flex gap-6 items-center justify-center'>
                {socailLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:scale-110 transition-transform bg-transparent border border-primary rounded-full size-9 flex justify-center items-center cursor-pointer'
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* My Image */}
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
