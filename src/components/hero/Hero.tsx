import NextImage from '@/components/NextImage';
import { scrollDown } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='container mx-auto my-12 md:my-24 w-full'>
      <div className='hero-content flex-col lg:flex-row-reverse w-full justify-between items-center gap-4'>
        <Image
          src='/images/hero-landscape.png'
          width='500'
          height='300'
          alt='hero img'
          priority
        />

        <div className='max-w-[700px] flex flex-col gap-4'>
          <h1 className='text-5xl md:text-6xl font-bold'>
            Te damos la bienvenida a Melicena
          </h1>
          <p className='py-2 text-2xl'>
            Un paraíso terrenal entre Almería y Granada
          </p>
          <button
            onClick={() => scrollDown(1000)}
            className='btn btn-primary w-fit'
          >
            Descubrir más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
