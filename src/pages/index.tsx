import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo title='• Melicena Web - Tu paraíso en la costa' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center gap-8 text-center md:flex-row'>
            <NextImage
              priority
              useSkeleton
              className='w-32 md:w-40'
              src='/images/melicena-round.png'
              width='280'
              height='260'
              alt='Melicena Logo'
            />
            <div>
              <h1>Melicena Web 2.0.</h1>
              <p>Coming soon...</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
