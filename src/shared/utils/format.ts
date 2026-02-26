/**
 * Format a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: EUR)
 * @param locale - The locale for formatting (default: fr-FR)
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = 'EUR',
  locale: string = 'fr-FR'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format a date as a localized string
 * @param date - The date to format
 * @param format - The format type (short, long, full)
 * @param locale - The locale for formatting (default: fr-FR)
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  format: 'short' | 'long' | 'full' = 'short',
  locale: string = 'fr-FR'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const formatOptions: Record<string, Intl.DateTimeFormatOptions> = {
    short: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    full: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  };

  const options = formatOptions[format];

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Truncate a string to a maximum length
 * @param str - The string to truncate
 * @param maxLength - The maximum length
 * @param suffix - The suffix to add (default: '...')
 * @returns Truncated string
 */
export function truncate(
  str: string,
  maxLength: number,
  suffix: string = '...'
): string {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Format a number with thousands separator
 * @param num - The number to format
 * @param locale - The locale for formatting (default: fr-FR)
 * @returns Formatted number string
 */
export function formatNumber(num: number, locale: string = 'fr-FR'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Format a relative time (e.g., "2 hours ago")
 * @param date - The date to compare
 * @param locale - The locale for formatting (default: fr-FR)
 * @returns Relative time string
 */
export function formatRelativeTime(
  date: Date | string,
  locale: string = 'fr-FR'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  const intervals = [
    { unit: 'year' as const, seconds: 31536000 },
    { unit: 'month' as const, seconds: 2592000 },
    { unit: 'day' as const, seconds: 86400 },
    { unit: 'hour' as const, seconds: 3600 },
    { unit: 'minute' as const, seconds: 60 },
  ];

  for (const { unit, seconds } of intervals) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return rtf.format(-interval, unit);
    }
  }

  return rtf.format(-diffInSeconds, 'second');
}
