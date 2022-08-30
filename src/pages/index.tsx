import Banner from '@/components/banner/Banner';
import Header from '@/components/layout/Header';
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
      <Header />

      <main>
        <section className='bg-white'>
          <div className='layout mb-25 mt-20 flex flex-col items-center justify-between gap-8 text-center md:flex-row'>
            <div>
              <h1>Melicena Web 2.0.</h1>
              <p>Coming soon...</p>
            </div>

            <NextImage
              priority
              useSkeleton
              src='/images/melicena-round.png'
              width='480'
              height='460'
              alt='Melicena Logo'
            />
          </div>
        </section>
        <Banner
          title='Melicena APP'
          messageFirst='Ahora disponible en Android'
          isLinkAndroid
        />
      </main>
    </Layout>
  );
}
