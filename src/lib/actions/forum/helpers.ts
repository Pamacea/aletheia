import { POST } from '@/lib/constants';

/**
 * Helper functions for forum operations
 */

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    + '-' + Date.now();
}

/**
 * Extract mentions from content (@username)
 */
export function extractMentions(content: string): string[] {
  const mentionRegex = /@(\w+)/g;
  const mentions: string[] = [];
  let match;
  while ((match = mentionRegex.exec(content)) !== null) {
    mentions.push(match[1]);
  }
  return mentions;
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string): string {
  return content
    .replace(/[#*`_\[\]]/g, '') // Remove markdown
    .substring(0, POST.EXCERPT_LENGTH)
    .trim() + (content.length > POST.EXCERPT_LENGTH ? '...' : '');
}
