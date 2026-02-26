import { describe, it, expect } from 'vitest';
import { formatCurrency, formatDate, truncate, formatNumber, formatRelativeTime } from './format';

describe('formatCurrency', () => {
  it('should format EUR in French locale', () => {
    const result = formatCurrency(99.99, 'EUR', 'fr-FR');
    expect(result).toContain('99');
    expect(result).toContain('€');
  });

  it('should format USD in English locale', () => {
    const result = formatCurrency(1000.50, 'USD', 'en-US');
    expect(result).toContain('000');
    expect(result).toContain('$');
  });

  it('should handle zero', () => {
    const result = formatCurrency(0, 'EUR', 'fr-FR');
    expect(result).toContain('0');
    expect(result).toContain('€');
  });

  it('should handle negative values', () => {
    const result = formatCurrency(-50, 'EUR', 'fr-FR');
    expect(result).toContain('50');
    expect(result).toContain('€');
  });

  it('should use default currency and locale', () => {
    const result = formatCurrency(123.45);
    expect(result).toContain('123');
  });
});

describe('formatDate', () => {
  it('should format date in short format', () => {
    const date = new Date('2025-02-26T10:30:00Z');
    const result = formatDate(date, 'short', 'fr-FR');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  it('should format date in long format', () => {
    const date = new Date('2025-02-26');
    const result = formatDate(date, 'long', 'fr-FR');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  it('should format date in full format', () => {
    const date = new Date('2025-02-26');
    const result = formatDate(date, 'full', 'fr-FR');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  it('should use default format when not specified', () => {
    const date = new Date('2025-02-26');
    const result = formatDate(date);
    expect(result).toBeTruthy();
  });

  it('should handle string dates', () => {
    const result = formatDate('2025-02-26', 'short', 'fr-FR');
    expect(result).toBeTruthy();
  });
});

describe('truncate', () => {
  it('should truncate long text with ellipsis', () => {
    const result = truncate('Hello world this is a long text', 10);
    expect(result.length).toBe(10);
    expect(result).toContain('...');
  });

  it('should not truncate short text', () => {
    const result = truncate('Hi', 10);
    expect(result).toBe('Hi');
  });

  it('should handle empty string', () => {
    const result = truncate('', 10);
    expect(result).toBe('');
  });

  it('should handle exact length', () => {
    const result = truncate('Hello', 5);
    expect(result).toBe('Hello');
  });

  it('should use custom ellipsis', () => {
    const result = truncate('Hello world', 10, '---');
    expect(result).toBe('Hello w---');
  });

  it('should handle text shorter than suffix', () => {
    const result = truncate('Hi', 10, '---very long suffix---');
    expect(result).toBe('Hi');
  });
});

describe('formatNumber', () => {
  it('should format numbers with thousands separator', () => {
    const result = formatNumber(1234567.89, 'fr-FR');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  it('should handle zero', () => {
    const result = formatNumber(0, 'fr-FR');
    expect(result).toContain('0');
  });

  it('should handle negative numbers', () => {
    const result = formatNumber(-1234.56, 'fr-FR');
    expect(result).toContain('234');
    expect(result).toContain('-');
  });
});

describe('formatRelativeTime', () => {
  it('should format time relative to now', () => {
    const past = new Date(Date.now() - 3600000); // 1 hour ago
    const result = formatRelativeTime(past, 'fr-FR');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  it('should handle string dates', () => {
    const result = formatRelativeTime('2025-01-01', 'fr-FR');
    expect(result).toBeTruthy();
  });
});
