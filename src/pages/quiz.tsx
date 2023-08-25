import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/api';
import { jellyFishInfo, tempWater, waveInfo } from '@/constant/constants';
import { type JellyFishProps } from '@/types/types';
import usePagination from '@/hooks/usePagination';
import { fetchInfoMelicena, fetchJellyFishInfo } from '@/api/fetch';

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

export default function QuizPage(props: JellyFishProps) {
  const [data, setData] = useState([
    { id: 1, name: 'Luis', score: 7 },
    { id: 2, name: 'Patricio', score: 10 },
    { id: 3, name: 'Manuel', score: 10 },
  ]);

  useEffect(() => {
    fetchNames();
  }, [data]);

  const initialState = {
    currentPage: 1,
    pageSize: 10,
    total: data.length,
  };
  const [state, actions] = usePagination(initialState);

  const isPrevDisabled = state.currentPage === 1;
  const isNextDisabled =
    state.currentPage === Math.ceil(data.length / state.pageSize) ||
    data.length === 0;

  async function fetchNames() {
    let { data: names, error } = await supabase.from('users').select('*');
    if (error) console.log('error', error);
    else setData(names);
  }

  const displayedPeople = useMemo(() => {
    const sortedData = data.sort((a, b) => b.score - a.score);
    const start = (state.currentPage - 1) * state.pageSize;
    const end = state.currentPage * state.pageSize;
    return sortedData.slice(start, end);
  }, [data, state.currentPage, state.pageSize]);

  return (
    <Layout marqueeData={props}>
      <Seo
        templateTitle='• Quiz Page de Melicena'
        description='Descubre aquí cuánto sabes sobre el pueblo'
      />
      <main>
        <Hero
          title='Compite con los demás para demostrar tus conocimientos'
          description='¡Ahora + de 10 nuevas preguntas!'
          linkLabel='Hacer quiz'
          linkUrl='https://melicena-quiz.vercel.app/'
        />
        <section
          className='mx-auto container p-4'
          aria-label='Los mejores resultados'
        >
          <h2 className='my-3 text-3xl font-bold mb-12'>Puntuación</h2>
          <div className='overflow-x-auto'>
            <table className='table table-zebra'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Preguntas acertadas sobre 10</th>
                </tr>
              </thead>
              <tbody>
                {displayedPeople.map((item) => {
                  const medal = () => {
                    if (item.score >= 10) {
                      return '🥇';
                    } else if (item.score >= 8) {
                      return '🥈';
                    } else if (item.score >= 7) {
                      return '🥉';
                    } else {
                      return '';
                    }
                  };
                  return (
                    <tr key={item.id}>
                      <td className='min-w-[150px]'>
                        {medal()}
                        {item.name}
                      </td>
                      <td>{item.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className='flex flex-col mt-12'>
              <div className='flex justify-center gap-8'>
                <button
                  onClick={actions.prevPage}
                  disabled={isPrevDisabled}
                  className='disabled:text-gray-300 disabled:pointer-events-none'
                >
                  Anteriores
                </button>
                <button
                  onClick={actions.nextPage}
                  disabled={isNextDisabled}
                  className='disabled:text-gray-300 disabled:pointer-events-none'
                >
                  Siguientes
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
