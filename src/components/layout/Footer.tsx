import React from 'react';

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 mt-12 bg-base-200 text-base-content rounded'>
      <div className='grid grid-flow-col gap-4'>
        <a className='link link-hover'>Inicio</a>
        <a className='link link-hover'>Galería</a>
        <a className='link link-hover'>Contacto</a>
      </div>
      <div>
        <div className='grid grid-flow-col gap-4'>
          <a
            rel='nofollow noopener'
            target='_blank'
            href='https://www.facebook.com/groups/919710824783138'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <p>
          Melicena Web © 2023 - Hecha con 💜 por{' '}
          <a
            target='_blank'
            rel='nofollow noopener'
            href='https://www.manuelsanchezweb.com/'
          >
            manuelsanchezweb
          </a>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
