'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedButtonProps = HTMLMotionProps<'button'>;

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ duration: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function AnimatedCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -4,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
