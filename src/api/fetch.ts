import { urlInfoMelicena, urlJellyFishMotril } from '@/constant/constants';
import { load } from 'cheerio';

export async function fetchJellyFishInfo() {
  const response = await fetch(urlJellyFishMotril);

  if (!response.ok) {
    throw new Error('Problema al obtener la página de meduseo');
  }

  const data = await response.text();

  const $ = load(data);
  return $;
}

export async function fetchInfoMelicena() {
  const response = await fetch(urlInfoMelicena);

  if (!response.ok) {
    throw new Error('Problema al obtener la página de Melicena');
  }

  const data = await response.text();

  const $ = load(data);
  return $;
}
