import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/hero/Hero';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/api';

export default function QuizPage() {
  const [data, setData] = useState([
    { id: 1, name: 'Luis', score: 12 },
    { id: 2, name: 'Patricio', score: 15 },
    { id: 3, name: 'Manuel', score: 11 },
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
    <Layout>
      <Seo
        templateTitle='Quiz Page de Melicena'
        description='Descubre aquí cuánto sabes sobre el pueblo'
      />
      <main>
        <Hero
          title='Compite con los demás para demostrar tus conocimientos'
          description='¡Ahora + de 10 nuevas preguntas!'
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
                  <th>Preguntas acertadas sobre 15</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .sort((a, b) => b.score - a.score)
                  .map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
}
