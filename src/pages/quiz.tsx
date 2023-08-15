import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/api';
import { load } from 'cheerio';
import { jellyFishInfo, urlJellyFishMotril } from '@/constant/constants';
import { type JellyFishProps } from '@/types/types';

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

export default function QuizPage(props: JellyFishProps) {
  const [data, setData] = useState([
    { id: 1, name: 'Luis', score: 7 },
    { id: 2, name: 'Patricio', score: 10 },
    { id: 3, name: 'Manuel', score: 10 },
  ]);

  useEffect(() => {
    fetchNames();
  }, [data]);

  async function fetchNames() {
    let { data: names, error } = await supabase.from('users').select('*');
    if (error) console.log('error', error);
    else setData(names);
  }

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
                {data
                  .sort((a, b) => b.score - a.score)
                  .map((item) => {
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
                        <td>
                          {medal()}
                          {item.name}
                        </td>
                        <td>{item.score}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
}
