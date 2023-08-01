import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout marqueeData={{}}>
      <Seo templateTitle='Página no encontrada' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Página no encontrada</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Vuelta a inicio
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
