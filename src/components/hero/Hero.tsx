import NextImage from '@/components/NextImage';
import { scrollDown } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';

type HeroProps = {
  img?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonFunction?: () => void;
};

const Hero = ({
  img = '/images/hero-landscape.png',
  title = 'Título por defecto',
  description = 'Descripción por defecto',
  buttonLabel,
  buttonFunction,
}: HeroProps) => {
  return (
    <div className='container mx-auto my-12 md:my-24 w-full'>
      <div className='hero-content flex-col lg:flex-row-reverse w-full justify-between items-center gap-4'>
        <Image src={img} width='500' height='300' alt='hero img' priority />

        <div className='max-w-[700px] flex flex-col gap-4'>
          <h1 className='text-5xl md:text-6xl font-bold'>{title}</h1>
          {description && <p className='py-2 text-2xl'>{description}</p>}

          {buttonLabel && buttonFunction && (
            <button onClick={buttonFunction} className='btn btn-primary w-fit'>
              {buttonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
