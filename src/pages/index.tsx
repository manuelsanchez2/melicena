import Banner from '@/components/banner/Banner';
import CardItem from '@/components/card/CardItem';
import Hero from '@/components/hero/Hero';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { data } from '@/data/data';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Layout>
      <Seo title='• Melicena Web - Tu paraíso en la costa' />
      <Header />

      <main>
        <Hero />
        {/* section - info  */}
        <section
          className='mx-auto container p-4'
          aria-label='Información sobre el pueblo'
        >
          <h2 className='my-3 text-3xl font-bold mb-12'>Sobre Melicena</h2>

          <div className='container mx-auto my-24 flex flex-col items-center md:flex-row md:items-start gap-12'>
            <Image
              src='/images/info-0.png'
              width='400'
              height='400'
              alt='Melicena beach'
            />

            <div>
              <p
                className='text-xl mb-2'
                dangerouslySetInnerHTML={{ __html: data.intro[0] }}
              />

              <p
                className='text-xl mb-2'
                dangerouslySetInnerHTML={{ __html: data.intro[1] }}
              />
            </div>
          </div>

          <div className='container mx-auto my-24 flex flex-col items-center md:items-start md:flex-row-reverse gap-12'>
            <Image
              src='/images/info-1.png'
              width='400'
              height='400'
              alt='Melicena beach'
            />

            <div>
              <p
                className='text-xl mb-2'
                dangerouslySetInnerHTML={{ __html: data.intro[2] }}
              />

              <p
                className='text-xl mb-2'
                dangerouslySetInnerHTML={{ __html: data.intro[3] }}
              />
            </div>
          </div>
        </section>

        {/* section - places of interest */}
        <section
          className='mx-auto container p-4'
          aria-label='Lugares de interés de Melicena'
        >
          <h2 className='my-3 text-3xl font-bold mb-12'>Lugares de interés</h2>

          <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.places.map((place, index) => (
              <CardItem data={place} key={index} />
            ))}
          </ul>
        </section>

        {/* section - festivities */}
        <section
          className='mx-auto container p-4'
          aria-label='Fiestas que se celebran en Melicena'
        >
          <h2 className='my-3 text-3xl font-bold mb-12'>Fiestas populares</h2>

          <ul className='grid md:grid-cols-2 lg:grid-cols-3'>
            {data.festivities.map((festivity, index) => (
              <CardItem variant='festivity' data={festivity} key={index} />
            ))}
          </ul>
        </section>
        {/* <Banner
          title='Melicena APP'
          messageFirst='Ahora disponible en Android'
          isLinkAndroid
        /> */}
      </main>
      <Footer />
    </Layout>
  );
}
