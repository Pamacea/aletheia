'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

// ============================================================================
// ALETHEIA - SCROLL REVEAL COMPONENT (FRAMER MOTION)
// ============================================================================
// Elegant scroll-triggered animations for the literary paper aesthetic
// Replaces CSS-based ScrollReveal with Framer Motion implementation
// ============================================================================

/**
 * Animation direction for scroll reveal
 */
export type ScrollRevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

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
   * Delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;

  /**
   * Animation duration (in seconds)
   * @default 0.5
   */
  duration?: number;

  /**
   * How much of the element must be visible before triggering (0-1)
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

  /**
   * Amount of offset from viewport edge (in pixels)
   * Negative values trigger before element enters viewport
   * @default -50
   */
  margin?: number;
}

// Direction variants
const directionVariants = {
  up: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  down: {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  left: {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  fade: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
};

/**
 * ScrollReveal - Animate elements when they scroll into view
 *
 * Uses Framer Motion's useInView hook for smooth, performant scroll animations.
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
 * <ScrollReveal delay={0.2}>
 *   <div>Delayed reveal</div>
 * </ScrollReveal>
 *
 * // Staggered children
 * {items.map((item, i) => (
 *   <ScrollReveal key={i} delay={i * 0.1}>
 *     <div>{item}</div>
 *   </ScrollReveal>
 * ))}
 *
 * // Scale effect
 * <ScrollReveal direction="scale" duration={0.6}>
 *   <Card>Content</Card>
 * </ScrollReveal>
 * ```
 */
export function ScrollReveal({
  children = null,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className,
  once = true,
  margin = -50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin: `${margin}px`,
  });

  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// STAGGER CONTAINER FOR LIST ITEMS
// ============================================================================

/**
 * Props for StaggerContainer component
 */
export interface StaggerContainerProps {
  /**
   * Children to stagger animate
   */
  children?: ReactNode;

  /**
   * Delay between each child (in seconds)
   * @default 0.1
   */
  staggerDelay?: number;

  /**
   * Initial delay before first child (in seconds)
   * @default 0
   */
  initialDelay?: number;

  /**
   * Animation direction for children
   * @default 'up'
   */
  direction?: ScrollRevealDirection;

  /**
   * How much of container must be visible before triggering
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * StaggerContainer - Animate children with staggered timing
 *
 * Perfect for lists, grids, and collections where items should appear sequentially.
 *
 * @example
 * ```tsx
 * // Staggered list
 * <StaggerContainer staggerDelay={0.1}>
 *   {items.map((item) => (
 *     <StaggerItem key={item.id}>
 *       <Card>{item.content}</Card>
 *     </StaggerItem>
 *   ))}
 * </StaggerContainer>
 * ```
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  direction = 'up',
  threshold = 0.1,
  className,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: initialDelay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn('w-full', className)}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={directionVariants[direction]}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

/**
 * Props for StaggerItem component
 */
export interface StaggerItemProps {
  /**
   * Item content
   */
  children?: ReactNode;

  /**
   * Animation direction
   * @default 'up'
   */
  direction?: ScrollRevealDirection;

  /**
   * Custom delay override (in seconds)
   */
  delay?: number;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * StaggerItem - Individual item for staggered animations
 *
 * Used inside StaggerContainer or independently for manual control.
 *
 * @example
 * ```tsx
 * // Manual stagger
 * {items.map((item, i) => (
 *   <StaggerItem key={i} delay={i * 0.1}>
 *     <div>{item}</div>
 *   </StaggerItem>
 * ))}
 * ```
 */
export function StaggerItem({
  children,
  direction = 'up',
  delay,
  className,
}: StaggerItemProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// SCROLL REVEAL WITH BLUR
// ============================================================================

/**
 * Props for ScrollRevealWithBlur component
 */
export interface ScrollRevealWithBlurProps extends Omit<ScrollRevealProps, 'direction'> {
  /**
   * Initial blur amount (pixels)
   * @default 10
   */
  blurAmount?: number;
}

/**
 * ScrollRevealWithBlur - Reveal with blur effect
 *
 * Adds a blur filter that clears as the element comes into view.
 * Creates a dreamy, literary effect perfect for quotes and emphasis.
 *
 * @example
 * ```tsx
 * <ScrollRevealWithBlur blurAmount={8}>
 *   <blockquote>
 *     "The only true wisdom is in knowing you know nothing."
 *   </blockquote>
 * </ScrollRevealWithBlur>
 * ```
 */
export function ScrollRevealWithBlur({
  children,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className,
  once = true,
  margin = -50,
  blurAmount = 10,
}: ScrollRevealWithBlurProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin: `${margin}px`,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          filter: `blur(${blurAmount}px)`,
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        },
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
}
