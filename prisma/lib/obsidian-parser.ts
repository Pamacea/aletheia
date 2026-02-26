/**
 * Obsidian Parser Utilities
 * Parses Obsidian markdown files with YAML frontmatter and wiki-links
 */

import matter from 'gray-matter';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// ============================================================================
// TYPES
// ============================================================================

export interface ObsidianFile {
  path: string;
  type: 'concept' | 'philosophe' | 'courant' | 'citation' | 'unknown';
  frontmatter: any;
  content: string;
  slug: string;
}

export interface ParsedConcept {
  name: string;
  slug: string;
  definition?: string;
  shortDefinition?: string;
  etymology?: any;
  keyAuthors?: any;
  examples?: any;
  connections?: any;
  variations?: any;
  tags: string[];
  category?: string;
  status?: string;
  wikiLinks: string[];
  citations?: any[];
  flashcards?: any[];
}

export interface ParsedPhilosopher {
  name: string;
  slug: string;
  fullName?: string;
  dates?: string;
  birthYear?: number;
  deathYear?: number;
  nationality?: string;
  century?: string;
  biography?: string;
  mainMovements: string[];
  disciplines: string[];
  keyIdeas?: any;
  influences?: any;
  legacy?: any;
  works?: any[];
  citations?: any[];
  wikiLinks: string[];
  tags: string[];
}

export interface ParsedMovement {
  name: string;
  slug: string;
  description?: string;
  shortDefinition?: string;
  period?: string;
  origins?: any;
  keyPrinciples?: any;
  keyPhilosophers: string[];
  keyConcepts: string[];
  variations?: any;
  criticisms?: any;
  influence?: any;
  category?: string;
  wikiLinks: string[];
  tags: string[];
}

export interface ParsedCitation {
  text: string;
  slug: string;
  author: string;
  source?: string;
  context?: string;
  analysis?: string;
  concepts: string[];
  dateAdded?: string;
  tags: string[];
  wikiLinks: string[];
}

// ============================================================================
// FRONTMATTER PARSER
// ============================================================================

/**
 * Parse YAML frontmatter from markdown file
 */
export function parseFrontmatter(filePath: string): { frontmatter: any; content: string } {
  const fileContent = readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content: content.trim()
  };
}

/**
 * Detect file type from frontmatter
 */
export function detectFileType(frontmatter: any): ObsidianFile['type'] {
  const type = frontmatter.type;

  if (type === 'concept') return 'concept';
  if (type === 'philosophe') return 'philosophe';
  if (type === 'courant') return 'courant';
  if (type === 'citation') return 'citation';

  return 'unknown';
}

/**
 * Extract slug from file path
 */
export function extractSlug(filePath: string, vaultRoot: string): string {
  const relativePath = filePath.replace(vaultRoot, '').replace(/\\/g, '/');
  const fileName = relativePath.split('/').pop() || '';
  return fileName.replace(/\.md$/, '');
}

// ============================================================================
// WIKI-LINK EXTRACTOR
// ============================================================================

/**
 * Extract all wiki-links from content
 * Matches [[link]] or [[link|alias]]
 */
export function extractWikiLinks(content: string): string[] {
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
  const links: string[] = [];
  let match;

  while ((match = wikiLinkRegex.exec(content)) !== null) {
    const link = match[1];
    // Extract the actual link (before | if present)
    const actualLink = link.split('|')[0].trim();
    links.push(actualLink);
  }

  return [...new Set(links)]; // Remove duplicates
}

/**
 * Categorize wiki-links by type
 */
export function categorizeWikiLinks(links: string[]): {
  concepts: string[];
  philosophers: string[];
  movements: string[];
  texts: string[];
  unknown: string[];
} {
  const categorized = {
    concepts: [] as string[],
    philosophers: [] as string[],
    movements: [] as string[],
    texts: [] as string[],
    unknown: [] as string[]
  };

  // You can enhance this with more sophisticated detection
  for (const link of links) {
    // Simple heuristics - you can make this smarter
    categorized.unknown.push(link);
  }

  return categorized;
}

