import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';
import { jellyFishInfo, tempWater, waveInfo } from '@/constant/constants';
import { type JellyFishProps } from '@/types/types';
import { fetchInfoMelicena, fetchJellyFishInfo } from '@/api/fetch';
import dynamic from 'next/dynamic';

const FamilyTree = dynamic(
  () => import('@/components/family-tree/FamilyTree'),
  {
    ssr: false,
  },
);

export async function getServerSideProps(): Promise<{ props: JellyFishProps }> {
  try {
    const $jelly = await fetchJellyFishInfo();
    const jellyFishAmount = $jelly(jellyFishInfo).text();

    const $melicena = await fetchInfoMelicena();

    const waveInfoPower = $melicena(waveInfo).text();
    const tempWaterInfo = $melicena(tempWater).text();

    return {
      props: {
        jellyFishAmount,
        waveInfoPower,
        tempWaterInfo,
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

export default function ArbolFamiliaPage(props: JellyFishProps) {
  return (
    <Layout marqueeData={props}>
      <Seo
        templateTitle='• Árbol de familia López'
        description='Descubre aquí de dónde venimos y quiénes somos'
      />
      <main>
        <Hero
          title='El árbol genealógico que te lo déjara todo clarito'
          description=''
        />
        <section
          className='mx-auto container p-4'
          aria-label='El árbol genealógico'
        >
          <h2 className='my-3 text-3xl font-bold mb-12'>La familia López</h2>

          <FamilyTree />
        </section>
      </main>
    </Layout>
  );
}
