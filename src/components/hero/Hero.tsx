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
  linkLabel?: string;
  linkUrl?: string;
};

const Hero = ({
  img = '/images/hero-landscape.png',
  title = 'Título por defecto',
  description = 'Descripción por defecto',
  buttonLabel,
  buttonFunction,
  linkLabel,
  linkUrl,
}: HeroProps) => {
  return (
    <div className='container mx-auto my-12 md:my-24 w-full'>
      <div className='hero-content max-w-full flex-col lg:flex-row-reverse w-full justify-between items-center gap-4'>
        <Image src={img} width='500' height='300' alt='hero img' priority />

        <div className='max-w-[700px] flex flex-col gap-4'>
          <h1 className='text-4xl md:text-6xl font-bold'>{title}</h1>
          {description && <p className='py-2 text-2xl'>{description}</p>}

          {buttonLabel && buttonFunction && (
            <button onClick={buttonFunction} className='btn btn-primary w-fit'>
              {buttonLabel}
            </button>
          )}

          {linkLabel && linkUrl && (
            <a
              target='_blank'
              rel='nofollow noopener'
              href={linkUrl}
              className='btn btn-primary w-fit'
            >
              {linkLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
