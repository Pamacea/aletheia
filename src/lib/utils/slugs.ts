/**
 * Unified slug and URL processing utilities
 */

/**
 * Convert a name to a URL-safe slug
 * Use this for new slugs being created
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .trim();
}

/**
 * Encode a name for URL parameters
 * Use this for existing names that might have special characters
 */
export function encodeName(text: string): string {
  return encodeURIComponent(text);
}

/**
 * Decode a URL parameter back to original name
 */
export function decodeName(text: string): string {
  return decodeURIComponent(text);
}

/**
 * Build a href for a philosopher by name
 */
export function philosopherHref(name: string): string {
  return `/philosophes/${encodeName(name)}`;
}

/**
 * Build a href for a movement by slug
 */
export function movementHref(slug: string): string {
  return `/courants/${slug}`;
}

/**
 * Build a href for a concept by slug
 */
export function conceptHref(slug: string): string {
  return `/conceptuaire/${slug}`;
}
