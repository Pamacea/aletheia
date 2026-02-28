'use client';

import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

/**
 * Button variant styles
 */
export type ButtonOrnateVariant = 'primary' | 'secondary' | 'ornate';

/**
 * Button size options
 */
export type ButtonOrnateSize = 'sm' | 'md' | 'lg';

/**
 * Props for ButtonOrnate component
 */
export interface ButtonOrnateProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Button variant style
   * @default 'primary'
   */
  variant?: ButtonOrnateVariant;

  /**
   * Button size
   * @default 'md'
   */
  size?: ButtonOrnateSize;

  /**
   * Icon to display on the left side of the text
   */
  iconLeft?: ReactNode;

  /**
   * Icon to display on the right side of the text
   */
  iconRight?: ReactNode;

  /**
   * Display at full width
   * @default false
   */
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonOrnateVariant, string> = {
  primary: 'border-[#8b6f3c]',
  secondary: 'border-[#d9d6d0]',
  ornate: 'border-double-ornate',
};

const sizeClasses: Record<ButtonOrnateSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/**
 * ButtonOrnate - Custom ornate button component for Aletheia
 *
 * Provides a decorative button style with ornate borders matching the site's philosophical theme.
 * Supports variants, sizes, icons, and full width.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <ButtonOrnate>Click me</ButtonOrnate>
 *
 * // With variant
 * <ButtonOrnate variant="ornate">Ornate Button</ButtonOrnate>
 *
 * // With icon
 * <ButtonOrnate iconLeft={<Icon />}>With Icon</ButtonOrnate>
 *
 * // Full width
 * <ButtonOrnate fullWidth>Full Width</ButtonOrnate>
 *
 * // Different sizes
 * <ButtonOrnate size="sm">Small</ButtonOrnate>
 * <ButtonOrnate size="lg">Large</ButtonOrnate>
 * ```
 */
export const ButtonOrnate = forwardRef<HTMLButtonElement, ButtonOrnateProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      fullWidth = false,
      disabled = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'btn-decorative cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2 font-serif';

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const widthClasses = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          disabledClasses,
          widthClasses,
          className
        )}
        {...props}
      >
        {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

ButtonOrnate.displayName = 'ButtonOrnate';
