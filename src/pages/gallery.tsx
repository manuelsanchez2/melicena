import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type MediaMasonry = {
  src: string;
  link?: string;
  alt: string;
  type: 'img' | 'video';
};

const MEDIA = [
  {
    src: '/images/masonry/masonry-vertical-video-00.mp4',
    alt: 'Melicena',
    type: 'video',
  },
  {
    src: '/images/masonry/masonry-horizontal-06.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-vertical-00.jpg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-vertical-03.jpg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-horizontal-01.jpg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-horizontal-05.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-horizontal-03.jpg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-horizontal-04.png',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-vertical-02.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.manusanchez.melicena&pli=1',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-horizontal-02.jpg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-vertical-01.jpg',
    alt: 'Melicena',
    type: 'img',
  },

  {
    src: '/images/masonry/masonry-vertical-video-01.mp4',
    alt: 'Melicena',
    type: 'video',
  },
  {
    src: '/images/masonry/masonry-horizontal-video-00.mp4',
    alt: 'Melicena',
    type: 'video',
  },
  {
    src: '/images/masonry/masonry-vertical-04.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-vertical-05.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-vertical-06.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
  {
    src: '/images/masonry/masonry-vertical-07.jpeg',
    alt: 'Melicena',
    type: 'img',
  },
] as MediaMasonry[];

export default function GalleryPage() {
  const [displayedMedia, setDisplayedMedia] = useState<MediaMasonry[]>(
    MEDIA.slice(0, 12),
  );

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 600
      )
        return;

      // Load more when user is at the bottom
      const currentLength = displayedMedia.length;
      const more = MEDIA.slice(currentLength, currentLength + 12);
      setDisplayedMedia((prev) => [...prev, ...more]);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [displayedMedia]);

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
          <Masonry gutter={'20px'} className='masonry container mx-auto p-4'>
            {displayedMedia.map((media, index) => {
              const isPriority = index < 10;

              if (media.type === 'img') {
                return media.link ? (
                  <a
                    href={media.link}
                    key={index}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      priority={isPriority}
                      width={600}
                      height={600}
                      alt={media.alt}
                      src={media.src}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      className='rounded-lg shadow-xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 object-left-top'
                    />
                  </a>
                ) : (
                  <Image
                    priority={isPriority}
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
                );
              } else if (media.type === 'video') {
                return (
                  <video
                    key={index}
                    width='600'
                    height='600'
                    loop
                    muted
                    autoPlay
                    playsInline
                    className='rounded-lg shadow-xl object-cover brightness-90 hover:brightness-100 transition-all duration-500'
                  >
                    <source src={media.src} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                );
              }
            })}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </Layout>
  );
}
