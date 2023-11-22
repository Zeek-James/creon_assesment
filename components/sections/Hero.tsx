import React from 'react';

import imag3 from '@/assets/main-video-gradient.195ff22ca768f7dc4ce8 1 (3).png';
const Hero = () => {
  return (
    <div
      className="shadow-[inset_1px_-102px_229px_8px_#1a202c]
    min-h-[65vh] md:min-h-screen bg-[url('https://res.cloudinary.com/dnir0cslk/image/upload/v1700497529/main-video-gradient.195ff22ca768f7dc4ce8_1_3_vdg1nn.png')] bg-no-repeat bg-cover bg-center grid grid-cols-1 gap-8  text-[#fff]"
    >
      <section className='hero h-full'></section>
      <section className=' flex flex-col gap-4  absolute top-[45vh] md:top-96 p-6 md:p-16 z-10 shadow-2xl backdrop-blur-sm bg-black/30 h-fit'>
        <h4 className='text-4xl sm:text-2xl md:text-[40px] lg:text-5xl font-bold capitalize max-w-[800px] text-white'>
          The world&apos;s first platform for Tokenizing AI blockchain projects
        </h4>
        <p className='font-medium herotext border-y text-base md:text-xl lg:text-2xl w-fit'>
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </p>
      </section>
    </div>
  );
};

export default Hero;
