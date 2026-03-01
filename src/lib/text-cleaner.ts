/**
 * Text Cleaner Utilities
 * Nettoie les textes provenant d'Obsidian (markdown, formatage)
 * Préserve le sens philosophique tout en normalisant le format
 */

// ============================================================================
// TYPES
// ============================================================================

export interface Source {
  quotes?: string[];
  reference: string;
}

export interface KeyFigure {
  quotes?: string[];
  contribution: string;
}

export interface Reasoning {
  premises: string[];
  conclusion: string;
  objections: Array<{ philosopher: string; objection: string }>;
  responses: Array<{ philosopher: string; response: string }>;
}

export interface ConceptData {
  definition?: string;
  shortDefinition?: string;
  description?: string;
  examples?: string[];
  sources?: Source[];
  keyFigures?: Array<KeyFigure & { quotes?: string[] }>;
  reasoning?: Reasoning[];
  variations?: Array<{ description: string }>;
  keyPrinciples?: string[];
  philosophicalDefinition?: {
    analysis?: string;
    distinctions?: string[];
    implications?: string;
  };
  origins?: {
    context?: string;
    predecessors?: string[];
    reactionAgainst?: string[];
  };
  criticisms?: string[];
  influence?: {
    on?: string[];
    in?: string[];
  };
  metadata?: {
    representativeWorks?: string[];
  };
}

export interface PhilosopherData {
  biography?: string;
  keyIdeas?: string[];
  majorWorks?: Array<{ description: string }>;
}

export interface MovementData {
  description?: string;
  shortDefinition?: string;
  keyPrinciples?: string[];
  origins?: {
    context?: string;
    predecessors?: string[];
    reactionAgainst?: string[];
  };
  variations?: Array<{ description: string }>;
  criticisms?: string[];
  influence?: {
    on?: string[];
    in?: string[];
  };
  metadata?: {
    representativeWorks?: string[];
  };
}

// ============================================================================
// MARKDOWN CLEANING
// ============================================================================

/**
 * Nettoie le markdown d'un texte
 * - **gras** → texte
 * - *italique* → texte
 * - ## Titres → texte
 * - [liens](url) → texte
 * - `code` → texte
 */
export function cleanMarkdown(text: string): string {
  if (!text) return '';

  return text
    // Bold: **text** → text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    // Italic: *text* → text
    .replace(/\*(.+?)\*/g, '$1')
    // Headers: ### Title → Title
    .replace(/^#{1,6}\s+/gm, '')
    // Links: [text](url) → text
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    // Inline code: `code` → code
    .replace(/`([^`]+)`/g, '$1')
    // Code blocks: ```code``` → code (simple removal)
    .replace(/```[\s\S]*?```/g, (match) => {
      // Remove the ``` markers but keep content
      return match.replace(/^```[\w]*\n?/gm, '').replace(/```$/g, '');
    })
    // Horizontal rules: --- or *** → empty
    .replace(/^(\-{3,}|\*{3,})$/gm, '')
    // Blockquotes: > text → text
    .replace(/^>\s+/gm, '')
    // Strikethrough: ~~text~~ → text
    .replace(/~~(.+?)~~/g, '$1')
    // Multiple newlines (max 2)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ============================================================================
// QUOTES CLEANING
// ============================================================================

/**
 * Nettoie les guillemets courbés français et internationaux
 * « » → "
 * " " → "
 * ‹ › → '
 * ' ' → '
 */
