/**
 * @vitest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
  let matchMediaMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    matchMediaMock = vi.fn();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaMock,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return false initially when media query does not match', () => {
    matchMediaMock.mockReturnValue({
      matches: false,
      media: '(min-width: 768px)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(false);
  });

  it('should return true initially when media query matches', () => {
    matchMediaMock.mockReturnValue({
      matches: true,
      media: '(min-width: 768px)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(true);
  });

  it('should update when media query changes', () => {
    let listener: ((event: MediaQueryListEvent) => void) | null = null;

    matchMediaMock.mockReturnValue({
      matches: false,
      media: '(min-width: 768px)',
      addEventListener: vi.fn((event, callback) => {
        if (event === 'change') listener = callback as any;
      }),
      removeEventListener: vi.fn(),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(false);

    // Simulate media query change
    act(() => {
      listener?.({ matches: true, media: '(min-width: 768px)' } as MediaQueryListEvent);
    });

    expect(result.current).toBe(true);
  });

  it('should clean up event listener on unmount', () => {
    const removeEventListener = vi.fn();

    matchMediaMock.mockReturnValue({
      matches: false,
      media: '(min-width: 768px)',
      addEventListener: vi.fn(),
      removeEventListener,
    });

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    unmount();

    expect(removeEventListener).toHaveBeenCalled();
  });
});
