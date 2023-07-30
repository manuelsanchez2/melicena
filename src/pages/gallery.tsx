import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';

type ImageMasonry = {
  src: string;
  link?: string;
  alt: string;
};

const IMAGES = [
  { src: '/images/masonry/masonry-vertical-00.jpg', alt: 'Melicena' },
  { src: '/images/masonry/masonry-vertical-03.jpg', alt: 'Melicena' },
  { src: '/images/masonry/masonry-horizontal-01.jpg', alt: 'Melicena' },
  {
    src: '/images/masonry/masonry-vertical-02.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.manusanchez.melicena&pli=1',
    alt: 'Melicena',
  },
  { src: '/images/masonry/masonry-horizontal-02.jpg', alt: 'Melicena' },
  { src: '/images/masonry/masonry-vertical-01.jpg', alt: 'Melicena' },
] as ImageMasonry[];

export default function GalleryPage() {
  return (
    <Layout>
      <Seo
        templateTitle='Galería de imágenes de Melicena'
        description='Descubre aquí algunas imágenes sobre el pueblo'
      />

      <main>
        <Hero
          title='Dicen que una imagen vale más que 1000 palabras'
          description='¡Entonces está página tiene mucho valor!'
        />

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
        >
          <Masonry gutter={'20px'} className='container mx-auto p-4'>
            {IMAGES.map((image, index) => {
              if (image.link) {
                return (
                  <a
                    href={image.link}
                    key={index}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      alt={image.alt}
                      src={image.src}
                      style={{ width: '100%', height: 'auto' }}
                      className='rounded-lg shadow-xl max-h-[600px] object-cover'
                    />
                  </a>
                );
              } else {
                return (
                  <Image
                    alt={image.alt}
                    src={image.src}
                    style={{ width: '100%', height: 'auto' }}
                    className='rounded-lg shadow-xl max-h-[600px] object-cover'
                  />
                );
              }
            })}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </Layout>
  );
}
