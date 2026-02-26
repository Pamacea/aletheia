/**
 * @vitest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    expect(result.current).toBe('initial');
  });

  it('should debounce value updates', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );

    // Initial value
    expect(result.current).toBe('initial');

    // Update value
    rerender({ value: 'updated', delay: 500 });

    // Should still be initial before delay
    expect(result.current).toBe('initial');

    // Fast-forward past delay
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should now be updated
    expect(result.current).toBe('updated');
  });

  it('should reset timer on rapid updates', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );

    // First update
    rerender({ value: 'update1', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Second update before first completes
    rerender({ value: 'update2', delay: 500 });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Should still be initial
    expect(result.current).toBe('initial');

    // Fast-forward complete delay
    act(() => {
      vi.advanceTimersByTime(200);
    });

    // Should now be update2
    expect(result.current).toBe('update2');
  });

  it('should handle delay changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );

    rerender({ value: 'updated', delay: 1000 });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should not update with shorter time
    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should update with full new delay
    expect(result.current).toBe('updated');
  });
});
