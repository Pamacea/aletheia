'use client';

import Link from 'next/link';
import { forwardRef, type ReactNode, type LinkHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

/**
 * Props for LinkOrnate component
 */
export interface LinkOrnateProps extends Omit<LinkHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /**
   * Link destination
   */
  href: string;

  /**
   * Link content
   */
  children: ReactNode;

  /**
   * Apply living word animation
   * @default false
   */
  living?: boolean;

  /**
   * Apply breathe animation
   * @default false
   */
  breathe?: boolean;

  /**
   * Variant style matching ButtonOrnate
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ornate';
}

/**
 * LinkOrnate - Custom ornate link component for Aletheia
 *
 * Provides an ornate link style matching the site's philosophical theme.
 * Supports living word animations and variant styles.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <LinkOrnate href="/about">About</LinkOrnate>
 *
 * // With living word animation
 * <LinkOrnate href="/philosophy" living>
 *   Philosophy
 * </LinkOrnate>
 *
 * // With breathe animation
 * <LinkOrnate href="/concepts" breathe>
 *   Concepts
 * </LinkOrnate>
 *
 * // With variant
 * <LinkOrnate href="/contact" variant="ornate">
 *   Contact
 * </LinkOrnate>
 * ```
 */
export const LinkOrnate = forwardRef<HTMLAnchorElement, LinkOrnateProps>(
  (
    {
      href,
      children,
      className,
      living = false,
      breathe = false,
      variant = 'primary',
      style,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary: 'border-[#8b6f3c]',
      secondary: 'border-[#d9d6d0]',
      ornate: 'border-double-ornate',
    };

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          'link-ornate transition-all duration-300',
          living && 'living-word',
          breathe && 'word-breathe',
          variantClasses[variant],
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

LinkOrnate.displayName = 'LinkOrnate';