export function cleanQuotes(text: string): string {
  if (!text) return '';

  return text
    // French guillemets (with spaces)
    .replace(/\s*«\s*/g, '"')
    .replace(/\s*»\s*/g, '"')
    // Curly double quotes
    .replace(/[""]/g, '"')
    .replace(/[""]/g, '"')
    // French single guillemets (with spaces)
    .replace(/\s*‹\s*/g, "'")
    .replace(/\s*›\s*/g, "'")
    // Curly single quotes
    .replace(/['']/g, "'")
    .replace(/['']/g, "'")
    // Apostrophes
    .replace(/'/g, "'")
    .replace(/'/g, "'");
}

// ============================================================================
// WHITESPACE CLEANING
// ============================================================================

/**
 * Nettoie les espaces excessives
 * - Espaces multiples → espace simple
 * - Espaces avant/après ponctuation → supprimées
 */
export function cleanWhitespace(text: string): string {
  if (!text) return '';

  return text
    // Multiple spaces → single space (but preserve newlines)
    .replace(/[ \t]+/g, ' ')
    // Spaces before punctuation (but not before hyphens)
    .replace(/\s+([.,;!?:)])](?!\w)/g, '$1')
    // Spaces after opening parenthesis/quote
    .replace(/([(\["'])\s+/g, '$1')
    // Trim lines
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n')
    .trim();
}

// ============================================================================
// COMPREHENSIVE CLEANING
// ============================================================================

/**
 * Nettoie et normalise un texte complet
 */
export function cleanText(text: string): string {
  if (!text) return '';

  return cleanWhitespace(cleanQuotes(cleanMarkdown(text)));
}

/**
 * Nettoie un tableau de citations
 */
export function cleanQuotesArray(quotes: string[]): string[] {
  if (!quotes || !Array.isArray(quotes)) return [];
  return quotes.map(cleanText).filter(Boolean);
}

// ============================================================================
// DATA STRUCTURES CLEANING
// ============================================================================

/**
 * Nettoie les données d'un concept
 */
export function cleanConceptData(data: ConceptData): ConceptData {
  const cleaned: ConceptData = { ...data };

  // Text fields
  if (cleaned.definition) {
    cleaned.definition = cleanText(cleaned.definition);
  }
  if (cleaned.shortDefinition) {
    cleaned.shortDefinition = cleanText(cleaned.shortDefinition);
  }
  if (cleaned.description) {
    cleaned.description = cleanText(cleaned.description);
  }

  // Philosophical definition
  if (cleaned.philosophicalDefinition) {
    const { analysis, distinctions, implications } = cleaned.philosophicalDefinition;
    cleaned.philosophicalDefinition = {
      analysis: analysis ? cleanText(analysis) : undefined,
      distinctions: distinctions?.map(cleanText),
      implications: implications ? cleanText(implications) : undefined
    };
  }

  // Arrays
  if (cleaned.examples) {
    cleaned.examples = cleaned.examples.map(cleanText);
  }
  if (cleaned.keyPrinciples) {
    cleaned.keyPrinciples = cleaned.keyPrinciples.map(cleanText);
  }

  // Origins
  if (cleaned.origins) {
    const { context, predecessors, reactionAgainst } = cleaned.origins;
    cleaned.origins = {
      context: context ? cleanText(context) : undefined,
      predecessors: predecessors?.map(cleanText),
      reactionAgainst: reactionAgainst?.map(cleanText)
    };
  }

  // Sources
  if (cleaned.sources) {
    cleaned.sources = cleaned.sources.map(source => ({
      ...source,
      reference: cleanText(source.reference),
      quotes: source.quotes?.map(cleanText)
    }));
  }

  // Key figures
  if (cleaned.keyFigures) {
    cleaned.keyFigures = cleaned.keyFigures.map(figure => ({
      ...figure,
      contribution: cleanText(figure.contribution),
      quotes: figure.quotes?.map(cleanText)
    }));
  }

  // Reasoning
  if (cleaned.reasoning) {
    cleaned.reasoning = cleaned.reasoning.map(reasoning => ({
      ...reasoning,
      premises: reasoning.premises.map(cleanText),
      conclusion: cleanText(reasoning.conclusion),
      objections: reasoning.objections.map(obj => ({
        ...obj,
        objection: cleanText(obj.objection)
      })),
      responses: reasoning.responses.map(res => ({
        ...res,
        response: cleanText(res.response)
      }))
    }));
  }

  // Variations
  if (cleaned.variations) {
    cleaned.variations = cleaned.variations.map(variation => ({
      ...variation,
      description: cleanText(variation.description)
    }));
  }

  // Criticisms
  if (cleaned.criticisms) {
    cleaned.criticisms = cleaned.criticisms.map(cleanText);
  }

  // Influence
  if (cleaned.influence) {
    const { on, in: inAreas } = cleaned.influence;
    cleaned.influence = {
      on: on?.map(cleanText),
      in: inAreas?.map(cleanText)
    };
  }

  // Metadata
  if (cleaned.metadata?.representativeWorks) {
    cleaned.metadata.representativeWorks = cleaned.metadata.representativeWorks.map(cleanText);
  }

  return cleaned;
}

/**
 * Nettoie les données d'un philosophe
 */
export function cleanPhilosopherData(data: PhilosopherData): PhilosopherData {
  const cleaned: PhilosopherData = { ...data };

  if (cleaned.biography) {
    cleaned.biography = cleanText(cleaned.biography);
  }

  if (cleaned.keyIdeas) {
    cleaned.keyIdeas = cleaned.keyIdeas.map(cleanText);
  }

  if (cleaned.majorWorks) {
    cleaned.majorWorks = cleaned.majorWorks.map(work => ({
      ...work,
      description: cleanText(work.description)
    }));
  }

  return cleaned;
}

/**
 * Nettoie les données d'un mouvement
 */
export function cleanMovementData(data: MovementData): MovementData {
  const cleaned: MovementData = { ...data };

  if (cleaned.description) {
    cleaned.description = cleanText(cleaned.description);
  }
  if (cleaned.shortDefinition) {
    cleaned.shortDefinition = cleanText(cleaned.shortDefinition);
  }

  if (cleaned.keyPrinciples) {
    cleaned.keyPrinciples = cleaned.keyPrinciples.map(cleanText);
  }

  if (cleaned.origins) {
    const { context, predecessors, reactionAgainst } = cleaned.origins;
    cleaned.origins = {
      context: context ? cleanText(context) : undefined,
      predecessors: predecessors?.map(cleanText),
      reactionAgainst: reactionAgainst?.map(cleanText)
    };
  }

  if (cleaned.variations) {
    cleaned.variations = cleaned.variations.map(variation => ({
      ...variation,
      description: cleanText(variation.description)
    }));
  }

  if (cleaned.criticisms) {
    cleaned.criticisms = cleaned.criticisms.map(cleanText);
  }

  if (cleaned.influence) {
    const { on, in: inAreas } = cleaned.influence;
    cleaned.influence = {
      on: on?.map(cleanText),
      in: inAreas?.map(cleanText)
    };
  }

  if (cleaned.metadata?.representativeWorks) {
    cleaned.metadata.representativeWorks = cleaned.metadata.representativeWorks.map(cleanText);
  }

  return cleaned;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Vérifie si un texte contient du markdown
 */
export function hasMarkdown(text: string): boolean {
  if (!text) return false;

  const markdownPatterns = [
    /\*\*.+?\*\*/,  // Bold
    /\*.+?\*/,      // Italic
    /^#{1,6}\s+/m,  // Headers
    /\[.+?\]\(.+?\)/, // Links
    /`[^`]+`/,      // Inline code
    /```[\s\S]*?```/, // Code blocks
    /^\> /m,        // Blockquotes
    /~~.+?~~/       // Strikethrough
  ];

  return markdownPatterns.some(pattern => pattern.test(text));
}

/**
 * Extrait les statistiques de nettoyage
 */
export function getCleaningStats(original: string, cleaned: string): {
  originalLength: number;
  cleanedLength: number;
  removedChars: number;
  removedPercentage: number;
} {
  const originalLength = original.length;
  const cleanedLength = cleaned.length;
  const removedChars = originalLength - cleanedLength;
  const removedPercentage = (removedChars / originalLength) * 100;

  return {
    originalLength,
    cleanedLength,
    removedChars,
    removedPercentage: Math.round(removedPercentage * 100) / 100
  };
}

/**
 * Nettoie en préservant certains marqueurs markdown
 */
export function cleanMarkdownPreserving(text: string, preserve: {
  bold?: boolean;
  italic?: boolean;
  links?: boolean;
  code?: boolean;
} = {}): string {
  if (!text) return '';

  let result = text;

  // Always remove headers first (before checking other patterns)
  result = result.replace(/^#{1,6}\s+/gm, '');

  // Remove what should be removed
  if (!preserve.code) {
    result = result.replace(/`([^`]+)`/g, '$1');
    result = result.replace(/```[\s\S]*?```/g, '');
  }
  if (!preserve.links) {
    result = result.replace(/\[(.+?)\]\(.+?\)/g, '$1');
  }
  if (!preserve.bold) {
    result = result.replace(/\*\*(.+?)\*\*/g, '$1');
  }
  if (!preserve.italic) {
    result = result.replace(/\*(.+?)\*/g, '$1');
  }

  // Always remove blockquotes, strikethrough, etc.
  result = result
    .replace(/^>\s+/gm, '')
    .replace(/~~(.+?)~~/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return result;
}
