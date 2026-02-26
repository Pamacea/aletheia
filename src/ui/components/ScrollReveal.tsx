'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children = null, delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`}>
      {children}
    </div>
  );
}
