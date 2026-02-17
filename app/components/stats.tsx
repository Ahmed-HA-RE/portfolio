'use client';
import { NumberTicker } from './ui/number-ticker';

const stats = [
  {
    title: 'Years of Experience',
    value: 1.5,
  },
  {
    title: 'Projects Completed',
    value: 25,
  },
  {
    title: 'Technologies Mastered',
    value: 9,
  },
  {
    title: 'Code Commits',
    value: 500,
  },
];

const Stats = () => {
  return (
    <section className='pt-6 pb-12 md:pt-12'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between max-w-[80vw] xl:max-w-none gap-6 gap-y-10 mx-auto'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='flex flex-col xl:flex-row items-center justify-center gap-4'
            >
              <div className='flex items-center justify-center'>
                <NumberTicker
                  startValue={0}
                  delay={1}
                  value={stat.value}
                  decimalPlaces={Number(stat.value.toString().includes('.'))}
                  className='text-5xl xl:text-6xl font-extrabold text-primary-text'
                />
                <span className='text-5xl xl:text-6xl font-extrabold text-primary-text'>
                  +
                </span>
              </div>

              <p className='text-secondary-text text-base xl:text-lg xl:max-w-[100px] leading-snug'>
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
