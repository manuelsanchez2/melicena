export function scrollDown(offset: number) {
  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
}

export const today = new Date();
export const currentYear = today.getFullYear();

export function processJellyfishInfo(jellyFishAmount: string) {
  if (!jellyFishAmount)
    return {
      translation: 'Información no disponible',
      color: 'text-gray-700',
    };

  switch (jellyFishAmount.trim()) {
    case 'No jellyfish':
      return {
        translation: 'Sin medusas',
        color: 'text-green-700',
      };
    case 'Rare jellyfish':
      return {
        translation: 'Pocas medusas',
        color: 'text-green-200',
      };
    case 'Few jellyfish':
      return {
        translation: 'Algunas medusas',
        color: 'text-orange-700',
      };
    case 'Jellyfish':
      return {
        translation: 'Muchas medusas',
        color: 'text-red-700',
      };
    default:
      return {
        translation: 'Información no disponible',
        color: 'text-gray-700',
      };
  }
}
