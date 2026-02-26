'use client';

import { useEffect, useState, RefObject } from 'react';

/**
 * Custom hook for tracking element visibility using Intersection Observer
 * @param ref - The ref to observe
 * @param options - Intersection Observer options
 * @returns Boolean indicating if the element is in view
 */
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0,
      rootMargin: '0px',
      ...options,
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}
