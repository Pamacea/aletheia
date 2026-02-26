'use client';

import { ReactNode } from 'react';

interface ButtonOrnateProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ornate';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function ButtonOrnate({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false
}: ButtonOrnateProps) {
  const baseClasses = 'btn-decorative cursor-pointer transition-all duration-300';

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const variantClasses = {
    primary: 'border-[#8b6f3c]',
    secondary: 'border-[#d9d6d0]',
    ornate: 'border-double-ornate',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}
