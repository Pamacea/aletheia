/**
 * Check if a date is today
 * @param date - The date to check
 * @returns True if the date is today
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Check if a date is in the past
 * @param date - The date to check
 * @returns True if the date is in the past
 */
export function isPast(date: Date): boolean {
  return date < new Date();
}

/**
 * Check if a date is in the future
 * @param date - The date to check
 * @returns True if the date is in the future
 */
export function isFuture(date: Date): boolean {
  return date > new Date();
}

/**
 * Get the difference in days between two dates
 * @param date1 - First date
 * @param date2 - Second date
 * @returns Number of days difference
 */
export function daysBetween(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round((date2.getTime() - date1.getTime()) / oneDay);
}

/**
 * Add days to a date
 * @param date - The date to add to
 * @param days - Number of days to add
 * @returns New date with days added
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Subtract days from a date
 * @param date - The date to subtract from
 * @param days - Number of days to subtract
 * @returns New date with days subtracted
 */
export function subDays(date: Date, days: number): Date {
  return addDays(date, -days);
}

/**
 * Get the start of day for a given date
 * @param date - The date
 * @returns New date set to midnight
 */
export function startOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Get the end of day for a given date
 * @param date - The date
 * @returns New date set to last millisecond
 */
export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Format a date as ISO string (YYYY-MM-DD)
 * @param date - The date to format
 * @returns ISO formatted date string
 */
export function toISODate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Parse an ISO date string (YYYY-MM-DD)
 * @param isoString - The ISO string to parse
 * @returns Date object
 */
export function fromISODate(isoString: string): Date {
  return new Date(isoString + 'T00:00:00');
}
