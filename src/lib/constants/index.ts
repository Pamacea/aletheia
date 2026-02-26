/**
 * Centralized constants for Aletheia application
 * Eliminates magic numbers and duplicated string literals
 */

// ============================================================================
// LIMITS
// ============================================================================

export const LIMITS = {
  SLUG: {
    MAX_GENERATION_ATTEMPTS: 10,
    RANDOM_SUFFIX_MIN_LENGTH: 2,
    RANDOM_SUFFIX_MAX_LENGTH: 6,
  },
  XP: {
    MAX_AWARDED_PER_POST: 10,
    MAX_AWARDED_PER_REPLY: 5,
    MAX_DAILY_XP: 100,
  },
  STREAK: {
    WEEK_THRESHOLD: 7,
    MONTH_THRESHOLD: 30,
  },
  FILES: {
    MAX_AVATAR_SIZE_BYTES: 5 * 1024 * 1024, // 5MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  },
  TIME: {
    ONE_WEEK_MS: 7 * 24 * 60 * 60 * 1000,
    ONE_DAY_MS: 24 * 60 * 60 * 1000,
  },
  POST: {
    MAX_TITLE_LENGTH: 200,
    MIN_TITLE_LENGTH: 5,
    MIN_CONTENT_LENGTH: 20,
    MAX_CONTENT_LENGTH: 5000,
    EXCERPT_LENGTH: 200,
  },
  PROFILE: {
    MAX_BIO_LENGTH: 500,
    MAX_USERNAME_LENGTH: 30,
    MIN_USERNAME_LENGTH: 3,
    MAX_NAME_LENGTH: 100,
  },
  COLLECTION: {
    MAX_NAME_LENGTH: 100,
    MAX_DESCRIPTION_LENGTH: 500,
    MIN_NAME_LENGTH: 3,
    MAX_NOTE_LENGTH: 1000,
  },
} as const;

// ============================================================================
// DIRECT EXPORTS
// ============================================================================

export const PROFILE = {
  MAX_BIO_LENGTH: 500,
  MAX_USERNAME_LENGTH: 30,
  MIN_USERNAME_LENGTH: 3,
  MAX_NAME_LENGTH: 100,
} as const;

export const COLLECTION = {
  MAX_NAME_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 500,
  MIN_NAME_LENGTH: 3,
  MAX_NOTE_LENGTH: 1000,
} as const;

export const POST = LIMITS.POST;

// ============================================================================
// MESSAGES
// ============================================================================

export const MESSAGES = {
  AUTH: {
    NOT_AUTHENTICATED: 'Non authentifié',
    MUST_BE_CONNECTED: 'Vous devez être connecté',
    UNAUTHORIZED: 'Unauthorized',
    ADMIN_REQUIRED: 'Accès administrateur requis',
  },
  ERROR: {
    GENERIC: 'Une erreur est survenue',
    NETWORK: 'Erreur de connexion',
    VALIDATION: 'Données invalides',
    NOT_FOUND: 'Non trouvé',
  },
  SUCCESS: {
    CREATED: 'Créé avec succès',
    UPDATED: 'Mis à jour avec succès',
    DELETED: 'Supprimé avec succès',
  },
} as const;

// ============================================================================
// ENTITY TYPES
// ============================================================================

export const ENTITY_TYPES = {
  CONCEPT: 'CONCEPT',
  PHILOSOPHER: 'PHILOSOPHER',
  MOVEMENT: 'MOVEMENT',
  TEXT: 'TEXT',
  SOURCE: 'SOURCE',
  QUOTE: 'QUOTE',
  CURRENT: 'CURRENT',
} as const;

export type EntityType = (typeof ENTITY_TYPES)[keyof typeof ENTITY_TYPES];

// ============================================================================
// COLLECTION SLUG ADJECTIVES & NOUNS
// ============================================================================

export const COLLECTION_SLUG = {
  ADJECTIVES: [
    'ancient',
    'stoic',
    'epicurean',
    'platonic',
    'aristotelian',
    'scholastic',
    'rationalist',
    'empiricist',
    'existential',
    'phenomenological',
    'modern',
    'contemporary',
  ],
  NOUNS: [
    'wisdom',
    'ethics',
    'logic',
    'metaphysics',
    'epistemology',
    'aesthetics',
    'politics',
    'virtue',
    'reason',
    'consciousness',
    'being',
    'truth',
  ],
} as const;
