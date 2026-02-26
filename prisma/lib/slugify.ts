/**
 * Slugify utility function
 * Converts text to URL-friendly slug
 */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, '') // Remove trailing hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}
