import React from 'react';

const ContactSection = () => {
  return (
    <section className='my-12 py-20 lg:py-[120px] overflow-hidden relative z-10 container mx-auto p-4'>
      <div className='container'>
        <div className='flex flex-wrap lg:justify-between -mx-4'>
          <div className='w-full lg:w-1/2 xl:w-6/12 px-4 mb-12'>
            <div className='max-w-[570px] mb-12 lg:mb-0'>
              <span className='block mb-4 text-base font-semibold'>
                ¿Sugerencias?
              </span>
              <h2 className='mb-6 uppercase text-3xl md:text-6xl font-bold'>
                ¡Contáctanos!
              </h2>
              <p className='text-base text-body-color leading-relaxed mb-9'>
                Queremos mejorar la experiencia de la página, así que si tienes
                alguna duda o sugerencia, no dudes en contactarnos.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 xl:w-5/12 px-4'>
            <div className='bg-white relative rounded-lg p-8 sm:p-12 shadow-lg'>
              <form action='https://formspree.io/f/mayaebzj' method='POST'>
                <div className='mb-6'>
                  <input
                    required
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Francisco Manuel Sabio García...'
                    className='
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  '
                  />
                </div>
                <div className='mb-6'>
                  <input
                    required
                    name='email'
                    id='email'
                    type='email'
                    placeholder='francis@hotmail.es'
                    className='
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  '
                  />
                </div>
                <div className='mb-6'>
                  <textarea
                    name='message'
                    id='message'
                    rows={6}
                    required
                    placeholder='¿Podéis poner una foto de las escaleras mecánicas que van a la torre?'
                    className='
                  w-full
                  rounded
                  py-3
                  px-[14px]
                  text-body-color text-base
                  border border-[f0f0f0]
                  resize-none
                  outline-none
                  focus-visible:shadow-none
                  focus:border-primary
                  '
                  ></textarea>
                </div>
                <input
                  type='hidden'
                  name='subject'
                  id='subject'
                  value='melicena'
                />
                <div>
                  <button
                    type='submit'
                    className='
                  w-full
                  text-white
                  btn-primary
                  rounded
                  border border-primary
                  p-3
                  transition
                  hover:bg-opacity-90
                  '
                  >
                    Enviar
                  </button>
                </div>
              </form>
              <AbsoluteElements />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

export const AbsoluteElements = () => {
  return (
    <div>
      <span className='absolute -top-10 -right-9 z-[-1]'>
        <svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
        </svg>
      </span>
      <span className='absolute -right-10 top-[90px] z-[-1]'>
        <svg
          width='34'
          height='134'
          viewBox='0 0 34 134'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='31.9993'
            cy='132'
            r='1.66667'
            transform='rotate(180 31.9993 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 31.9993 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 31.9993 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='88'
            r='1.66667'
            transform='rotate(180 31.9993 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 31.9993 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='45'
            r='1.66667'
            transform='rotate(180 31.9993 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='16'
            r='1.66667'
            transform='rotate(180 31.9993 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='59'
            r='1.66667'
            transform='rotate(180 31.9993 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 31.9993 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 31.9993 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='132'
            r='1.66667'
            transform='rotate(180 17.3333 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 17.3333 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 17.3333 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='88'
            r='1.66667'
            transform='rotate(180 17.3333 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 17.3333 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='45'
            r='1.66667'
            transform='rotate(180 17.3333 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='16'
            r='1.66667'
            transform='rotate(180 17.3333 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='59'
            r='1.66667'
            transform='rotate(180 17.3333 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 17.3333 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 17.3333 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='132'
            r='1.66667'
            transform='rotate(180 2.66536 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 2.66536 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 2.66536 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='88'
            r='1.66667'
            transform='rotate(180 2.66536 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 2.66536 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='45'
            r='1.66667'
            transform='rotate(180 2.66536 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='16'
            r='1.66667'
            transform='rotate(180 2.66536 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='59'
            r='1.66667'
            transform='rotate(180 2.66536 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 2.66536 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 2.66536 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
        </svg>
      </span>
      <span className='absolute -left-7 -bottom-7 z-[-1]'>
        <svg
          width='107'
          height='134'
          viewBox='0 0 107 134'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='104.999'
            cy='132'
            r='1.66667'
            transform='rotate(180 104.999 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 104.999 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 104.999 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='88'
            r='1.66667'
            transform='rotate(180 104.999 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 104.999 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='45'
            r='1.66667'
            transform='rotate(180 104.999 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='16'
            r='1.66667'
            transform='rotate(180 104.999 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='59'
            r='1.66667'
            transform='rotate(180 104.999 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 104.999 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='104.999'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 104.999 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='132'
            r='1.66667'
            transform='rotate(180 90.3333 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 90.3333 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 90.3333 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='88'
            r='1.66667'
            transform='rotate(180 90.3333 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 90.3333 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='45'
            r='1.66667'
            transform='rotate(180 90.3333 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='16'
            r='1.66667'
            transform='rotate(180 90.3333 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='59'
            r='1.66667'
            transform='rotate(180 90.3333 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 90.3333 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='90.3333'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 90.3333 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='132'
            r='1.66667'
            transform='rotate(180 75.6654 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='132'
            r='1.66667'
            transform='rotate(180 31.9993 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 75.6654 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 31.9993 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 75.6654 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 31.9993 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='88'
            r='1.66667'
            transform='rotate(180 75.6654 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='88'
            r='1.66667'
            transform='rotate(180 31.9993 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 75.6654 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 31.9993 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='45'
            r='1.66667'
            transform='rotate(180 75.6654 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='45'
            r='1.66667'
            transform='rotate(180 31.9993 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='16'
            r='1.66667'
            transform='rotate(180 75.6654 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='16'
            r='1.66667'
            transform='rotate(180 31.9993 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='59'
            r='1.66667'
            transform='rotate(180 75.6654 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='59'
            r='1.66667'
            transform='rotate(180 31.9993 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 75.6654 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 31.9993 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='75.6654'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 75.6654 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='31.9993'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 31.9993 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='132'
            r='1.66667'
            transform='rotate(180 60.9993 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='132'
            r='1.66667'
            transform='rotate(180 17.3333 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 60.9993 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 17.3333 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 60.9993 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 17.3333 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='88'
            r='1.66667'
            transform='rotate(180 60.9993 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='88'
            r='1.66667'
            transform='rotate(180 17.3333 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 60.9993 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 17.3333 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='45'
            r='1.66667'
            transform='rotate(180 60.9993 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='45'
            r='1.66667'
            transform='rotate(180 17.3333 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='16'
            r='1.66667'
            transform='rotate(180 60.9993 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='16'
            r='1.66667'
            transform='rotate(180 17.3333 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='59'
            r='1.66667'
            transform='rotate(180 60.9993 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='59'
            r='1.66667'
            transform='rotate(180 17.3333 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 60.9993 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 17.3333 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='60.9993'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 60.9993 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='17.3333'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 17.3333 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='132'
            r='1.66667'
            transform='rotate(180 46.3333 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='132'
            r='1.66667'
            transform='rotate(180 2.66536 132)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 46.3333 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='117.333'
            r='1.66667'
            transform='rotate(180 2.66536 117.333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 46.3333 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='102.667'
            r='1.66667'
            transform='rotate(180 2.66536 102.667)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='88'
            r='1.66667'
            transform='rotate(180 46.3333 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='88'
            r='1.66667'
            transform='rotate(180 2.66536 88)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 46.3333 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='73.3333'
            r='1.66667'
            transform='rotate(180 2.66536 73.3333)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='45'
            r='1.66667'
            transform='rotate(180 46.3333 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='45'
            r='1.66667'
            transform='rotate(180 2.66536 45)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='16'
            r='1.66667'
            transform='rotate(180 46.3333 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='16'
            r='1.66667'
            transform='rotate(180 2.66536 16)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='59'
            r='1.66667'
            transform='rotate(180 46.3333 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='59'
            r='1.66667'
            transform='rotate(180 2.66536 59)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 46.3333 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='30.6666'
            r='1.66667'
            transform='rotate(180 2.66536 30.6666)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='46.3333'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 46.3333 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
          <circle
            cx='2.66536'
            cy='1.66665'
            r='1.66667'
            transform='rotate(180 2.66536 1.66665)'
            fill='hsl(var(--p) / var(--tw-bg-opacity))'
          />
        </svg>
      </span>
    </div>
  );
};
