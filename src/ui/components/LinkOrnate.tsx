'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkOrnateProps {
  href: string;
  children: ReactNode;
  className?: string;
  living?: boolean;
  breathe?: boolean;
  style?: React.CSSProperties;
}

export function LinkOrnate({ href, children, className = '', living = false, breathe = false, style }: LinkOrnateProps) {
  return (
    <Link
      href={href}
      className={`
        link-ornate
        ${living ? 'living-word' : ''}
        ${breathe ? 'word-breathe' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </Link>
  );
}

interface ButtonOrnateProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ornate';
}

export function ButtonOrnate({ children, onClick, className = '', variant = 'primary' }: ButtonOrnateProps) {
  const baseClasses = 'btn-decorative cursor-pointer';

  const variantClasses = {
    primary: 'border-[#8b6f3c]',
    secondary: 'border-[#d9d6d0]',
    ornate: 'border-double-ornate',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