// ============================================================================
// CONCEPT PARSER
// ============================================================================

/**
 * Parse a concept file
 */
export function parseConcept(filePath: string, vaultRoot: string): ParsedConcept {
  const { frontmatter, content } = parseFrontmatter(filePath);
  const slug = extractSlug(filePath, vaultRoot);
  const wikiLinks = extractWikiLinks(content);

  // Extract name from content (first heading)
  const nameMatch = content.match(/^#\s+(.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : slug;

  // Extract short definition
  const shortDefMatch = content.match(/\*\*Définition courte\s*:\*\*\s*(.+?)(?:\n|$)/);
  const shortDefinition = shortDefMatch ? shortDefMatch[1].trim() : undefined;

  // Extract detailed definition
  const defMatch = content.match(/\*\*Définition détaillée\s*:\*\*\s*((?:[^-\n][^\n]*\n)*)/);
  const definition = defMatch ? defMatch[1].trim() : undefined;

  // Extract etymology if present
  const etymologyMatch = content.match(/##\s*🏛️\s*Origine étymologique\s*((?:[\s\S]*?))(?=##|$)/);
  const etymology = etymologyMatch ? { raw: etymologyMatch[1].trim() } : undefined;

  // Extract key authors table if present
  const authorsTable = extractMarkdownTable(content, 'Auteurs clés');

  // Extract examples if present
  const examplesSection = content.match(/##\s*💡\s*Exemples concrets\s*((?:[\s\S]*?))(?=##|$)/);
  const examples = examplesSection ? { raw: examplesSection[1].trim() } : undefined;

  // Extract connections
  const connectionsSection = content.match(/##\s*🔗\s*Connexions\s*((?:[\s\S]*?))(?=##|$)/);
  const connections: any = {};
  if (connectionsSection) {
    connections.raw = connectionsSection[1].trim();
    connections.wikiLinks = extractWikiLinks(connectionsSection[1]);
  }

  return {
    name,
    slug,
    definition,
    shortDefinition,
    etymology,
    keyAuthors: authorsTable,
    examples,
    connections,
    tags: frontmatter.tags || [],
    category: frontmatter.category,
    status: frontmatter.statut,
    wikiLinks
  };
}

// ============================================================================
// PHILOSOPHER PARSER
// ============================================================================

/**
 * Parse a philosopher file
 */
export function parsePhilosopher(filePath: string, vaultRoot: string): ParsedPhilosopher {
  const { frontmatter, content } = parseFrontmatter(filePath);
  const slug = extractSlug(filePath, vaultRoot);
  const wikiLinks = extractWikiLinks(content);

  // Extract name from content (first heading)
  const nameMatch = content.match(/^#\s+(.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : slug;

  // Extract identity table
  const identityMatch = content.match(/\|\s*\*\*Nom complet\*\*\s*\|\s*(.+?)\s*\|/);
  const fullName = identityMatch ? identityMatch[1].trim() : undefined;

  // Extract dates
  const datesMatch = content.match(/\|\s*\*\*Dates\*\*\s*\|\s*(.+?)\s*\|/);
  const dates = datesMatch ? datesMatch[1].trim() : undefined;

  // Parse birth and death years from dates
  let birthYear: number | undefined;
  let deathYear: number | undefined;
  if (dates) {
    const yearMatch = dates.match(/(\d{4})\s*-\s*(\d{4}|\?|présent)/i);
    if (yearMatch) {
      birthYear = parseInt(yearMatch[1]);
      const deathMatch = yearMatch[2];
      if (deathMatch && deathMatch !== '?' && deathMatch.toLowerCase() !== 'présent') {
        deathYear = parseInt(deathMatch);
      }
    }
  }

  // Extract nationality
  const nationalityMatch = content.match(/\|\s*\*\*Nationalité\*\*\s*\|\s*(.+?)\s*\|/);
  const nationality = nationalityMatch ? nationalityMatch[1].trim() : undefined;

  // Extract century
  const centuryMatch = content.match(/\|\s*\*\*Siècle\*\*\s*\|\s*(.+?)\s*\|/);
  const century = centuryMatch ? centuryMatch[1].trim() : undefined;

  // Extract main movements
  const movementsMatch = content.match(/\|\s*\*\*Courant principal\*\*\s*\|\s*(.+?)\s*\|/);
  const mainMovements = movementsMatch
    ? movementsMatch[1].split(/,|et/).map((m: string) => m.trim()).filter(Boolean)
    : [];

  // Extract disciplines
  const disciplinesMatch = content.match(/\|\s*\*\*Discipline\*\*\s*\|\s*(.+?)\s*\|/);
  const disciplines = disciplinesMatch
    ? disciplinesMatch[1].split(/,|et/).map((d: string) => d.trim()).filter(Boolean)
    : [];

  // Extract biography section
  const bioMatch = content.match(/##\s*🎭\s*Biographie intellectuelle\s*((?:[\s\S]*?))(?=##|$)/);
  const biography = bioMatch ? bioMatch[1].trim() : undefined;

  // Extract key ideas section
  const ideasMatch = content.match(/##\s*💡\s*Idées et concepts\s*((?:[\s\S]*?))(?=##|$)/);
  const keyIdeas = ideasMatch ? { raw: ideasMatch[1].trim() } : undefined;

  // Extract influences and legacy
  const influencesMatch = content.match(/##\s*🔄\s*Influences et héritage\s*((?:[\s\S]*?))(?=##|$)/);
  const influences = influencesMatch ? { raw: influencesMatch[1].trim() } : undefined;

  // Extract works if present
  const works = extractWorksList(content);

  // Extract citations
  const citations = extractCitations(content);

  return {
    name,
    slug,
    fullName,
    dates,
    birthYear,
    deathYear,
    nationality,
    century,
    biography,
    mainMovements,
    disciplines,
    keyIdeas,
    influences,
    wikiLinks,
    tags: frontmatter.tags || [],
    works,
    citations
  };
}

// ============================================================================
// MOVEMENT PARSER
// ============================================================================

/**
 * Parse a movement file
 */
export function parseMovement(filePath: string, vaultRoot: string): ParsedMovement {
  const { frontmatter, content } = parseFrontmatter(filePath);
  const slug = extractSlug(filePath, vaultRoot);
  const wikiLinks = extractWikiLinks(content);

  // Extract name from content (first heading)
  const nameMatch = content.match(/^#\s+(.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : slug;

  // Extract short definition
  const shortDefMatch = content.match(/\*\*Définition courte\s*:\*\*\s*(.+?)(?:\n|$)/);
  const shortDefinition = shortDefMatch ? shortDefMatch[1].trim() : undefined;

  // Extract detailed definition
  const defMatch = content.match(/\*\*Définition détaillée\s*:\*\*\s*((?:[^-\n][^\n]*\n)*)/);
  const description = defMatch ? defMatch[1].trim() : undefined;

  // Extract key philosophers table
  const philosophersTable = extractMarkdownTable(content, 'Philosophes clés');
  const keyPhilosophers: string[] = [];
  if (philosophersTable) {
    for (const row of philosophersTable) {
      // row is an array of cell values, first column should be philosopher name
      if (Array.isArray(row) && row.length > 0) {
        const name = row[0].trim();
        if (name && name !== 'Philosophe' && name !== 'Nom') { // Skip header rows
          keyPhilosophers.push(name);
        }
      }
    }
  }

  // Fallback: try to extract philosophers from wiki-links if table didn't work
  if (keyPhilosophers.length === 0) {
    // Try to find a section about philosophers and extract wiki-links
    const philosophersSection = content.match(/##\s*[^#]*[Pp]hilosophes[^#]*\s*((?:[\s\S]*?))(?=##|$)/);
    if (philosophersSection) {
      const links = extractWikiLinks(philosophersSection[1]);
      keyPhilosophers.push(...links);
    }
  }

  // Last resort: use all wiki-links in the content
  if (keyPhilosophers.length === 0) {
    keyPhilosophers.push(...wikiLinks);
  }

  // Extract key concepts
  const conceptsSection = content.match(/##\s*🔤\s*Concepts clés\s*((?:[\s\S]*?))(?=##|$)/);
  const keyConcepts: string[] = [];
  if (conceptsSection) {
    const conceptLinks = extractWikiLinks(conceptsSection[1]);
    keyConcepts.push(...conceptLinks);
  }

  // Extract key theses
  const theses = extractKeyTheses(content);

  // Extract period
  const periodMatch = content.match(/\*\*Période\s*:\*\*\s*(.+?)(?:\n|$)/);
  const period = periodMatch ? periodMatch[1].trim() : undefined;

  // Extract criticisms
  const criticismsMatch = content.match(/##\s*💡\s*Critiques\s*((?:[\s\S]*?))(?=##|$)/);
  const criticisms = criticismsMatch ? { raw: criticismsMatch[1].trim() } : undefined;

  return {
    name,
    slug,
    description,
    shortDefinition,
    period,
    origins: undefined,
    keyPrinciples: theses,
    keyPhilosophers,
    keyConcepts,
    variations: undefined,
    criticisms,
    influence: undefined,
    category: frontmatter.category,
    wikiLinks,
    tags: frontmatter.tags || []
  };
}

// ============================================================================
// CITATION PARSER
// ============================================================================

/**
 * Parse a citation file
 */
export function parseCitation(filePath: string, vaultRoot: string): ParsedCitation {
  const { frontmatter, content } = parseFrontmatter(filePath);
  const slug = extractSlug(filePath, vaultRoot);
  const wikiLinks = extractWikiLinks(content);

  // Extract citation text (blockquote)
  const textMatch = content.match(/>\s*"(.+?)"/s);
  const text = textMatch ? textMatch[1].trim() : '';

  // Extract author from frontmatter or content
  const author = frontmatter.auteur
    ? frontmatter.auteur.replace(/\[\[/g, '').replace(/\]\]/g, '')
    : '';

  // Extract source from frontmatter
  const source = frontmatter.livre
    ? frontmatter.livre.replace(/\[\[/g, '').replace(/\]\]/g, '')
    : undefined;

  // Extract context section
  const contextMatch = content.match(/###\s*Contexte\s*((?:[\s\S]*?))(?=###|$)/);
  const context = contextMatch ? contextMatch[1].trim() : undefined;

  // Extract analysis section
  const analysisMatch = content.match(/###\s*Signification\s*((?:[\s\S]*?))(?=###|$)/);
  const analysis = analysisMatch ? analysisMatch[1].trim() : undefined;

  // Extract concepts from wiki-links
  const concepts = wikiLinks;

  return {
    text,
    slug,
    author,
    source,
    context,
    analysis,
    concepts,
    dateAdded: frontmatter.date_ajout,
    tags: frontmatter.tags || [],
    wikiLinks
  };
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Extract markdown table as array of objects
 */
function extractMarkdownTable(content: string, tableTitle: string): any[] | undefined {
  const tableMatchResult = content.match(new RegExp(`##\\s*[^#]*${tableTitle}[^#]*\\s*((?:[\\s\\S]*?))(?=##|$)`));

  if (!tableMatchResult) return undefined;

  const tableContent = tableMatchResult[1];

  // Simple table parser - you can enhance this
  const rows: any[] = [];
  const lines = tableContent.split('\n').filter((line) => line.trim().startsWith('|'));

  for (const line of lines) {
    if (line.includes('---')) continue; // Skip separator

    const cells = line
      .split('|')
      .map((cell) => cell.trim())
      .filter((_, i) => i > 0 && i < line.split('|').length - 1); // Skip empty first/last

    if (cells.length >= 2) {
      rows.push(cells);
    }
  }

  return rows.length > 0 ? rows : undefined;
}

/**
 * Extract works list from philosopher content
 */
function extractWorksList(content: string): any[] | undefined {
  const worksMatch = content.match(/##\s*📚\s*Œuvres principales\s*((?:[\s\S]*?))(?=##|$)/);
  if (!worksMatch) return undefined;

  const worksSection = worksMatch[1];
  const works: any[] = [];

  // Extract numbered items
  const itemMatches = worksSection.matchAll(/^\d+\.\s*\*\*([^*]+)\*\*(?:\s*\((\d{4})\))?\s*/gm);
  for (const match of itemMatches) {
    works.push({
      title: match[1].trim(),
      year: match[2] ? parseInt(match[2]) : undefined
    });
  }

  return works.length > 0 ? works : undefined;
}

/**
 * Extract citations from content
 */
function extractCitations(content: string): any[] | undefined {
  const citationsSection = content.match(/##\s*💬\s*Citations célèbres\s*((?:[\s\S]*?))(?=##|$)/);
  if (!citationsSection) return undefined;

  const citations: any[] = [];
  const citationBlocks = citationsSection[1].split(/###\s*Citation/).filter(Boolean);

  for (const block of citationBlocks) {
    const textMatch = block.match(/>\s*"(.+?)"/s);
    const sourceMatch = block.match(/\*\*—\s*(.+?)\*\*$/m);

    if (textMatch) {
      citations.push({
        text: textMatch[1].trim(),
        source: sourceMatch ? sourceMatch[1].trim() : undefined
      });
    }
  }

  return citations.length > 0 ? citations : undefined;
}

/**
 * Extract key theses from movement content
 */
function extractKeyTheses(content: string): any[] | undefined {
  const thesesSection = content.match(/##\s*💡\s*Thèses clés\s*((?:[\s\S]*?))(?=##|$)/);
  if (!thesesSection) return undefined;

  const theses: any[] = [];
  const thesisBlocks = thesesSection[1].split(/###\s*/).filter(Boolean);

  for (const block of thesisBlocks) {
    const titleMatch = block.match(/^(.+?)\*\*\s*/);
    const textMatch = block.match(/\*\*(?:.+?)\*\*\s*(.+?)(?:\n\n|$)/s);

    if (titleMatch && textMatch) {
      theses.push({
        title: titleMatch[1].trim(),
        text: textMatch[1].trim()
      });
    }
  }

  return theses.length > 0 ? theses : undefined;
}

// ============================================================================
// FILE SCANNER
// ============================================================================

/**
 * Recursively scan directory for markdown files
 */
export function scanDirectory(dirPath: string, vaultRoot: string): ObsidianFile[] {
  const files: ObsidianFile[] = [];
  const items = readdirSync(dirPath);

  for (const item of items) {
    const fullPath = join(dirPath, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['.git', 'node_modules', '.obsidian'].includes(item)) {
        files.push(...scanDirectory(fullPath, vaultRoot));
      }
    } else if (item.endsWith('.md')) {
      try {
        const { frontmatter, content } = parseFrontmatter(fullPath);
        const type = detectFileType(frontmatter);

        files.push({
          path: fullPath,
          type,
          frontmatter,
          content,
          slug: extractSlug(fullPath, vaultRoot)
        });
      } catch (error) {
        console.error(`Error parsing ${fullPath}:`, error);
      }
    }
  }

  return files;
}

/**
 * Scan Obsidian Vault and categorize files
 */
export function scanObsidianVault(vaultPath: string): {
  concepts: ObsidianFile[];
  philosophers: ObsidianFile[];
  movements: ObsidianFile[];
  citations: ObsidianFile[];
  unknown: ObsidianFile[];
} {
  const allFiles = scanDirectory(vaultPath, vaultPath);

  return {
    concepts: allFiles.filter((f) => f.type === 'concept'),
    philosophers: allFiles.filter((f) => f.type === 'philosophe'),
    movements: allFiles.filter((f) => f.type === 'courant'),
    citations: allFiles.filter((f) => f.type === 'citation'),
    unknown: allFiles.filter((f) => f.type === 'unknown')
  };
}
