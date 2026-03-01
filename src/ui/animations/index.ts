// ============================================================================
// ALETHEIA - ANIMATIONS BARREL EXPORT
// ============================================================================
// Central export for all Framer Motion animations and components
// Usage: import { fadeIn, PageTransition, ScrollReveal } from '@/ui/animations';
// ============================================================================

// ============================================================================
// MICRO INTERACTIONS
// ============================================================================
export { AnimatedButton, AnimatedCard } from './MicroInteractions';

// ============================================================================
// VARIANTS
// ============================================================================
export {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  scalePulse,
  staggerContainer,
  staggerItem,
  pageTransition,
  modalBackdrop,
  modalContent,
  drawerRight,
  drawerLeft,
  textReveal,
  characterReveal,
  transitions,
  none,
  heightCollapse,
} from './variants';

// Re-export types from variants
export type { Variants, Transition } from 'framer-motion';

// ============================================================================
// PAGE TRANSITION
// ============================================================================
export {
  PageTransition,
  PageTransitionWrapper,
  SectionTransition,
} from './PageTransition';

export type {
  PageTransitionProps,
  PageTransitionWrapperProps,
  SectionTransitionProps,
} from './PageTransition';

// ============================================================================
// SCROLL REVEAL
// ============================================================================
export {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  ScrollRevealWithBlur,
} from './ScrollReveal';

export type {
  ScrollRevealDirection,
  ScrollRevealProps,
  StaggerContainerProps,
  StaggerItemProps,
  ScrollRevealWithBlurProps,
} from './ScrollReveal';
