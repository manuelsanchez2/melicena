export function scrollDown(offset: number) {
  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
}
