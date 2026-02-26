/**
 * Date utilities for annotations
 */

import { formatDistanceToNow, format } from 'date-fns';
import { fr } from 'date-fns/locale';

/**
 * Format a date as relative time (e.g., "il y a 2 heures")
 */
export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true, locale: fr });
}

/**
 * Format a date as short date (e.g., "15/01/2026")
 */
export function formatShortDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'dd/MM/yyyy', { locale: fr });
}

/**
 * Format a date as long date (e.g., "15 janvier 2026")
 */
export function formatLongDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'dd MMMM yyyy', { locale: fr });
}

/**
 * Format a date as datetime (e.g., "15/01/2026 à 14:30")
 */
export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'dd/MM/yyyy à HH:mm', { locale: fr });
}

/**
 * Get current timestamp for export filenames
 */
export function getExportTimestamp(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Format export date (e.g., "15 janvier 2026 à 14h30")
 */
export function formatExportDate(): string {
  return `${formatLongDate(new Date())} à ${format(new Date(), 'HH:mm', { locale: fr })}`;
}
