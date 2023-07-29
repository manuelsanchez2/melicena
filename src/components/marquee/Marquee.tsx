import React from 'react';
import Marquee from 'react-fast-marquee';

const FastMarquee = () => {
  return (
    <Marquee className='h-16' speed={120}>
      <div className='mx-5'>
        <strong>FIESTAS DE MELICENA: A partir del jueves 17 de agosto</strong>
        {'      '}
      </div>
      <div className='mx-5'>+++</div>
      <div className='mx-5'>¿Tienes ya tu disfraz preparado?</div>
      <div className='mx-5'>+++</div>
      <div className='mx-5'>¿Quién ganará la rifa?</div>
      <div className='mx-5'>+++</div>
      <div className='mx-5'>
        <strong>Pronto tenemos QUIZ disponible en la web</strong>{' '}
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
};

export default FastMarquee;