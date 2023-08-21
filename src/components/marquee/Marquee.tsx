import { processJellyfishInfo } from '@/utils/utils';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function FastMarquee({ data }: { data: any }) {
  const jellyFishMessage = processJellyfishInfo(data.jellyFishAmount);

  return (
    <Marquee className='h-16' speed={100}>
      <div className='mx-5'>+++</div>
      <div className='mx-5'>
        Estado del mar:{' '}
        <span className={`ml-3 font-bold ${jellyFishMessage.color}`}>
          {jellyFishMessage.translation}
        </span>
      </div>
      <div className='mx-5'>+++</div>
      <div className='mx-5'>
        Ya tenemos el{' '}
        <strong>
          <Link href='/quiz'>QUIZ disponible en la web</Link>{' '}
        </strong>{' '}
      </div>
      <div className='mx-5'>+++</div>
      <div className='mx-5'>
        ¿Quieres una página web tan chula como esta?{' '}
        <a href='mailto:manusansan22@gmail.com'>
          <strong>¡Contáctame!</strong>{' '}
        </a>
      </div>
    </Marquee>
  );
}
