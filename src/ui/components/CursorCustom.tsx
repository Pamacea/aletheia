'use client';

import { useEffect, useRef } from 'react';

export function CursorCustom() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
    };

    // Animate cursor with smooth lerp
    const animateCursor = () => {
      const ease = 0.15;
      cursorXRef.current += (mouseXRef.current - cursorXRef.current) * ease;
      cursorYRef.current += (mouseYRef.current - cursorYRef.current) * ease;

      cursor.style.left = `${cursorXRef.current}px`;
      cursor.style.top = `${cursorYRef.current}px`;

      requestAnimationFrame(animateCursor);
    };

    // Expand cursor on interactive elements
    const handleMouseEnter = () => {
      cursor.classList.add('expanded');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('expanded');
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    // Add hover effect to all links and buttons
    const interactiveElements = document.querySelectorAll(
      'a, button, .living-word, .nav-item-ornate, .organic-card, .timeline-item-organic'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-custom"
      aria-hidden="true"
    />
  );
}
