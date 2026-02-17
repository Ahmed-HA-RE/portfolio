import { DownloadIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import Photo from './photo';

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
            <h1 className='text-5xl xl:text-[80px] leading-16 xl:leading-22 font-semibold mb-6 text-center xl:text-left'>
              Hello I&apos;m <br />
              <span className='!bg-clip-text text-transparent !bg-cover !bg-center bg-gradient-to-tl from-[#f12711] to-[#f5af19]'>
                Ahmed Haitham
              </span>
            </h1>
            <h3 className='text-lg xl:text-xl text-secondary-text text-center xl:text-left max-w-xl mb-9'>
              Full-Stack developer specializing in building scalable, high
              performance web applications using modern technologies. I focus on
              clean architecture, seamless user experiences, and production
              ready solutions that grow with real business needs.
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
