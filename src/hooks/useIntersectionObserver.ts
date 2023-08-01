import { useEffect, useState, useRef, MutableRefObject } from 'react';

export const useIntersectionObserver = (): [
  MutableRefObject<HTMLElement | null | any>,
  boolean,
] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let observerRefValue: any = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '300px', // Increase or decrease this value to adjust sensitivity
        threshold: 0.5, // Adjust to the desired threshold
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current; // <-- save ref value
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [ref]);

  return [ref, inView];
};
