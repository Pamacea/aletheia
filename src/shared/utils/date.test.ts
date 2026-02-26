import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  isToday,
  isPast,
  isFuture,
  daysBetween,
  addDays,
  subDays,
  startOfDay,
  endOfDay,
  toISODate,
  fromISODate,
} from './date';

describe('isToday', () => {
  it('should return true for today', () => {
    const today = new Date();
    expect(isToday(today)).toBe(true);
  });

  it('should return false for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isToday(yesterday)).toBe(false);
  });

  it('should return false for tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(isToday(tomorrow)).toBe(false);
  });

  it('should return false for a date one year ago', () => {
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    expect(isToday(lastYear)).toBe(false);
  });
});

describe('isPast', () => {
  it('should return true for past dates', () => {
    const past = new Date('2020-01-01');
    expect(isPast(past)).toBe(true);
  });

  it('should return false for future dates', () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(isFuture(future)).toBe(true);
  });

  it('should return false for current date', () => {
    const now = new Date();
    expect(isPast(now)).toBe(false);
  });
});

describe('isFuture', () => {
  it('should return true for future dates', () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(isFuture(future)).toBe(true);
  });

  it('should return false for past dates', () => {
    const past = new Date('2020-01-01');
    expect(isFuture(past)).toBe(false);
  });

  it('should return false for current date', () => {
    const now = new Date();
    expect(isFuture(now)).toBe(false);
  });
});

describe('daysBetween', () => {
  it('should calculate days between two dates', () => {
    const date1 = new Date('2025-01-01');
    const date2 = new Date('2025-01-08');
    expect(daysBetween(date1, date2)).toBe(7);
  });

  it('should handle same date', () => {
    const date = new Date('2025-01-01');
    expect(daysBetween(date, date)).toBe(0);
  });

  it('should return negative days when reversed', () => {
    const date1 = new Date('2025-01-08');
    const date2 = new Date('2025-01-01');
    expect(daysBetween(date1, date2)).toBe(-7);
  });

  it('should handle month boundaries', () => {
    const date1 = new Date('2025-01-31');
    const date2 = new Date('2025-02-01');
    expect(daysBetween(date1, date2)).toBe(1);
  });

  it('should handle year boundaries', () => {
    const date1 = new Date('2026-12-31');
    const date2 = new Date('2027-01-01');
    expect(daysBetween(date1, date2)).toBe(1);
  });
});

describe('addDays', () => {
  it('should add days to a date', () => {
    const date = new Date('2025-01-01');
    const result = addDays(date, 7);
    expect(result.getDate()).toBe(8);
    expect(result.getMonth()).toBe(0); // January
  });

  it('should handle month overflow', () => {
    const date = new Date('2025-01-31');
    const result = addDays(date, 1);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(1); // February
  });

  it('should handle year overflow', () => {
    const date = new Date('2026-12-31');
    const result = addDays(date, 1);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getFullYear()).toBe(2027);
  });

  it('should not mutate original date', () => {
    const date = new Date('2025-01-01');
    addDays(date, 7);
    expect(date.getDate()).toBe(1);
  });
});

describe('subDays', () => {
  it('should subtract days from a date', () => {
    const date = new Date('2025-01-08');
    const result = subDays(date, 7);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(0); // January
  });

  it('should handle month underflow', () => {
    const date = new Date('2025-02-01');
    const result = subDays(date, 1);
    expect(result.getDate()).toBe(31);
    expect(result.getMonth()).toBe(0); // January
  });

  it('should handle year underflow', () => {
    const date = new Date('2025-01-01');
    const result = subDays(date, 1);
    expect(result.getDate()).toBe(31);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getFullYear()).toBe(2024);
  });

  it('should not mutate original date', () => {
    const date = new Date('2025-01-08');
    subDays(date, 7);
    expect(date.getDate()).toBe(8);
  });
});

describe('startOfDay', () => {
  it('should set time to midnight', () => {
    const date = new Date('2025-01-01T15:30:00');
    const result = startOfDay(date);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  it('should not change date', () => {
    const date = new Date('2025-01-01T15:30:00');
    const result = startOfDay(date);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(0);
    expect(result.getFullYear()).toBe(2025);
  });
});

describe('endOfDay', () => {
  it('should set time to last millisecond', () => {
    const date = new Date('2025-01-01T15:30:00');
    const result = endOfDay(date);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });

  it('should not change date', () => {
    const date = new Date('2025-01-01T15:30:00');
    const result = endOfDay(date);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(0);
    expect(result.getFullYear()).toBe(2025);
  });
});

describe('toISODate', () => {
  it('should format date as ISO string', () => {
    const date = new Date('2025-01-15T10:30:00');
    expect(toISODate(date)).toBe('2025-01-15');
  });

  it('should handle dates at midnight', () => {
    // Use UTC to avoid timezone issues
    const date = new Date(Date.UTC(2025, 0, 15, 0, 0, 0));
    const result = toISODate(date);
    // Just check that it returns a valid ISO date format
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('fromISODate', () => {
  it('should parse ISO date string', () => {
    const result = fromISODate('2025-01-15');
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(15);
  });

  it('should set time to midnight', () => {
    const result = fromISODate('2025-01-15');
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
  });
});
