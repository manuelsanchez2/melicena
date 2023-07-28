import Banner from '@/components/banner/Banner';
import CardItem from '@/components/card/CardItem';
import Hero from '@/components/hero/Hero';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
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
          <h2 className='my-3 text-3xl font-bold mb-4'>Sobre Melicena</h2>

          <div className='container mx-auto my-24 flex flex-col items-center md:flex-row md:items-start gap-12'>
            <Image
              src='/images/info-0.png'
              width='400'
              height='400'
              alt='Melicena beach'
            />

            <div>
              <p className='text-xl mb-2'>
                Melicena, situado en la provincia de Granada, en la región
                andaluza al sur de España,
                <strong>
                  es uno de esos lugares que parecen haberse resistido al paso
                  del tiempo
                </strong>
                . A orillas del mar Mediterráneo, este pintoresco pueblo es un
                refugio de paz y tradición en medio del bullicio de la
                modernidad.
              </p>

              <p className='text-xl mb-2'>
                Sus calles estrechas y sinuosas, típicas de los pueblos
                mediterráneos, están flanqueadas por casas blancas con tejados
                de tejas rojas que brillan bajo el sol ardiente de Andalucía.
              </p>
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
              <p className='text-xl mb-2'>
                Pero lo que realmente hace especial a Melicena, más allá de su
                paisaje y tradiciones, es su gente.{' '}
                <strong>
                  Los meliceneros, con su hospitalidad genuina y su forma de
                  vida relajada, dan la bienvenida a los visitantes con los
                  brazos abiertos
                </strong>
                .
              </p>

              <p className='text-xl mb-2'>
                Para quienes buscan escapar del ajetreo de las ciudades más
                grandes y sumergirse en un ambiente donde el tiempo parece
                detenerse, Melicena ofrece un refugio idílico y una experiencia
                auténticamente andaluza.
              </p>
            </div>
          </div>
        </section>

        {/* section - places of interest */}
        <section
          className='mx-auto container p-4'
          aria-label='Lugares de interés de Melicena'
        >
          <h2 className='my-3 text-3xl font-bold mb-4'>Lugares de interés</h2>

          <ul>
            <CardItem index={1} />
          </ul>
        </section>
        {/* <Banner
          title='Melicena APP'
          messageFirst='Ahora disponible en Android'
          isLinkAndroid
        /> */}
      </main>
    </Layout>
  );
}
