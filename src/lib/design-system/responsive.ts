/**
 * Responsive Design System - Aletheia
 *
 * Design principles:
 * - NO absolute values (no px, rem, em for widths)
 * - Use fractions only (1/2, 3/4, full, etc.)
 * - Use gray scale for spacing (gray-*, slate-*)
 * - Use clamp() for fluid dimensions
 * - Mobile-first approach
 */

// ============================================
// FLUID DIMENSIONS - clamp() for responsive sizing
// ============================================

/**
 * Sidebar width - scales from 64px to 96px based on viewport
 * - Minimum: 4rem (64px)
 * - Preferred: 8vw (responsive to viewport)
 * - Maximum: 6rem (96px)
 */
export const SIDEBAR_WIDTH = 'clamp(4rem, 8vw, 6rem)';

/**
 * Connection sidebar width - scales from 256px to 384px
 * - Minimum: 16rem (256px)
 * - Preferred: 40vw (40% of viewport)
 * - Maximum: 24rem (384px)
 */
export const CONNECTION_SIDEBAR_WIDTH = 'clamp(16rem, 40vw, 24rem)';

/**
 * Modal width - scales from 320px to 640px
 * - Minimum: 20rem (320px)
 * - Preferred: 90vw (90% of viewport)
 * - Maximum: 40rem (640px)
 */
export const MODAL_WIDTH = 'clamp(20rem, 90vw, 40rem)';

/**
 * Form width - optimal for login/register forms
 * - Minimum: 20rem (320px)
 * - Preferred: 90vw (90% of viewport)
 * - Maximum: 32rem (512px)
 */
export const FORM_WIDTH = 'clamp(20rem, 90vw, 32rem)';

// ============================================
// RESPONSIVE PADDING
// ============================================

/**
 * Standard responsive padding for containers
 * - Mobile: 16px (px-4)
 * - Small screens: 24px (sm:px-6)
 * - Large screens: 32px (lg:px-8)
 */
export const CONTAINER_PADDING = 'px-4 sm:px-6 lg:px-8';

/**
 * Compact responsive padding
 * - Mobile: 12px (px-3)
 * - Small screens: 16px (sm:px-4)
 */
export const COMPACT_PADDING = 'px-3 sm:px-4';

/**
 * Comfortable responsive padding
 * - Mobile: 16px (px-4)
 * - Small screens: 24px (sm:px-6)
 * - Large screens: 32px (lg:px-8)
 * - Extra large: 40px (xl:px-10)
 */
export const COMFORTABLE_PADDING = 'px-4 sm:px-6 lg:px-8 xl:px-10';

// ============================================
// RESPONSIVE GRIDS
// ============================================

/**
 * Standard responsive grid pattern
 * - Mobile: 1 column
 * - Small screens: 2 columns
 * - Large screens: 3 columns
 * - Extra large: 4 columns (optional)
 */
export const GRID_STANDARD = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

export const GRID_STANDARD_XL = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

/**
 * Compact grid for smaller cards
 * - Mobile: 2 columns
 * - Small screens: 4 columns
 * - Large screens: 6 columns
 */
export const GRID_COMPACT = 'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6';

/**
 * Stats grid - optimized for data display
 * - Mobile: 2 columns
 * - Small screens: 2 columns
 * - Large screens: 4 columns
 */
export const GRID_STATS = 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4';

/**
 * Masonry grid with fluid minimums
 * Uses minmax(min(20rem, 100%), 1fr) for responsive cards
 */
export const GRID_MASONRY = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

// ============================================
// RESPONSIVE FLEX
// ============================================

/**
 * Stack on mobile, side-by-side on desktop
 */
export const FLEX_STACK = 'flex flex-col sm:flex-row';

/**
 * Stack on mobile, row on desktop with centered items
 */
export const FLEX_STACK_CENTERED = 'flex flex-col sm:flex-row items-center';

/**
 * Wrap on small screens, full row on desktop
 */
export const FLEX_WRAP = 'flex flex-wrap sm:flex-nowrap';

// ============================================
// RESPONSIVE TEXT SIZES
// ============================================

/**
 * Hero title - largest heading
 */
export const TEXT_HERO = 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl';

/**
 * Page title
 */
export const TEXT_PAGE_TITLE = 'text-3xl sm:text-4xl lg:text-5xl';

/**
 * Section title
 */
export const TEXT_SECTION_TITLE = 'text-2xl sm:text-3xl lg:text-4xl';

/**
 * Card title
 */
export const TEXT_CARD_TITLE = 'text-xl sm:text-2xl';

/**
 * Body text - responsive
 */
export const TEXT_BODY = 'text-sm sm:text-base';

/**
 * Caption text - smaller
 */
export const TEXT_CAPTION = 'text-xs sm:text-sm';

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Generate fluid clamp value for spacing
 * @param min - Minimum value in rem
 * @param vw - Viewport width percentage
 * @param max - Maximum value in rem
 */
export function fluid(min: number, vw: number, max: number): string {
  return `clamp(${min}rem, ${vw}vw, ${max}rem)`;
}

/**
 * Responsive container class generator
 * @param maxWidth - Optional max width (will use clamp if number provided)
 */
export function container(maxWidth?: number | string): string {
  const base = 'w-full px-4 sm:px-6 lg:px-8';
  if (typeof maxWidth === 'number') {
    return `${base} max-w-[clamp(20rem,90vw,${maxWidth}rem)]`;
  }
  if (typeof maxWidth === 'string') {
    return `${base} ${maxWidth}`;
  }
  return base;
}

// ============================================
// TYPE DEFINITIONS
// ============================================

export type ResponsiveSpacing = 'sm' | 'md' | 'lg' | 'xl';
export type ResponsiveColumns = 1 | 2 | 3 | 4 | 6;
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Responsive configuration interface
 */
export interface ResponsiveConfig {
  padding?: ResponsiveSpacing;
  columns?: ResponsiveColumns;
  maxWidth?: number;
}

// ============================================
// CONSTANTS - Common patterns
// ============================================

export const PATTERNS = {
  // Full-width container with responsive padding
  container: 'w-full px-4 sm:px-6 lg:px-8',

  // Centered container for text content
  textContainer: 'w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',

  // Card container
  card: 'w-full px-4 py-3 sm:px-6 sm:py-4',

  // Button padding
  buttonPadding: 'px-4 py-2 sm:px-6 sm:py-3',

  // Input padding
  inputPadding: 'px-4 py-2 sm:px-4 sm:py-3',

  // Gap between elements
  gapSmall: 'gap-2 sm:gap-3',
  gapMedium: 'gap-3 sm:gap-4',
  gapLarge: 'gap-4 sm:gap-6 lg:gap-8',
} as const;
