/**
 * @vitest-environment jsdom
 */

import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useIntersectionObserver } from './useIntersectionObserver';

describe('useIntersectionObserver', () => {
  it('should return false when ref is null', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ current: null })
    );

    expect(result.current).toBe(false);
  });

  it('should return false when ref is undefined', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ current: undefined })
    );

    expect(result.current).toBe(false);
  });

  it('should return boolean value when ref is set', () => {
    const element = document.createElement('div');
    const { result } = renderHook(() =>
      useIntersectionObserver({ current: element })
    );

    // Should return a boolean (initially false with our mock)
    expect(typeof result.current).toBe('boolean');
  });
});
