import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';

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
      </main>
    </Layout>
  );
}
