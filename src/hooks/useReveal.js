import { useEffect } from 'react';

export default function useReveal(ref) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Add visible class to any children with reveals
          const revealChildren = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
          revealChildren.forEach(child => child.classList.add('visible'));
          
          // Once it's visible, we can stop observing this specific section
          // but we keep it for now if we want to toggle animations
          // observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
}
