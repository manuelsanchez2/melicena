import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';
import { load } from 'cheerio';
import { jellyFishInfo, urlJellyFishMotril } from '@/constant/constants';
import { type JellyFishProps } from '@/types/types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import WeekWithEvents from '@/components/week-with-events/WeekWithEvents';

const MEDIA = [
  {
    src: '/images/fiestas-2023/17-agosto-cine.jpg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/17-agosto-bingo.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/18-agosto-dj.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/18-agosto-fiesta-ibicenca.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/18-agosto-juegos.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/18-agosto-migas.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/18-agosto-gaming-day.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/18-agosto-los-canarios.jpg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/19-agosto-los-vinilos.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/19-agosto-neon-party.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/20-agosto-disfraces-2030.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/20-agosto-dj-isma.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/20-agosto-espuma-12.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/20-agosto-feria-mediodia-14.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/20-agosto-mago-1830.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/fiestas-2023/20-agosto-supernova.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
];

export async function getServerSideProps(): Promise<{ props: JellyFishProps }> {
  try {
    const response = await fetch(urlJellyFishMotril);

    if (!response.ok) {
      throw new Error('Problema al obtener la página de meduseo');
    }

    const data = await response.text();

    const $ = load(data);

    const jellyFishAmount = $(jellyFishInfo).text();

    // const updatedDate = $('selector-para-la-fecha-de-actualizacion').text();
    // const jellyFishImg = $('selector-para-la-imagen').attr('src');

    return {
      props: {
        jellyFishAmount,
        // updatedDate,
      },
    };
  } catch (error) {
    return {
      props: {
        error: (error as Error).message,
      },
    };
  }
}

export default function Fiestas2023Page(props: JellyFishProps) {
  return (
    <Layout marqueeData={props}>
      <Seo
        templateTitle='• Programación Fiestas Melicena 2023'
        description='Descubre qué tiene preparada la Comisión de Fiestas'
      />
      <main>
        <Hero
          title='Programación de las fiestas de Melicena de 2023'
          description=''
        />
        <section
          className='mx-auto container p-4'
          aria-label='Los mejores resultados'
        >
          <h2 className='my-3 text-3xl font-bold mb-12'>Día a día</h2>

          <WeekWithEvents />

          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4 }}>
            <Masonry gutter={'20px'} className='masonry container mx-auto p-4'>
              {MEDIA.map((media, index) => (
                <Image
                  key={index}
                  width={600}
                  height={600}
                  alt={media.alt}
                  src={media.src}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className='rounded-lg shadow-xl object-cover brightness-90 hover:brightness-100 transition-all duration-500'
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      </main>
    </Layout>
  );
}
