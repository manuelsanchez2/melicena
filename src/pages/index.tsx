import CardItem from '@/components/card/CardItem';
import Hero from '@/components/hero/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { data } from '@/data/data';
import { useAnimateOnIntersection } from '@/hooks/useAnimateOnIntersection';
import { currentYear, scrollDown } from '@/utils/utils';
import Image from 'next/image';

export default function HomePage() {
  const refPlaces = useAnimateOnIntersection();
  const refFestivities = useAnimateOnIntersection();

  return (
    <Layout>
      <Seo title='• Melicena Web - Tu paraíso en la costa' />
      <>
        <Hero
          title='Te damos la bienvenida a Melicena'
          description='Un paraíso terrenal entre Almería y Granada'
          buttonLabel='Descubre más'
          buttonFunction={() => scrollDown(1000)}
        />
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

          <ul
            data-cy='places'
            ref={refPlaces}
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {data.places.map((place, index) => (
              <CardItem
                itemClasses='opacity-0'
                imgClasses='w-full h-48 object-cover'
                imgWidth={500}
                imgHeight={300}
                data={place}
                key={index}
              />
            ))}
          </ul>
        </section>

        {/* section - banner */}
        {/* <Banner
          title='Melicena APP'
          messageFirst='Ahora disponible en Android'
          isLinkAndroid
        /> */}

        {/* section - festivities */}
        <section
          className='mx-auto container p-4'
          aria-label='Fiestas que se celebran en Melicena'
        >
          <h2 className='my-3 text-3xl font-bold mb-12'>
            Festividades en {currentYear}
          </h2>

          <ul
            data-cy='festivities'
            ref={refFestivities}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {data.festivities.map((festivity, index) => (
              <CardItem
                itemClasses='opacity-0'
                imgClasses='w-full h-48 object-cover'
                imgWidth={500}
                imgHeight={200}
                variant='festivity'
                data={festivity}
                key={index}
              />
            ))}
          </ul>
        </section>
      </>
    </Layout>
  );
}
