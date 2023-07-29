import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animate, stagger } from 'motion';
import { useEffect, useState } from 'react';

// Custom hook for handling animations on intersection
export const useAnimateOnIntersection = (selector = 'li') => {
  const [ref, inView] = useIntersectionObserver();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && ref.current && !animated) {
      const elements = ref.current.querySelectorAll(selector);
      if (elements) {
        animate(
          elements,
          { opacity: [0, 1], y: [100, 0] },
          { delay: stagger(0.2), easing: 'ease-in-out' },
        );
        setAnimated(true); // mark as animated
      }
    }
  }, [inView, animated]);

  return ref;
};
