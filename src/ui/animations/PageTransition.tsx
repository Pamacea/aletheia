'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

// ============================================================================
// ALETHEIA - PAGE TRANSITION COMPONENT
// ============================================================================
// Elegant page transitions matching the literary paper aesthetic
// Provides smooth, subtle animations for route changes
// ============================================================================

/**
 * Props for PageTransition component
 */
export interface PageTransitionProps {
  /**
   * Content to animate
   */
  children: React.ReactNode;

  /**
   * Animation variant to use
   * @default 'fade'
   */
  variant?: 'fade' | 'slideUp' | 'scale' | 'slide';

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Custom variants object
   * Overrides preset variant if provided
   */
  customVariants?: Variants;

  /**
   * Whether to exit animate when unmounting
   * @default true
   */
  exitAnimation?: boolean;
}

// Variant presets
const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },

  slideUp: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  },

  scale: {
    hidden: {
      opacity: 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
      },
    },
  },

  slide: {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
};

/**
 * PageTransition - Elegant page transition wrapper
 *
 * Wraps page content with smooth entrance and exit animations.
 * Designed for Aletheia's literary paper aesthetic.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <PageTransition>
 *   <h1>Welcome</h1>
 *   <p>Content fades in elegantly</p>
 * </PageTransition>
 *
 * // With variant
 * <PageTransition variant="slideUp">
 *   <MainContent />
 * </PageTransition>
 *
 * // With custom variants
 * <PageTransition customVariants={myCustomVariants}>
 *   <Content />
 * </PageTransition>
 *
 * // Without exit animation
 * <PageTransition exitAnimation={false}>
 *   <InstantContent />
 * </PageTransition>
 * ```
 */
export function PageTransition({
  children,
  variant = 'fade',
  className,
  customVariants,
  exitAnimation = true,
}: PageTransitionProps) {
  const selectedVariants = customVariants || variants[variant];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={exitAnimation ? 'exit' : undefined}
      variants={selectedVariants}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// PAGE TRANSITION WITH ANIMATEPRESENCE
// ============================================================================

/**
 * Props for PageTransitionWrapper component
 */
export interface PageTransitionWrapperProps {
  /**
   * Current page children (must include key for AnimatePresence)
   */
  children: React.ReactNode;

  /**
   * Animation variant to use
   * @default 'slideUp'
   */
  variant?: 'fade' | 'slideUp' | 'scale' | 'slide';

  /**
   * Mode for AnimatePresence
   * @default 'wait'
   */
  mode?: 'wait' | 'sync' | 'popLayout';

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PageTransitionWrapper - Full page transition with AnimatePresence
 *
 * Use this component in layout.tsx or root layout to animate page transitions.
 * Wraps children with AnimatePresence for proper exit animations.
 *
 * @example
 * ```tsx
 * // In layout.tsx
 * export default function Layout({ children }) {
 *   return (
 *     <PageTransitionWrapper variant="slideUp">
 *       {children}
 *     </PageTransitionWrapper>
 *   );
 * }
 *
 * // In page.tsx with key
 * export default function Page() {
 *   return (
 *     <PageTransitionWrapper>
 *       <div key="unique-page-key">
 *         <PageContent />
 *       </div>
 *     </PageTransitionWrapper>
 *   );
 * }
 * ```
 */
export function PageTransitionWrapper({
  children,
  variant = 'slideUp',
  mode = 'wait',
  className,
}: PageTransitionWrapperProps) {
  const selectedVariants = variants[variant];

  return (
    <AnimatePresence mode={mode}>
      <motion.div
        key={typeof children === 'object' && children && 'key' in children ? String(children.key) : 'page'}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={selectedVariants}
        className={cn('w-full', className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================================================
// SECTION TRANSITION
// ============================================================================

/**
 * Props for SectionTransition component
 */
export interface SectionTransitionProps {
  /**
   * Section content
   */
  children: React.ReactNode;

  /**
   * Animation variant
   * @default 'fadeInUp'
   */
  variant?: 'fadeIn' | 'fadeInUp' | 'fadeInDown';

  /**
   * Delay before animation starts (seconds)
   * @default 0
   */
  delay?: number;

  /**
   * Animation duration (seconds)
   * @default 0.5
   */
  duration?: number;

  /**
   * Additional CSS classes
   */
  className?: string;
}

const sectionVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
};

/**
 * SectionTransition - Animate page sections on scroll
 *
 * Perfect for revealing content sections with elegant animations.
 * Use multiple instances with different delays for staggered effects.
 *
 * @example
 * ```tsx
 * // Staggered sections
 * <SectionTransition delay={0}>
 *   <HeroSection />
 * </SectionTransition>
 *
 * <SectionTransition delay={0.1}>
 *   <ContentSection />
 * </SectionTransition>
 *
 * <SectionTransition delay={0.2}>
 *   <FooterSection />
 * </SectionTransition>
 * ```
 */
export function SectionTransition({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  className,
}: SectionTransitionProps) {
  const selectedVariants = sectionVariants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={selectedVariants}
      transition={{ delay, duration }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
}
