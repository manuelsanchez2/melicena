export function scrollDown(offset: number) {
  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
}

export const today = new Date();
export const currentYear = today.getFullYear();
