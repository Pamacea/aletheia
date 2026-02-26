/**
 * @vitest-environment jsdom
 */

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should initialize with default value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default-value'));
    const [value] = result.current;

    expect(value).toBe('default-value');
  });

  it('should load existing value from localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify('stored-value'));

    const { result } = renderHook(() => useLocalStorage('test-key', 'default-value'));
    const [value] = result.current;

    expect(value).toBe('stored-value');
  });

  it('should save to localStorage on update', () => {
    const { result } = renderHook(() => useLocalStorage<string>('test-key', 'default'));

    act(() => {
      const [, setValue] = result.current;
      setValue('updated-value');
    });

    const [value] = result.current;
    expect(value).toBe('updated-value');
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('updated-value'));
  });

  it('should handle complex objects', () => {
    const complexObject = { user: { name: 'John', age: 30 }, settings: { theme: 'dark' } };

    const { result } = renderHook(() => useLocalStorage('user-data', complexObject));
    const [value] = result.current;

    expect(value).toEqual(complexObject);
  });

  it('should handle null values', () => {
    const { result } = renderHook(() => useLocalStorage('null-key', 'initial'));

    act(() => {
      const [, setValue] = result.current;
      setValue(null);
    });

    const [value] = result.current;
    expect(value).toBeNull();
    expect(localStorage.getItem('null-key')).toBe(JSON.stringify(null));
  });

  it('should store undefined value in localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify('value'));

    const { result } = renderHook(() => useLocalStorage<string>('test-key', 'default'));

    act(() => {
      const [, setValue] = result.current;
      setValue(undefined as any);
    });

    // localStorage stores 'undefined' as a string
    expect(localStorage.getItem('test-key')).toBe('undefined');
  });
});
