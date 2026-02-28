'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

/**
 * Animation direction for scroll reveal
 */
export type ScrollRevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

/**
 * Props for ScrollReveal component
 */
export interface ScrollRevealProps {
  /**
   * Content to reveal on scroll
   */
  children?: ReactNode;

  /**
   * Animation direction
   * @default 'up'
   */
  direction?: ScrollRevealDirection;

  /**
   * Delay before animation starts (in ms)
   * @default 0
   */
  delay?: number;

  /**
   * Animation duration (in ms)
   * @default 600
   */
  duration?: number;

  /**
   * How much of the element must be visible before triggering
   * @default 0.1
   */
  threshold?: number;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Only trigger once
   * @default true
   */
  once?: boolean;
}

const directionClasses: Record<ScrollRevealDirection, string> = {
  up: 'translate-y-8 opacity-0',
  down: '-translate-y-8 opacity-0',
  left: 'translate-x-8 opacity-0',
  right: '-translate-x-8 opacity-0',
  fade: 'opacity-0',
};

/**
 * ScrollReveal - Animate elements when they scroll into view
 *
 * Uses IntersectionObserver to trigger CSS transitions when elements enter the viewport.
 * Supports multiple directions, delays, and custom durations.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <ScrollReveal>
 *   <h1>Reveals on scroll</h1>
 * </ScrollReveal>
 *
 * // With direction
 * <ScrollReveal direction="left">
 *   <p>Slides from left</p>
 * </ScrollReveal>
 *
 * // With delay
 * <ScrollReveal delay={200}>
 *   <div>Delayed reveal</div>
 * </ScrollReveal>
 *
 * // Staggered children
 * {items.map((item, i) => (
 *   <ScrollReveal key={i} delay={i * 100}>
 *     <div>{item}</div>
 *   </ScrollReveal>
 * ))}
 * ```
 */
export function ScrollReveal({
  children = null,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
              entry.target.classList.remove('reveal-hidden');
            }, delay);

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
            entry.target.classList.add('reveal-hidden');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold,
      }
    );

    element.classList.add('reveal-hidden');
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-on-scroll',
        'transition-all ease-out',
        directionClasses[direction],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
