/**
 * Flashcards Utilities
 */

import type { FlashcardType } from '@prisma/client';

/**
 * Parse cloze text to extract blanks
 */
export function parseClozeText(text: string): { text: string; blanks: string[] } {
  const regex = /{{(.*?)}}/g;
  const blanks: string[] = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    blanks.push(match[1]);
  }

  return { text, blanks };
}

/**
 * Format cloze text for display (with blanks hidden)
 */
export function formatClozeForDisplay(text: string): string {
  return text.replace(/{{(.*?)}}/g, (match) => {
    const length = match.length - 4; // Subtract {{}}
    return '_____'.repeat(Math.max(3, Math.min(length / 2, 8)));
  });
}

/**
 * Format cloze text with answers revealed
 */
export function formatClozeWithAnswers(text: string): string {
  return text.replace(/{{(.*?)}}/g, '<span class="font-bold text-green-700">$1</span>');
}

/**
 * Validate flashcard data based on type
 */
export function validateFlashcardData(type: FlashcardType, question: string, answer: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!question.trim()) {
    errors.push('Question is required');
  }

  if (!answer.trim()) {
    errors.push('Answer is required');
  }

  if (type === 'CLOZE') {
    const clozeRegex = /{{(.*?)}}/g;
    const matches = question.match(clozeRegex);
    if (!matches || matches.length === 0) {
      errors.push('Cloze cards must have at least one blank marked with {{text}}');
    }
  }

  if (type === 'QUOTE') {
    try {
      const parsed = JSON.parse(answer);
      if (!parsed.quote) {
        errors.push('Quote cards must have a "quote" field in JSON');
      }
    } catch {
      errors.push('Quote cards must have a valid JSON answer with "quote" field');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Calculate XP reward for a review
 */
export function calculateXPReward(quality: number, streak: number, timeTaken?: number): number {
  const baseXP = 10;
  const qualityMultiplier = quality / 5;
  const streakBonus = Math.min(streak * 2, 50); // Cap at 50 bonus

  // Time bonus: faster answers get slight bonus (but not too much to encourage accuracy)
  let timeBonus = 0;
  if (timeTaken && quality >= 4) {
    if (timeTaken < 5000) timeBonus = 5; // Under 5 seconds
    else if (timeTaken < 10000) timeBonus = 3; // Under 10 seconds
    else if (timeTaken < 20000) timeBonus = 1; // Under 20 seconds
  }

  return Math.round(baseXP * qualityMultiplier + streakBonus + timeBonus);
}

/**
 * Format time interval for display
 */
export function formatInterval(days: number): string {
  if (days === 0) return 'Now';
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  if (days < 30) return `${Math.round(days / 7)} week${days >= 14 ? 's' : ''}`;
  if (days < 365) return `${Math.round(days / 30)} month${days >= 60 ? 's' : ''}`;
  return `${Math.round(days / 365)} year${days >= 730 ? 's' : ''}`;
}

/**
 * Get flashcard type icon component name
 */
export function getCardTypeIcon(type: FlashcardType): string {
  const icons = {
    BASIC: 'BookOpen',
    CLOZE: 'FileText',
    CONCEPT: 'Brain',
    QUOTE: 'Quote',
    ESSAY: 'Lightbulb',
  };
  return icons[type];
}

/**
 * Get suggested tags based on content
 */
export function suggestTags(question: string, answer: string, conceptName: string): string[] {
  const tags: string[] = [];
  const text = `${question} ${answer} ${conceptName}`.toLowerCase();

  // Philosophy-related keywords
  const keywordTags = {
    metaphysics: ['metaphysics', 'being', 'existence', 'reality', 'ontology', 'substance'],
    epistemology: ['knowledge', 'epistemology', 'truth', 'justification', 'belief', 'certainty'],
    ethics: ['ethics', 'moral', 'virtue', 'good', 'evil', 'right', 'wrong', 'duty'],
    logic: ['logic', 'reason', 'argument', 'validity', 'syllogism', 'inference'],
    aesthetics: ['beauty', 'art', 'aesthetics', 'taste', 'sublime'],
    political: ['politics', 'justice', 'state', 'government', 'power', 'authority'],
    'ancient-greek': ['plato', 'aristotle', 'socrates', 'stoic', 'epicurean'],
    'modern-philosophy': ['descartes', 'kant', 'locke', 'hume', 'spinoza'],
    'contemporary': ['nietzsche', 'heidegger', 'wittgenstein', 'foucault', 'derrida'],
  };

  for (const [tag, keywords] of Object.entries(keywordTags)) {
    if (keywords.some((keyword) => text.includes(keyword))) {
      tags.push(tag);
    }
  }

  return tags.slice(0, 3); // Return max 3 suggested tags
}

/**
 * Check if card is due today
 */
export function isDueToday(nextReview: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const reviewDate = new Date(nextReview);
  reviewDate.setHours(0, 0, 0, 0);
  return reviewDate.getTime() === today.getTime();
}

/**
 * Get card status based on progression
 */
export function getCardStatus(progression: {
  repetitions: number;
  nextReview: Date;
  status: string;
}): 'new' | 'learning' | 'review' | 'mastered' {
  if (!progression || progression.repetitions === 0) return 'new';
  if (progression.repetitions >= 5) return 'mastered';
  if (progression.nextReview <= new Date()) return 'review';
  return 'learning';
}

/**
 * Generate a mnemonic hint for a concept
 */
export function generateMnemonicHint(concept: string, definition: string): string {
  const words = concept.split(' ');
  const acronym = words.map((w) => w[0]).join('').toUpperCase();

  // Simple first-letter mnemonic
  if (words.length > 1) {
    return `Hint: First letters form "${acronym}"`;
  }

  // Word length hint
  return `Hint: ${words.length} word${words.length > 1 ? 's' : ''} in the answer`;
}
