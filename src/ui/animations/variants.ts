import type { Transition, Variants } from 'framer-motion';

// ============================================================================
// ALETHEIA - FRAMER MOTION VARIANTS
// ============================================================================
// Animation variants inspired by literary paper aesthetics
// Subtle, elegant transitions that enhance the reading experience
// ============================================================================

// ============================================================================
// FADE VARIANTS
// ============================================================================

/**
 * Simple opacity fade transition
 * @example
 * ```tsx
 * <motion.div variants={fadeIn} initial="hidden" animate="visible" exit="exit" />
 * ```
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Fade with upward movement
 * Perfect for revealing content sections
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

/**
 * Fade with downward movement
 * Ideal for dropdown menus and modal reveals
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// ============================================================================
// SLIDE VARIANTS
// ============================================================================

/**
 * Slide in from left with fade
 * Great for sidebar content and navigation
 */
export const slideInLeft: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

/**
 * Slide in from right with fade
 * Perfect for panels and details
 */
export const slideInRight: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
};

// ============================================================================
// SCALE VARIANTS
// ============================================================================

/**
 * Scale in with fade
 * Elegant for cards and modals
 */
export const scaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
};

/**
 * Subtle scale for emphasis
 * Good for buttons and interactive elements
 */
export const scalePulse: Variants = {
  hidden: { scale: 1 },
  visible: { scale: 1.05 },
  exit: { scale: 1 },
};

// ============================================================================
// STAGGER VARIANTS
// ============================================================================

/**
 * Container for staggered children animations
 * Use with staggerItem for list animations
 * @example
 * ```tsx
 * <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *   {items.map((item) => (
 *     <motion.div key={item.id} variants={staggerItem}>
 *       {item.content}
 *     </motion.div>
 *   ))}
 * </motion.div>
 * ```
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Individual item for staggered animations
 * Pair with staggerContainer
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================================================================
// PAGE TRANSITION VARIANTS
// ============================================================================

/**
 * Elegant page transition with slide and fade
 * Matches literary paper aesthetic
 */
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================================================================
// MODAL VARIANTS
// ============================================================================

/**
 * Backdrop fade for modals
 */
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Modal content scale and fade
 */
export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================================================================
// DRAWER/SIDEBAR VARIANTS
// ============================================================================

/**
 * Drawer sliding from right
 */
export const drawerRight: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Drawer sliding from left
 */
export const drawerLeft: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.2,
    },
  },
};

// ============================================================================
// TEXT VARIANTS
// ============================================================================

/**
 * Text reveal with character-by-character animation
 * Use with custom split text component
 */
export const textReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

/**
 * Individual character animation
 */
export const characterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// ============================================================================
// TRANSITION PRESETS
// ============================================================================

/**
 * Default spring transition
 * Smooth, natural motion
 */
export const transitions: Record<string, Transition> = {
  /**
   * Standard ease-in-out transition
   */
  default: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },

  /**
   * Fast transition for quick interactions
   */
  fast: {
    duration: 0.15,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },

  /**
   * Slow transition for emphasis
   */
  slow: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },

  /**
   * Spring transition with natural bounce
   */
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },

  /**
   * Smooth spring for subtle motion
   */
  springSmooth: {
    type: 'spring',
    stiffness: 200,
    damping: 25,
  },

  /**
   * Bouncy spring for playful interactions
   */
  springBouncy: {
    type: 'spring',
    stiffness: 400,
    damping: 20,
  },

  /**
   * Linear transition for continuous motion
   */
  linear: {
    duration: 0.3,
    ease: 'linear' as const,
  },
};

// ============================================================================
// UTILITY VARIANTS
// ============================================================================

/**
 * No animation - for conditional rendering
 */
export const none: Variants = {
  hidden: {},
  visible: {},
  exit: {},
};

/**
 * Height animation for accordions
 */
export const heightCollapse: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
